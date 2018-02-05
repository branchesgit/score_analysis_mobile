import * as React from "react";
import { Nav, NavItem } from "react-bootstrap";
import AnalysisSetting from "./Components/AnalysisSetting";
import { MenuConfig } from "./MenuConfig";

export default class Menu extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: MenuConfig[0].mainKey
        };
    }

    handleSelect = key => {
        this.setState({
            eventKey: key
        });

    }

    render() {

        const menus = MenuConfig.map((item, idx) => {
            return <NavItem key={item.mainKey} eventKey={item.mainKey} href={item.router}> {item.name} </NavItem>;
        });
        return (
            <div>
                <Nav bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect}> {menus} </Nav>
                <AnalysisSetting activeKey={this.state.activeKey} />
        </div>
        );
    }
}
