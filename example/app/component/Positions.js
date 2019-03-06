import React from "react";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
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
import StepSelector from "./StepSelector";
import Grid from "@material-ui/core/Grid/Grid";

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

    onPositionChange(position) {
        console.log(position);
        this.setState({position: position});
    }

    onPositionNavigation(diff) {
        this.setState({position: getNextElement(this.state.position, diff, EPositions)});
    }

    onActionChange(action) {
        this.setState({action: action});
    }

    onActionNavigation(diff) {
        this.setState({action: getNextElement(this.state.action, diff, EActions)});
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
                        <Typography className="PlayerSelect-label" variant="subtitle1" color="inherit">
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
                    <Paper className="PositionPaper">
                        <div className="PositionPaper-header">
                            <StepSelector title="Position"
                                          value={this.state.position}
                                          values={EPositions}
                                          onValueChange={this.onPositionChange}/>
                            <StepSelector title="Action"
                                          value={this.state.action}
                                          values={EActions}
                                          onValueChange={this.onActionChange}/>
                        </div>
                        <Position positions={PLAYER_SCUF[this.state.position.id][this.state.action.id]}
                                  focus={this.state.focus === ALL_PLAYERS ? undefined : this.state.focus}/>
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}
