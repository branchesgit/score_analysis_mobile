import { getDataByActionIDWithQueryAsync, getDataByActionIDWithQuery } from "../../externalCommon/ajax/AjaxUtil";
import { GET_GRADE_EXAM_INFO } from "../../actions/BasicAnalysis/ActionTypes";
import BAContent from "./BAContext";

export default class BAService {

    private constructor() {
    }

    static instance: BAService;

    static getInstance() {

        if (!BAService.instance) {
            BAService.instance = new BAService();
        }

        return BAService.instance;
    }
    getGradeExamInfo( queryObj ) {

        const succ = res => {
            const BAContentIns = BAContent.getInstance();
            BAContentIns.setGradeExamMap(res.result);

        };
        const fail = () => { };
        return getDataByActionIDWithQueryAsync(GET_GRADE_EXAM_INFO, queryObj, succ, fail, fail);
    }

}
