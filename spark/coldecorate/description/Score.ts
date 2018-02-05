/**
 * 哪场考试哪门科目的分数列名；
 */

import AbstractColumn from "../AbstractColumn";
import AbstractDescription from "../AbstractDescription";
import { COLUMN_JOIN } from "../../config/Config";

export default class Score extends AbstractDescription {
    icolumns: AbstractColumn[];

    constructor(icolumns: AbstractColumn[]) {
        super();
        this.icolumns = icolumns;
    }

    getDescription() {
        let desc = "";
        let i = 0;
        const len = this.icolumns.length;

        for (; i < len; i++) {
            desc += this.icolumns[i].getDescription();
            desc += "，";
        }

        return desc + "，分数";
    }

    getColumnName() {
        const ary = [];
        let i = 0;
        const len = this.icolumns.length;

        for (; i < len; i++) {
            ary[i] = this.icolumns[i].getColumnName();
        }

        return ary.join(COLUMN_JOIN);
    }
}
