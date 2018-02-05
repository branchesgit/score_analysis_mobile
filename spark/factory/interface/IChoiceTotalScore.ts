export default interface IChoiceTotalScore {

    /**
     * 获取选科总分列，
     */
    getChoiceTotalScore(): string[];

    /**
     * 获取选科总分排序；（选科内）
     */
    getChoiceTotalRank(): string[];

    /**
     * 获取选科+主考科目总分列；
     */
    getChoiceAndMainSubjsTotalScore(): string[];

    /**
     * 获取选科+主考科目总分排名；（选科内）
     */
    getChoiceAndMainSubjSRank(): string[];
}
