import * as Actions from './ActionTypes'

let basicAnalysisActionMapTemp = {}
let basicAnalysisUrlMapTemp = {}

let GET_SUBJECT_MAP = 'basicAnalysis/GET_SBUJECT_FILTER'
basicAnalysisActionMapTemp[Actions.GET_SUBJECT_MAP] = {
    url:GET_SUBJECT_MAP,
    modules:[{
        
    }]
}
let GET_GRADE_EXAM_INFO = '/srest/{RegionID}/{SchoolID}/baseAnalysis/head'
basicAnalysisActionMapTemp[Actions.GET_GRADE_EXAM_INFO] = {
    url:GET_GRADE_EXAM_INFO,
    modules:[{
        
    }],
    useMockData:false
}

function handleActionToUrlMap(){
    for(var name in basicAnalysisActionMapTemp){
        var actionInfo = basicAnalysisActionMapTemp[name]
        var {url} = actionInfo;
        basicAnalysisUrlMapTemp[url] = name;
    }
}
handleActionToUrlMap()

export const basicAnalysisActionMap = basicAnalysisActionMapTemp;
export const basicAnalysisUrlMap = basicAnalysisUrlMapTemp;