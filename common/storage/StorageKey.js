//本地永久存储的localStorage key值
export const local_system_id = "systemID";
export const local_open_id = "openID";
export const local_school_id = "schoolID";
export const local_region_id = "regionID";
export const local_region_choose = "regionChoose";
export const local_school_choose = "schoolChoose";
export const local_user_name = "userName";
export const local_login_region_id = "loginRegionID"
export const local_system_type = "systemType"
//地区版本号
export const local_region_version = "regionVersion"

//学科兴趣StrInt、职业性格MBTI、职业兴趣Holland 测试题目及答案缓存使用localstorage，因为key值过多不便书写，现将key的规则在此说明
//题目缓存key: UserID_StrInt_question UserID_MBTI_question UserID_Holland_question
//答案缓存key: UserID_StrInt_answer_0 最后一位数字为题目显示的顺序，从0开始

//会话级别的sessionStorage key值
export const session_qrcode_src = "qrcodeSrc";
export const session_qrcode_time = "qrcodeTime";
export const session_collegeScope = "collegeScope";
export const session_UserID = "UserID";
export const session_systemID = "systemID";
export const session_regionID = "RegionID";
export const session_token = "token";
export const session_grade = "grade";
export const session_stuClass = "stuClass";
export const session_schoolID = "schoolID";
export const session_nextStepID = "nextStepID";
export const session_isDone = "isDone";
export const session_authCode = "authCode";
export const session_branchID = "branchID";//校区
export const session_gradeID = 'gradeID';

export const session_roleEnum = "roleEnum";//0 for stu 1 for teacher 2 for admin
export const session_termID = "session_termID";

export const session_systemType = "systemType";
export const session_educationStage = "EducationStage";

export const session_roleID = "roleID";
export const session_departmentID = "departmentID";

export const session_loginTypeID = "loginTypeID";

export const region_resourceid = 'resourceid'
export const session_user_regionID = 'userRegionID';

export const login_url = "loginUrl";

export const session_dashboardURL = "dashboardURL";

