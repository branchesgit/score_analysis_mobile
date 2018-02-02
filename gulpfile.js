/**
 * @author Thomas.Lin
 * @version 1.0
 * 2017-05-09
 * 使用说明：
 * 首先安装需要的资源文件
 *  npm install
 * 进入项目的根目录,输入 
 *  gulp
 * 程序默认在根目录下生成nicezhuanye_frontend_query.zip文件
 * gulp dev 
 * 默认在根目录下生成nicezhuanye_frontend_query_dev.zip的开发版本文件
 *
 */
var gulp = require('gulp'),
    // os = require('os'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    webpack = require('webpack'),
    zip = require('gulp-zip'),
    gulpSequence = require('gulp-sequence'),
    gutil = require('gulp-util'),
    shell = require('gulp-shell'),
    uglify = require('gulp-uglify'),
    cssmin = require("gulp-minify-css"),
    htmlmin = require("gulp-htmlmin"),
    del = require('del');

var CacheBuster = require('./CacheBuster');

var root_path = './tmp/'; //文件临时生成的目录
var dist_folder = 'dist'; //js,css等资源文件生成目录
var zip_name = 'scoreanalysis.war';
var zip_dev_name = 'scoreanalysis_dev.zip';
//将图片拷贝到目标目录
// gulp.task('copy:images', function (done) {
//     gulp.src(['src/styles/images/**/*']).pipe(gulp.dest(root_path+dist_folder+'/images')).on('end', done);
//
// });
//copy整个src目录下的图片
gulp.task('copy:favicon', function (done) {
    gulp.src(['src/styles/images/**/*']).pipe(gulp.dest(root_path+'/src/styles/images/')).on('end', done);
    
});
//将html页面拷贝到目标目录
gulp.task('copy:html',function (done) {

    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(['./*.html']).pipe(htmlmin(options)).pipe(gulp.dest(root_path)).on('end', done);
});
//将vendor资源文件拷贝到目标目录
gulp.task('copy:vendor', function (done) {
    gulp.src(['./vendor/**/*']).pipe(gulp.dest(root_path+'vendor')).on('end', done);
});
//将js资源文件拷贝到目标目录,同时对js进行混淆
gulp.task('copy:js', function (done) {
    gulp.src(['./dist/**/*.js'])
    // .pipe(uglify({
    //         compress: true,//类型：Boolean 默认：true 是否完全压缩
    //         preserveComments: 'license' //保留所有注释
    // }))
    .pipe(gulp.dest(root_path+dist_folder)).on('end', done);
});
//将js资源文件拷贝到目标目录,同时对js进行混淆
gulp.task('copy-dev:resource', function (done) {
    gulp.src(['./dist/**/*'])
    .pipe(gulp.dest(root_path+dist_folder)).on('end', done);
});
//将css资源文件拷贝到目标目录
gulp.task('copy:css', function (done) {
    gulp.src(['./dist/**/*.css']).pipe(cssmin()).pipe(gulp.dest(root_path+dist_folder)).on('end', done);
});
//将压缩之后的图片拷贝到目标目录
gulp.task('copy:production-image', function (done) {
    gulp.src(['./dist/images/**/*']).pipe(gulp.dest(root_path+dist_folder+"/images")).on('end', done);
});

gulp.task('clean:tmp', function (done) {
   return del([
        root_path,zip_name,"dist/*"
    ],done);
});
//压缩命令
gulp.task('zip',()=>{
    gulp.src(root_path+'**/*').pipe(zip(zip_name)).pipe(gulp.dest('./'));
});
//压缩开发包命令
gulp.task('zip_dev',()=>{
    gulp.src(root_path+'**/*').pipe(zip(zip_dev_name)).pipe(gulp.dest('./'));
});
//调用webpack命令生成资源文件
gulp.task("build-js", shell.task('webpack -d'));
//压缩 ,webpack -p压缩如果频繁报错，建议在webpack配置里plugins配置UglifyJsPlugin,不要直接使用webpack -p
gulp.task("build-prod-js", shell.task('webpack -p'));

//调用webpack命令生成开发用的资源文件
gulp.task("build-dev-js", shell.task('webpack --config webpack.config.dev.js -d  '));

//一键生成
gulp.task("default",function(cb){
    gulpSequence('clean:tmp','copy:vendor','copy:favicon','build-prod-js',"updateJsVersion",'copy:html',"copy:js","copy:css","copy:production-image",'zip',cb);
});
//一键生成开发版本
gulp.task("dev",function(cb){
    gulpSequence('clean:tmp','copy:html','copy:vendor','copy:images','copy:favicon','build-dev-js',"copy-dev:resource",'zip_dev',cb);
});


var needUpdateVersionHtmlPathListClassify = [
	'./index.html',
];

function classifyCacheBuster() {
	var cacheBust = new CacheBuster(needUpdateVersionHtmlPathListClassify, null);
	cacheBust.updateJsAndCSSVersionInHtml();
}
gulp.task('classifyCacheBuster', classifyCacheBuster);
gulp.task("updateJsVersion", ["classifyCacheBuster"]);