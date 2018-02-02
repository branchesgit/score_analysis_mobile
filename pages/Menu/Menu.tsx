import * as React from 'react';
import { Nav,NavItem } from 'react-bootstrap'

export default class Menu extends React.Component<any,any> {
    constructor(props) {
        super(props)
    } 
    handleSelect(key) {

        

    }

    render() {
        return <div>
                <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
                    <NavItem eventKey={1} href="/home">基本分析</NavItem>
                    <NavItem eventKey={2} title="Item">增量分析</NavItem>
                    <NavItem eventKey={3} >映射分析</NavItem>
                </Nav>

        </div>
    }

}