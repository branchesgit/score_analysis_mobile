import * as React from "react";
import Menu from './Menu/Menu'


export default class App extends React.Component<any,any> {
    constructor( props ) {
        super( props );

        this.state = {};
    }

    render() {
        return <div>
            <Menu/>
        </div>
    }
}