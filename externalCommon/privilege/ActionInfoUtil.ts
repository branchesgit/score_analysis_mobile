
import * as exActionInfoUtil from '../../../nicezhuanye_frontend_common/privilege/ActionInfoUtil.js'
import {allActionMap} from "../ExternalCommonConfig";
import {isDebug} from "../const/CommonVar";
import {SystemIDEnum} from "../const/SystemIDEnum";
import {isEmptyObject} from "../func/CommonFunc";


export const CANLINK = "canLink" //管理员帐号是否可点击标志位

/**
 * 权限部分调用
 * 1、判断是否有此url权限 isValidAction(actionID);
 * 2、发送请求时自动组装privilege  getDataByActionID(actionID);请求方式有多种 参照ajaxUtil中方法
 *
 * 权限部分配置
 * 1、actionTypes 定义字符常量
 * 2、actionMap 定义url moduleID operates 关系 *注意*此处是operates 表示数组，如果不需要权限 modules:[],
 *
 * var GET_READTUDENTUNCOMPLETE = "/privilege/GET_READTUDENTUNCOMPLETE"; //对应action请求url，baseurl之后的路径，
 subjectActionMapTemp[ActionTypes.GET_READTUDENTUNCOMPLETE] = {
		url: GET_READTUDENTUNCOMPLETE,
		modules:[
			{
				moduleID:"Statistic_SubjectChoiceStatus1",
				operates:["Update"]
			}
		]
	};
 *'
 * 3、ActionInfoUtil 中添加 actionMap
 */



//通过actionID 获取相关的url和privilege
export function getActionInfo( actionID){
    return exActionInfoUtil.getActionInfo(actionID, allActionMap);
}

export function getActionBasicInfo(actionID){
    return exActionInfoUtil.getActionBasicInfo(actionID, allActionMap);
}

/**
 * 是否有权限 在此actionID 此范围内
 * @param actionID
 */
export function isValidAction(actionID){
    return exActionInfoUtil.isValidAction(actionID, allActionMap,false);
}

export function isValidActionWithoutSchool(actionID){
    return exActionInfoUtil.isValidActionWithoutSchool(actionID, allActionMap);
}


//使用sessionStorage中值替换url中参数
export function translateUrl(oriUrl, useMockData:boolean = false){
    return exActionInfoUtil.translateUrl(oriUrl,useMockData);
}

export function translateUrlMapKey(resetPwdUrlMapTemp){
    var newUrlMap = {};
    for (var key in resetPwdUrlMapTemp){
        if( typeof resetPwdUrlMapTemp[key] == 'string' ){
            var newKey = translateUrl(key);
            var value = resetPwdUrlMapTemp[key];
            newUrlMap[newKey] = value;
        } else {
            var {useMockData, actionID } = resetPwdUrlMapTemp[key];
            var newKey = translateUrl(key,useMockData);
            var value = actionID; //resetPwdUrlMapTemp[key];
            newUrlMap[newKey] = value;
        }
    }
    return newUrlMap;
}

export function addSystemIDForAjax(data, actionID){
    if (!isEmptyObject(data["privilege"]) && (typeof data["privilege"]["systemID"] == "undefined")) {
        var systemID = getActionBasicInfo(actionID).systemID;
        if(typeof systemID == "undefined" && isDebug()){
            systemID = SystemIDEnum.SubjChoiceSystem.value;
            console.log("error: systemid required, but undefined, actionID: " + actionID + ", use default " + systemID);
        }
        data["privilege"]["systemID"] = systemID;
    }
    return data;
}
