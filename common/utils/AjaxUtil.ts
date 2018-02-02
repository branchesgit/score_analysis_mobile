
import * as StorageKey from "../storage/StorageKey";

export interface AjaxConfig {
    type?: string;
    async?: boolean;
    success?: Function;
    error?: Function;
    dataType?: string;
    url?: string;
    data?: any;
    contentType?: string;
};

declare var $;
declare var hzyCommon;

export default class AjaxUtil {

    private constructor() { }

    static _instance: AjaxUtil;

    static getInstance(): AjaxUtil {

        if (!AjaxUtil._instance) {
            AjaxUtil._instance = new AjaxUtil();
        }

        return AjaxUtil._instance;
    }

    queryResultJSON(ajaxConf: AjaxConfig) {
        ajaxConf.type = ajaxConf.type || "POST";
        ajaxConf.dataType = ajaxConf.dataType || "json";

        var errorFunc = ajaxConf.error || function () { };
        var error = function (response) {
            return function () {
                var status = response.status;

                if (status === 911) {
                    window.location.href = "//" + hzyCommon.serverIP + "/regionLogin/index.html";
                } else {
                    errorFunc(response);
                }
            }
        }

        ajaxConf.error = error;
        ajaxConf.url && ( ajaxConf.url = "http://" + hzyCommon.serverIP + this.translateUrl(ajaxConf.url) );

        if( ajaxConf.type.toLocaleLowerCase() === "post" ) {
            var data = $.extend(true, this.getAjaxCommonData(), ajaxConf.data || {});
            ajaxConf.data = JSON.stringify(data);
        }
        
        ajaxConf.contentType = "application/json; charset=utf-8";

        return $.ajax(ajaxConf);
    }

    translateUrl(url) {
        var rbracket = /{(\w+)}/g;

        url = url.replace(rbracket, (all, letter) => {
            var value = window.sessionStorage.getItem(letter);
            if (!value) {
                value = "01";
            }
            return value;
        });

        return url;
    }

    getAjaxCommonData() {
        var obj: any = {},
            getValueFromSessionStorage = function (key) {
                return window.sessionStorage.getItem(key);
            };

        if (getValueFromSessionStorage("UserID")) {
            obj.UserID = getValueFromSessionStorage("UserID");
        }
        if (getValueFromSessionStorage("token")) {
            obj.token = getValueFromSessionStorage("token");
        }
        if (getValueFromSessionStorage("schoolID")) {
            obj.SchoolID = getValueFromSessionStorage("schoolID");
        }
        if (getValueFromSessionStorage("systemID")) {
            obj.SystemID = getValueFromSessionStorage("systemID");
        }
        if (getValueFromSessionStorage("grade")) {
            obj.Grade = getValueFromSessionStorage("grade");
        }
        if (getValueFromSessionStorage("RegionID")) {
            obj.RegionID = getValueFromSessionStorage("RegionID");
        }
        if (getValueFromSessionStorage("stuClass")) {
            obj.StuClass = getValueFromSessionStorage("stuClass");
        }
        if (getValueFromSessionStorage("EducationStage")) {
            obj.EducationStage = getValueFromSessionStorage("EducationStage");
        }

        return obj;
    }
}