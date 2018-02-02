
import * as exStorageKey from '../../../nicezhuanye_frontend_common/storage/storageKey.js'

//本地永久存储的localStorage key值
export const local_system_id = exStorageKey.local_system_id;
export const local_open_id = exStorageKey.local_open_id;
export const local_school_id = exStorageKey.local_school_id;
export const local_region_id = exStorageKey.local_region_id;
export const local_region_choose = exStorageKey.local_region_choose;
export const local_school_choose = exStorageKey.local_school_choose;
export const local_user_name = exStorageKey.local_user_name;
export const local_system_type = exStorageKey.local_system_type;
export const local_login_region_id = exStorageKey.local_login_region_id;

//学科兴趣StrInt、职业性格MBTI、职业兴趣Holland 测试题目及答案缓存使用localstorage，因为key值过多不便书写，现将key的规则在此说明
//题目缓存key: UserID_StrInt_question UserID_MBTI_question UserID_Holland_question
//答案缓存key: UserID_StrInt_answer_0 最后一位数字为题目显示的顺序，从0开始

//会话级别的sessionStorage key值
export const session_qrcode_src = exStorageKey.session_qrcode_src;
export const session_qrcode_time = exStorageKey.session_qrcode_time;
export const session_collegeScope = exStorageKey.session_collegeScope;
export const session_UserID = exStorageKey.session_UserID;
export const session_systemID = exStorageKey.session_systemID;
export const session_regionID = exStorageKey.session_regionID;
export const session_token = exStorageKey.session_token;
export const session_grade = exStorageKey.session_grade;
export const session_stuClass = exStorageKey.session_stuClass;
export const session_schoolID = exStorageKey.session_schoolID;
export const session_nextStepID = exStorageKey.session_nextStepID;
export const session_isDone = exStorageKey.session_isDone;
export const session_authCode = exStorageKey.session_authCode;

export const session_roleEnum = exStorageKey.session_roleEnum;//0 for stu 1 for teacher 2 for admin
export const session_termID = exStorageKey.session_termID;

export const session_systemType = exStorageKey.session_systemType;
export const session_educationStage = exStorageKey.session_educationStage;

export const session_roleID = exStorageKey.session_roleID;
export const session_departmentID = exStorageKey.session_departmentID;
export const session_branchID = exStorageKey.session_branchID;
export const session_gradeID = exStorageKey.session_gradeID;


export const session_dragMessageTipHide = "dragMessageTipHide" //调课时，是否隐藏拖拽提示