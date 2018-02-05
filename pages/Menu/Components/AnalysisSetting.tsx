import * as React from "react";
import ExamSetting from "./ExamSetting";

export default class AnalysisSetting extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            分析数据设置
            <ExamSetting />

        </div>);
    }
}
