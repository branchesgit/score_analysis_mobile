/**
 * 各类型的总分  原始分， 标准分；
 */
export default interface ITotalScore {
    /**
     * 总分列
     */
    getTotalsScore(): string[];

    /**
     * 总分列排名；
     */
    getTotalScoreRank(): string[];
}
