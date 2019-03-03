import React from "react";
import Position, {ACTION, POSITION} from "./Position";

export default class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            position: POSITION.P2,
            action: ACTION.RECEIVING,
        };
        this.onPositionChange = this.onPositionChange.bind(this);
        this.onActionChange = this.onActionChange.bind(this);
    }

    onPositionChange(event) {
        this.setState({position: event.target.value});
    }

    onActionChange(event) {
        this.setState({action: event.target.value});
    }

    render() {
        console.log(this.state);
        return (
            <div className="helo-world">
                Hello World !
                <select onChange={this.onPositionChange}>
                    {Object.values(POSITION).map(position => <option value={position}>{position}</option>)}
                </select>
                <select onChange={this.onActionChange}>
                    {Object.values(ACTION).map(action => <option value={action}>{action}</option>)}
                </select>
                Actually : {this.state.position} {this.state.action}
                <Position position={this.state.position} action={this.state.action}/>
            </div>
        );
    }
}
