import React from "react";
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {EPlayer, Position} from "../../../src";
import {PLAYER_SCUF} from "./position-scuf";
import {EAction, EActions} from "../data/EAction";
import {EPosition, EPositions} from "../data/EPosition";
// import ChevronLeft from '@material-ui/icons/ChevronLeft';

const ALL_PLAYERS = {
    id: "ALL_PLAYERS",
    label: "Tous"
};

const modulo = (value, n) => ((value % n) + n) % n;
const getNextElement = (current, diff, list) => list[modulo(list.indexOf(current) + diff, list.length)];

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            position: EPosition.P1,
            action: EAction.ORIGINAL,
            focus: ALL_PLAYERS,
        };
        this.onPositionChange = this.onPositionChange.bind(this);
        this.onPositionNavigation = this.onPositionNavigation.bind(this);
        this.onActionChange = this.onActionChange.bind(this);
        this.onActionNavigation = this.onActionNavigation.bind(this);
        this.onPlayerChange = this.onPlayerChange.bind(this);
    }

    onPositionChange(event) {
        this.setState({position: EPosition[event.target.value]});
    }

    onPositionNavigation(diff) {
        this.setState({position: getNextElement(this.state.position,diff, EPositions)});
    }

    onActionChange(event) {
        this.setState({action: EAction[event.target.value]});
    }

    onActionNavigation(diff) {
        this.setState({action: getNextElement(this.state.action,diff, EActions)});
    }

    onPlayerChange(event) {
        this.setState({focus: EPlayer[event.target.value] || ALL_PLAYERS});
    }

    render() {
        return (
            <Paper elevation={4}>
                <FormControl>
                    <InputLabel htmlFor="position-select">Position</InputLabel>
                    <Select native
                            value={this.state.position.id}
                            onChange={this.onPositionChange}
                            inputProps={{name: 'position', id: 'position-select',}}>
                        {EPositions.map(position => <option value={position.id}>{position.label}</option>)}
                    </Select>
                </FormControl>
                <div onClick={() => this.onPositionNavigation(-1)}>Previous</div>
                <div onClick={() => this.onPositionNavigation(1)}>Next</div>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="action-select">Action</InputLabel>
                    <Select native
                            value={this.state.action.id}
                            onChange={this.onActionChange}
                            inputProps={{name: 'action', id: 'action-select',}}>
                        {EActions.map(action => <option value={action.id}>{action.label}</option>)}
                    </Select>
                </FormControl>
                <div onClick={() => this.onActionNavigation(-1)}>Previous</div>
                <div onClick={() => this.onActionNavigation(1)}>Next</div>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="player-select">Poste</InputLabel>
                    <Select native
                            value={this.state.focus ? this.state.focus.id : ""}
                            onChange={this.onPlayerChange}
                            inputProps={{name: 'player', id: 'player-select',}}>
                        <option value={ALL_PLAYERS.id}>{ALL_PLAYERS.label}</option>
                        {Object.values(EPlayer)
                            .map(player => <option value={player.id}>{player.label}</option>)}
                    </Select>
                </FormControl><br/>
                <Position positions={PLAYER_SCUF[this.state.position.id][this.state.action.id]}
                          focus={this.state.focus === ALL_PLAYERS ? undefined : this.state.focus}/>
            </Paper>
        );
    }
}
