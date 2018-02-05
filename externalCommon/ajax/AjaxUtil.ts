
import * as exCommonAjaxUtil from '../../../nicezhuanye_frontend_common/ajax/AjaxUtil.js'
import { allActionMap, GlobalDatasource } from "../ExternalCommonConfig";
import { getActionInfo } from "../privilege/ActionInfoUtil";
import { mockDataByUrl } from "../mock/MockUtil";
import { scoreServUrl } from "../const/CommonVar";
// import { Modal } from 'antd'
import * as commonVar from '../const/CommonVar'
import { getLoginURL } from "../func/CommonFunc";

export function exportClassFileByActionID(form, exportActionID, showFilename, query, methodName) {
    exCommonAjaxUtil.exportClassFileByActionID(form, exportActionID, showFilename, query,
        allActionMap, methodName, scoreServUrl);
}

/**
 * 导出文件
 * @param form 表单元素
 * @param exportActionID
 * @param showFilename
 * @param query target或其他参数
 */
export function exportFileByActionID(form, exportActionID, showFilename, query) {
    exCommonAjaxUtil.exportFileByActionID(form, exportActionID, showFilename, query, allActionMap, scoreServUrl)
}

function isUseMockData(actionID, allActionMap) {
    return exCommonAjaxUtil.isUseMockData(actionID, GlobalDatasource, allActionMap)
}

function mockDataIfRequired(actionID) {

    if (isUseMockData(actionID, allActionMap)) {
        mockDataByUrl(getActionInfo(actionID).url);
    }
}

var hasPopExprired = false;

//这里添加个登录超时处理函数
function wrapExpiredFunc(err) {
    // return function( XMLHQ,response ){
    //     if( response.status == 911 ) {

    //         if( !hasPopExprired ) {
    //             hasPopExprired = true;

    //             Modal.error({
    //                 title: "系统提示：",
    //                 content:"登录超时，是否返回登录页？",
    //                 onOk: function(){
    //                     hasPopExprired = false;
    //                     window.location.href = getLoginURL()
    //                 },
    //                 onCancel: function(){
    //                     hasPopExprired = false;
    //                     window.close();
    //                 }
    //             });
    //         }
    //     } else {
    //         err && err();
    //     }
    // }
}
/**
 *  异步请求 必须传递successFunc
 * @param actionID
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 */
export function getDataByActionIDAsync(actionID, successFunc?: Function, failFunc?: Function, errorFunc?: Function) {

    mockDataIfRequired(actionID);
    var errFunc = wrapExpiredFunc(errorFunc);

    return exCommonAjaxUtil.getDataByActionIDAsync(actionID, successFunc, failFunc, errFunc, allActionMap, scoreServUrl)
}

/**
 * 异步请求 带参数 必须传递successFunc
 * @param actionID
 * @param queryObj
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 */
export function getDataByActionIDWithQueryAsync(actionID, queryObj, successFunc?: Function, failFunc?: Function, errorFunc?: Function): any {
    mockDataIfRequired(actionID);
    var errFunc = wrapExpiredFunc(errorFunc);
    return exCommonAjaxUtil.getDataByActionIDWithQueryAsync(actionID, queryObj, successFunc, failFunc, errFunc, allActionMap, scoreServUrl)
}

/**
 * 同步请求
 * @param actionID
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 * @returns {any}
 */
export function getDataByActionID(actionID: string, successFunc?: Function, failFunc?: Function, errorFunc?: Function) {
    mockDataIfRequired(actionID);
    var errFunc = wrapExpiredFunc(errorFunc);
    return exCommonAjaxUtil.getDataByActionID(actionID, successFunc, failFunc, errFunc, allActionMap, scoreServUrl);
}

/**
 * 同步带参请求
 * @param actionID
 * @param queryObj
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 * @returns {{}}
 */
export function getDataByActionIDWithQuery(actionID, queryObj, successFunc?: Function, failFunc?: Function, errorFunc?: Function) {
    mockDataIfRequired(actionID);
    var errFunc = wrapExpiredFunc(errorFunc);
    return exCommonAjaxUtil.getDataByActionIDWithQuery(actionID, queryObj, successFunc, failFunc, errFunc, allActionMap, scoreServUrl);
}

/**
 * 从缓存中获取结果，如果缓存中没有，发起ajax，然后将结果放入缓存
 * 缓存的key 是actionID 如果queryObj不为空，将其序列化后，以下划线链接
 */
export function getDataFromContextByActionID(contextArray, actionID, queryObj) {
    mockDataIfRequired(actionID);
    return exCommonAjaxUtil.getDataFromContextByActionID(contextArray, actionID, queryObj, allActionMap, scoreServUrl);
}

export function getDataFromContextByActionIDAsync(contextArray, actionID, successFunc, queryObj) {
    mockDataIfRequired(actionID);
    exCommonAjaxUtil.getDataFromContextByActionIDAsync(contextArray, actionID, successFunc, queryObj, allActionMap, scoreServUrl);
}