
import * as exPrivilegeUtil from '../../../nicezhuanye_frontend_common/privilege/PrivilegeUtil.js'

//根据moduleIDs 请求并存储权限信息
export function initPrivilege(initModules){

    exPrivilegeUtil.initPrivilege(initModules)
}


export function hasAtLeastOneModule(modules) {
    return exPrivilegeUtil.hasAtLeastOneModule(modules);
}

export function getPrivilegeByModuleID(privilege, moduleID){
    return exPrivilegeUtil.getPrivilegeByModuleID(privilege, moduleID);
}

export function isInStringArray( str, strArray){
    return exPrivilegeUtil.isInStringArray( str, strArray);
}

export function getDepartmentType( departmentObj ){
    return exPrivilegeUtil.getDepartmentType( departmentObj );
}

/**
 * department 是否包含在departmentArray 中，一般用在权限范围的大小判断
 * @param department
 * @param departmentArray
 * @returns {boolean}
 */
export function isDepartmentCoveredByDepartmentArray(department, departmentArray){
    return exPrivilegeUtil.isDepartmentCoveredByDepartmentArray(department, departmentArray);
}

/**
 * department 是否包含在targetDepartment中
 * @param department
 * @param targetDepartment
 * @returns {boolean}
 */
export function isDepartmentCoveredByTargetDepartment(department, targetDepartment){
    return exPrivilegeUtil.isDepartmentCoveredByTargetDepartment(department, targetDepartment);
}

export function isStringArrayInStringArray(smallArray, bigArray){
    return exPrivilegeUtil.isStringArrayInStringArray(smallArray, bigArray);
}

export function transTargetToDepartment(target){
    return exPrivilegeUtil.transTargetToDepartment(target);
}

export function transDepartmentToTarget(department){
    return exPrivilegeUtil.transDepartmentToTarget(department);
}
