import React from "react";
import {Position, EPosition, EAction, EPlayer} from "../../src/index";
import {PLAYER_SCUF} from "./position-scuf";

export default class App extends React.Component {
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
        return (
            <div className="helo-world">
                <select onChange={this.onPositionChange}>
                    {Object.values(EPosition).map(position => <option value={position.id}>{position.label}</option>)}
                </select>
                <select onChange={this.onActionChange}>
                    {Object.values(EAction).map(action => <option value={action.id}>{action.label}</option>)}
                </select>
                <Position positions={PLAYER_SCUF[this.state.position.id][this.state.action.id]}/>
            </div>
        );
    }
}
