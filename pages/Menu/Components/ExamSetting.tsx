import * as React from "react";
import BAService from "../../../services/BasicAnalysis/BAService";
import BAContent from "../../../services/BasicAnalysis/BAContext";
import { Radio } from "react-bootstrap";
declare var $;

export default class ExamSetting extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            examInfo: { }
        };
    }

    update = examInfo => {
        this.setState({
            examInfo
        });
    }

    componentWillMount() {
        const This = this;
        const BAServiceIns = BAService.getInstance();
        const BAContentIns = BAContent.getInstance();

        if ( !BAContentIns.getGradeExamMap() ) {
            const res = BAServiceIns.getGradeExamInfo( {});
            if ( res && res.then ) {
                res.then( respond => {
                    if (respond && respond.status === "success") {
                        This.update(respond.result);

                    }
                });
            }

        } else {
            this.update(BAContentIns.getGradeExamMap());

        }

    }

    getGradeRadio = examInfo => {
        const { schoolYears } = examInfo;
        return schoolYears.map( (item, idx) => {
            return (
                <Radio key={idx} inline={true}>
                {item.examGradeName}
                </Radio> );
        });
    }

    getTemp = () => {
        const { examInfo } = this.state;
        if ( !$.isEmptyObject(examInfo) ) {
            const gradeRadio = this.getGradeRadio(examInfo);
            return (
            <div>
                选择考试场次
                {gradeRadio}
            </div>);
        } else {
            return ""; // loading
        }
    }
    render() {
        const temp = this.getTemp();
        return <div>{temp}</div>;
    }
}
