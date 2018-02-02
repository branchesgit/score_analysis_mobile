declare namespace ScoreAnalysis {
    //全局定义放这里


    interface Item {
        id?: string;
        columns?: string[];
        registerTable?: boolean;
        returnResult?: boolean;
        source?: string;
        sql?: string;
        tableName?: string;
        parentResName?: string;
        resName?: string;
    }

}

declare module 'analysis' {
    export = ScoreAnalysis;
}