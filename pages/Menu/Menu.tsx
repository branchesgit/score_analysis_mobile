import * as React from 'react';
import { Nav,NavItem } from 'react-bootstrap'
import AnalysisSetting from './Components/AnalysisSetting'
import  { MenuConfig } from './MenuConfig'

export default class Menu extends React.Component<any,any> {
    constructor(props) {
        super(props)
        this.state = {
            activeKey: 'basic'
        }
    } 
    handleSelect=(key)=>{
        this.setState({
            eventKey:key
        })

        
    }

    render() {

        return <div>
                <Nav bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    {
                        MenuConfig.map( (item,idx) => {
                            return <NavItem eventKey={item.mainKey} href={ item.router }> {item.name} </NavItem>

                        })
                    }
                
                </Nav>
                <AnalysisSetting activeKey={this.state.activeKey}/>


        </div>
    }

}