
import * as exStorageUtil from '../../../nicezhuanye_frontend_common/storage/StorageUtil.js'
import {session_dragMessageTipHide} from "./StorageKey";
import {setValueToSessionStorage, getValueFromSessionStorage} from "../func/CommonFunc";

export function getRoleID() {
    return exStorageUtil.getRoleID();
}

export function setRoleID(roleID) {
    exStorageUtil.setRoleID(roleID);
}

export function getDepartmentID() {
    return exStorageUtil.getDepartmentID();
}
export function setDepartmentID(departmentID) {
    return exStorageUtil.setDepartmentID(departmentID);
}


export function setRegionID( regionID ){
    exStorageUtil.setRegionID( regionID )
}

export function getRegionID(){
    return exStorageUtil.getRegionID();
}


export function setSchoolID( schoolID ){
    exStorageUtil.setSchoolID( schoolID )
}

export function getSchoolID(){
    return exStorageUtil.getSchoolID()
}

export function setGradeID( gradeID ){
    exStorageUtil.setGradeID( gradeID )
}

export function getGradeID(){
    return exStorageUtil.getGradeID()
}

export function getClassID() {
    return exStorageUtil.getClassID()
}

export function setClassID(classID) {
    exStorageUtil.setClassID(classID)
}

export function setUserID( UserID ){
    exStorageUtil.setUserID( UserID )
}

export function getUserID(){
    return exStorageUtil.getUserID()
}

export function getToken() {
    return exStorageUtil.getToken()
}
export function setToken(token) {
    return exStorageUtil.setToken(token)
}

export function setSystemID(systemID) {
    exStorageUtil.setSystemID(systemID)
}
export function getSystemID() {
    return exStorageUtil.getSystemID()
}

export function initUserInfo(basicInfo){
    exStorageUtil.initUserInfo(basicInfo)
}


export function setRoleEnum(roleEnum){
    exStorageUtil.setRoleEnum(roleEnum)
}
export function getRoleEnum(){
    return exStorageUtil.getRoleEnum();
}

export function setTermID(termID){
    exStorageUtil.setTermID(termID);
}
export function getTermID(){
    return exStorageUtil.getTermID();
}
export function setLoginTypeID(loginTypeID){
    return exStorageUtil.setLoginTypeID(loginTypeID)
}

export function setBranchID(BranchID){
    exStorageUtil.setBranchID(BranchID);
}
export function getBranchID(){
    return exStorageUtil.getBranchID();
}


//调课时，是否显示拖拽提示
export function setDragMessageTipHide(isShow){
    setValueToSessionStorage(session_dragMessageTipHide, isShow)
}
export function getDragMessageTipHide(){
    return getValueFromSessionStorage(session_dragMessageTipHide,false);
}

export function setUserRegionID(userRegionID){
    return exStorageUtil.setUserRegionID(userRegionID)
}

export function getUserRegionID(){
    return exStorageUtil.getUserRegionID()
}