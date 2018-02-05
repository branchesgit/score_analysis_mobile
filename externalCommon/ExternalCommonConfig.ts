import { basicAnalysisActionMap, basicAnalysisUrlMap} from "../actions/BasicAnalysis/ActionMap";
import { basicAnalysisMockTemplate } from "../actions/BasicAnalysis/MockTemplateMap";
// actionID ---> template of data.
export const allTemplateMap = {
    basicAnalysisMockTemplate

};

// url -->actionID;
export const allUrlMap = {
    basicAnalysisUrlMap
};

// actionID --->basicActionIDInfo
export const allActionMap = {
    basicAnalysisActionMap

};

// GlobalForceToUseRealData|GlobalUseComponentData|GlobalForceUseMockData;
export const GlobalDatasource = "GlobalForceUseMockData";
