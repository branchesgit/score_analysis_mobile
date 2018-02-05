import IColumn from "../IColumn";

export default class Exam implements IColumn {

    examID: number;
    examName: string;

    constructor(id, name) {
        this.examID = id;
        this.examName = name;
    }

    getColumnName() {
        return this.examName;
    }
}
