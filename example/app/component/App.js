import React from "react";
import {Position, EPlayer} from "../../../src";
import {PLAYER_SCUF} from "./position-scuf";
import {EAction} from "../data/EAction";
import {EPosition} from "../data/EPosition";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            position: EPosition.P1,
            action: EAction.ORIGINAL,
        };
        this.onPositionChange = this.onPositionChange.bind(this);
        this.onActionChange = this.onActionChange.bind(this);
        this.onPlayerChange = this.onPlayerChange.bind(this);
    }

    onPositionChange(event) {
        this.setState({position: EPosition[event.target.value]});
    }

    onActionChange(event) {
        this.setState({action: EAction[event.target.value]});
    }

    onPlayerChange(event) {
        this.setState({focus: EPlayer[event.target.value]});
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
                <select onChange={this.onPlayerChange}>
                    <option value={""}>---</option>
                    {Object.values(EPlayer).map(player => <option value={player.id}>{player.label}</option>)}
                </select>
                <Position positions={PLAYER_SCUF[this.state.position.id][this.state.action.id]}
                          focus={this.state.focus}/>
            </div>
        );
    }
}
