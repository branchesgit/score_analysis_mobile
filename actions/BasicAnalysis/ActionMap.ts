import * as Actions from "./ActionTypes";

const basicAnalysisActionMapTemp = {};
const basicAnalysisUrlMapTemp = {};

const GET_SUBJECT_MAP = "basicAnalysis/GET_SBUJECT_FILTER";
basicAnalysisActionMapTemp[Actions.GET_SUBJECT_MAP] = {
    url: GET_SUBJECT_MAP,
    modules: [{ }]
};

const GET_GRADE_EXAM_INFO = "/srest/baseAnalysis/head";
basicAnalysisActionMapTemp[Actions.GET_GRADE_EXAM_INFO] = {
    url: GET_GRADE_EXAM_INFO,
    modules: [{}],
    useMockData: false
};

function handleActionToUrlMap() {
    for (var name in basicAnalysisActionMapTemp) {
        let actionInfo = basicAnalysisActionMapTemp[name]
        var {url} = actionInfo;
        basicAnalysisUrlMapTemp[url] = name;
    }
}
handleActionToUrlMap();

export const basicAnalysisActionMap = basicAnalysisActionMapTemp;
export const basicAnalysisUrlMap = basicAnalysisUrlMapTemp;
