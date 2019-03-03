import React from "react";
import Position from "./Position";
import {EAction} from "../data/EAction";
import {EPosition} from "../data/EPosition";

export default class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            position: EPosition.P1,
            action: EAction.ORIGINAL,
        };
        this.onPositionChange = this.onPositionChange.bind(this);
        this.onActionChange = this.onActionChange.bind(this);
    }

    onPositionChange(event) {
        this.setState({position: EPosition[event.target.value]});
    }

    onActionChange(event) {
        this.setState({action: EAction[event.target.value]});
    }

    render() {
        console.log(this.state);
        return (
            <div className="helo-world">
                Hello World !
                <select onChange={this.onPositionChange}>
                    {Object.values(EPosition).map(position => <option value={position.id}>{position.label}</option>)}
                </select>
                <select onChange={this.onActionChange}>
                    {Object.values(EAction).map(action => <option value={action.id}>{action.label}</option>)}
                </select>
                <Position position={this.state.position} action={this.state.action}/>
            </div>
        );
    }
}
