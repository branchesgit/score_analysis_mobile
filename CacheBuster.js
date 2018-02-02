const fs = require('fs'),
	path = require('path');

var rsrcCapture = /src=\"([^\"]*)\"/g,
	rsrc = /src=\"[^\"]*\"/,
	rscript = /(<script [^>]*><\/script>)/g,
	rlink = /(<link [^>]*>)/g,
	rhrefCapture = /href=\"([^\"]*)\"/g,
	rhref = /href=\"[^\"]*\"/;


/**
* 简易版的，去html文件里的css js文件对应的修改时间点，
* 直接以当前打包时间修改css,js文件的版本号。 
*/
//修改html里的 css,js对应的版本号：
function CacheBuster(htmlPathList, appFolder) {
	this.htmlPathList = htmlPathList;
}

var proto = CacheBuster.prototype;

function validateJSIsCDN(script) {
	var src = getScriptSrc(script);
	return src.indexOf("http") !== -1 || src.indexOf("https") !== -1;
}

function getScriptSrc(scriptTag) {
	var filePath;

	scriptTag.replace(rsrcCapture, function (all, letter) {
		filePath = letter;
	});

	return filePath;
}

function getDateString(date, seperator) {
	if (!seperator) {
		seperator = "-"
	}


	return date.getFullYear() + seperator + (date.getMonth() + 1) + seperator + date.getDate() + seperator
		+ date.getHours() + seperator + date.getMinutes() + seperator + date.getSeconds();
}

//查找最近一次文件的修改时间
function getFileLatelyTime(rferFile, filePath) {
	var folder = filePath.replace(/\/[^\/]*$|\\[^\\]*$/, "");
	var targetFilePath = path.join(folder, rferFile);
	var mtime = new Date;

	try {
		var fileInfo = fs.statSync(targetFilePath); //statSync
		mtime = fileInfo.mtime;
	} catch (err) {
		return mtime;
	}


	return mtime;
}

function getScriptVersion(scriptTag, filePath) {
	var src = getScriptSrc(scriptTag);

	if (src) {
		//src带了?的话：
		if (/\?/.test(src)) {
			src = src.replace(/\?.*/, "");
		}

		src += "?";
		src += getDateString(getFileLatelyTime(src.replace("?", ""), filePath));

		scriptTag = scriptTag.replace(rsrc, function (all, letter) {
			return "src=\"" + src + "\"";
		})
	}

	return scriptTag;
}

function getCssVersion(linkTag, htmlPath) {
	var href;

	linkTag.replace(rhrefCapture, function (all, letter) {
		href = letter;
	})

	if (/\?/.test(href)) {
		href = href.replace(/\?.*/g, '');
	}

	href += "?";
	href += getDateString(getFileLatelyTime(href.replace("?", ""), htmlPath));

	linkTag = linkTag.replace(rhref, function (all, letter) {
		return "href=\"" + href + "\""
	})

	return linkTag;
}

//修改下html, css文件的版本号
proto.updateJSCSSVersion = function () {
	var htmlPathList = this.htmlPathList;
	var this_ = this;

	for (var i = 0; i < htmlPathList.length; i++) {
		var htmlPath = htmlPathList[i];

		if (fs.existsSync(htmlPath)) {
			//需要绝对路径：
			var htmlRealPath = fs.realpathSync(htmlPath);


			var data = fs.readFileSync(htmlPath, 'utf-8');

			data = data.replace(rscript, function (all, letter) {
				if (!validateJSIsCDN(letter)) {
					letter = getScriptVersion(letter, htmlRealPath);
					return letter;
				} else {
					return letter;
				}
			});

			//修改css
			data = data.replace(rlink, function (all, letter) {
				letter = getCssVersion(letter, htmlRealPath);
				return letter;
			})

			fs.writeFileSync(htmlPath, data);
		}
	}
};

proto.updateJsAndCSSVersionInHtml = proto.updateJSCSSVersion;

module.exports = CacheBuster;