import React from "react";
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


import {EPlayer, Position} from "../../../src";
import {PLAYER_SCUF} from "./position-scuf";
import {EAction, EActions} from "../data/EAction";
import {EPosition, EPositions} from "../data/EPosition";

import "../../styles/positions.scss"

const ALL_PLAYERS = {
    id: "ALL_PLAYERS",
    label: "Tous"
};

const EPlayerFilter = {
    ALL_PLAYERS: ALL_PLAYERS,
    ...EPlayer
};

const EPlayerFilters = Object.values(EPlayerFilter);


const modulo = (value, n) => ((value % n) + n) % n;
const getNextElement = (current, diff, list) => list[modulo(list.indexOf(current) + diff, list.length)];

export default class Positions extends React.Component {
    constructor() {
        super();
        this.state = {
            position: EPosition.P1,
            action: EAction.ORIGINAL,
            focus: ALL_PLAYERS
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
        this.setState({focus: EPlayerFilter[event.target.value]});
    }

    render() {
        return (
            <React.Fragment>
                <AppBar className={"MenuBar"} position="fixed">
                    <Toolbar>
                        <Typography className={"Title"} variant="headline" color="inherit">
                            SCUF - Positions
                        </Typography>
                        <Typography variant="subtitle1" color="inherit">
                            Poste:
                        </Typography>
                        <Select native
                            color="inherit"
                            value={this.state.focus.id}
                            onChange={this.onPlayerChange}
                            className={"PlayerSelect-input"}>
                            {EPlayerFilters.map(player => (<option value={player.id}>{player.label}</option>))}
                        </Select>
                    </Toolbar>
                </AppBar>
                <div className="AppContainer">
                    <Paper className="PositionPaper" elevation={4}>
                        <IconButton aria-label="Précédant">
                            <KeyboardArrowLeft onClick={() => this.onPositionNavigation(-1)}/>
                        </IconButton>
                        <FormControl>
                            <InputLabel htmlFor="position-select">Position</InputLabel>
                            <Select native
                                    value={this.state.position.id}
                                    onChange={this.onPositionChange}
                                    inputProps={{name: 'position', id: 'position-select'}}>
                                {EPositions.map(position => <option value={position.id}>{position.label}</option>)}
                            </Select>
                        </FormControl>
                        <IconButton aria-label="Suivant">
                            <KeyboardArrowRight onClick={() => this.onPositionNavigation(1)}/>
                        </IconButton>
                        <br/>
                        <IconButton aria-label="Précédant">
                            <KeyboardArrowLeft onClick={() => this.onActionNavigation(-1)}/>
                        </IconButton>
                        <FormControl>
                            <InputLabel htmlFor="action-select">Action</InputLabel>
                            <Select native
                                    value={this.state.action.id}
                                    onChange={this.onActionChange}
                                    inputProps={{name: 'action', id: 'action-select',}}>
                                {EActions.map(action => <option value={action.id}>{action.label}</option>)}
                            </Select>
                        </FormControl>
                        <IconButton aria-label="Suivant">
                            <KeyboardArrowRight onClick={() => this.onActionNavigation(1)}/>
                        </IconButton>
                        <br/>
                        <Position positions={PLAYER_SCUF[this.state.position.id][this.state.action.id]}
                                  focus={this.state.focus === ALL_PLAYERS ? undefined : this.state.focus}/>
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}
