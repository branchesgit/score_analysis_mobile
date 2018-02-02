import * as Actions from './ActionTypes'
let mockMapTemp = {}

mockMapTemp[Actions.GET_SUBJECT_MAP] = {
    "code": 0,
    "status": "success",
    "result": {
        "mainSubjs": [
            { "subjectName": "语文", "subjectID": "8" },
            { "subjectName": "数学", "subjectID": "9" },
            { "subjectName": "英语", "subjectID": "10" }],
        "chooseableSubjs": [
            { "subjectName": "物理", "subjectID": "1" },
            { "subjectName": "化学", "subjectID": "2" },
            { "subjectName": "生物", "subjectID": "3" },
            { "subjectName": "政治", "subjectID": "4" },
            { "subjectName": "历史", "subjectID": "5" },
            { "subjectName": "地理", "subjectID": "6" },
            { "subjectName": "技术", "subjectID": "7" },
        ] 
    }
}

mockMapTemp[Actions.GET_GRADE_EXAM_INFO] = {
    "status": "success",
    "result": {
        "examGrades": [
            { //考试年级列表
                "examGrade": "2017",
                "examGradeName": "高二"
            },
            {
                "examGrade": "2016",
                "examGradeName": "高一"
            }
        ],
        "gradeExamMap": { //考试年级id与考试场次
            "2017": [
                {
                    "examID": "1154",
                    "examName": "第一次月考成绩",
                    "examTime": "2017-03-20"
                }
            ],
            "2016": [{
                "examID": "1134",
                "examName": "第二次月考成绩",
                "examTime": "2017-11-20"
            }]
        },

        "examSubjMap": { //考试id与考试学科
            "1154": [
                { "subjectName": "语文", "subjectID": "8" },
                { "subjectName": "数学", "subjectID": "9" },
                { "subjectName": "英语", "subjectID": "10" },
                { "subjectName": "物理", "subjectID": "1" },
                { "subjectName": "化学", "subjectID": "2" },
                { "subjectName": "生物", "subjectID": "3" },
                { "subjectName": "政治", "subjectID": "4" },
                { "subjectName": "历史", "subjectID": "5" },
                { "subjectName": "地理", "subjectID": "6" }
            ],
            "1134":[
                { "subjectName": "语文", "subjectID": "8" },
                { "subjectName": "数学", "subjectID": "9" },
                { "subjectName": "英语", "subjectID": "10" },
                { "subjectName": "物理", "subjectID": "1" },
                { "subjectName": "化学", "subjectID": "2" },
                { "subjectName": "生物", "subjectID": "3" },
                { "subjectName": "政治", "subjectID": "4" },
                { "subjectName": "历史", "subjectID": "5" },
                { "subjectName": "地理", "subjectID": "6" }
            ]
        }
    }
}
export const basicAnalysisMockTemplate = mockMapTemp;