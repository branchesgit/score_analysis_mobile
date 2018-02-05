import IColumn from "../IColumn";

export default class Subject implements IColumn {

    subjectID: number;
    subjectName: string;

    constructor(id, name) {
        this.subjectID = id;
        this.subjectName = name;
    }

    getColumnName() {
        return this.subjectName;
    }
}
