"use strict";
var exActionInfoUtil = require("../../../nicezhuanye_frontend_common/privilege/ActionInfoUtil.js");
var ExternalCommonConfig_1 = require("../ExternalCommonConfig");
exports.CANLINK = "canLink"; //管理员帐号是否可点击标志位
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
function getActionInfo(actionID) {
    return exActionInfoUtil.getActionInfo(actionID, ExternalCommonConfig_1.allActionMap);
}
exports.getActionInfo = getActionInfo;
function getActionBasicInfo(actionID) {
    return exActionInfoUtil.getActionBasicInfo(actionID, ExternalCommonConfig_1.allActionMap);
}
exports.getActionBasicInfo = getActionBasicInfo;
/**
 * 是否有权限 在此actionID 此范围内
 * @param actionID
 */
function isValidAction(actionID) {
    return exActionInfoUtil.isValidAction(actionID, ExternalCommonConfig_1.allActionMap, false);
}
exports.isValidAction = isValidAction;
function isValidActionWithoutSchool(actionID) {
    return exActionInfoUtil.isValidActionWithoutSchool(actionID, ExternalCommonConfig_1.allActionMap);
}
exports.isValidActionWithoutSchool = isValidActionWithoutSchool;
//使用sessionStorage中值替换url中参数
function translateUrl(oriUrl, useMockData) {
    if (useMockData === void 0) { useMockData = false; }
    return exActionInfoUtil.translateUrl(oriUrl, useMockData);
}
exports.translateUrl = translateUrl;
function translateUrlMapKey(resetPwdUrlMapTemp) {
    var newUrlMap = {};
    for (var key in resetPwdUrlMapTemp) {
        if (typeof resetPwdUrlMapTemp[key] == 'string') {
            var newKey = translateUrl(key);
            var value = resetPwdUrlMapTemp[key];
            newUrlMap[newKey] = value;
        }
        else {
            var _a = resetPwdUrlMapTemp[key], useMockData = _a.useMockData, actionID = _a.actionID;
            var newKey = translateUrl(key, useMockData);
            var value = actionID; //resetPwdUrlMapTemp[key];
            newUrlMap[newKey] = value;
        }
    }
    return newUrlMap;
}
exports.translateUrlMapKey = translateUrlMapKey;
