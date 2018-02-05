/**
 * 哪场考试哪门科目的标准分数列名；
 */

import AbstractColumn from "../AbstractColumn";
import AbstractDescription from "../AbstractDescription";
import { COLUMN_JOIN, STD } from "../../config/Config";

export default class StdScore extends AbstractDescription {
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
        return desc + "，标准分数";
    }

    getColumnName() {
        const ary = [];
        let i = 0;
        const len = this.icolumns.length;
        for (; i < len; i++) {
            ary[i] = this.icolumns[i].getColumnName();
        }
        ary[len] = STD;

        return ary.join(COLUMN_JOIN);
    }
}
