export default class BAContent {

    private constructor() {
    }

    static instance: BAContent;

    static getInstance() {

        if (!BAContent.instance) {
            BAContent.instance = new BAContent();
        }

        return BAContent.instance;
    }

    gradeExamMap;

    getGradeExamMap() {
        return this.gradeExamMap;
    }

    setGradeExamMap(gradeExamInfo) {
        this.gradeExamMap = gradeExamInfo;
    }

}
