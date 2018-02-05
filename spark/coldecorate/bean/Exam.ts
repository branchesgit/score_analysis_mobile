import AbstractColumn from "../AbstractColumn";

export default class Exam extends AbstractColumn {

    examID: number;
    examName: string;

    constructor(id, name) {
        super();

        this.examID = id;
        this.examName = name;
    }

    getColumnName() {
        return this.examName;
    }

    getDescription() {
        return this.examName;
    }
}
