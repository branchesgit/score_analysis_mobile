import AbstractColumn from "../AbstractColumn";
import { SCORE, COLUMN_JOIN } from "../../config/Config";

export default class Subject extends AbstractColumn {

    subjectID: number;
    subjectName: string;

    constructor(id, name) {
        super();

        this.subjectID = id;
        this.subjectName = name;
    }

    getColumnName() {
        return [SCORE, this.subjectID].join(COLUMN_JOIN);
    }

    getDescription() {
        return this.subjectName;
    }
}
