import React from "react";
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import {EPlayer} from "../../../src";
import {START_POSITIONS_DEFAULT} from "../data/start-position-default";
import Player from "../../../src/container/Player";
import {PositionsDepart} from "./PositionsDepart";

import "../../styles/positions.scss"
import {START_POSITIONS_LIBERO} from "../data/start-position-libero";

const ALL_PLAYERS = {
    id: "ALL_PLAYERS",
    label: "Tous"
};

const EPlayerFilter = {
    ALL_PLAYERS: ALL_PLAYERS,
    ...EPlayer
};

const EPlayerFilters = Object.values(EPlayerFilter);
const legend = [EPlayer.SETTER,EPlayer.OPPOSITE,EPlayer.OUTSIDE_A,EPlayer.MIDDLE_A];

export default class Positions extends React.Component {
    constructor() {
        super();
        this.state = {
            focus: ALL_PLAYERS
        };
        this.onPlayerChange = this.onPlayerChange.bind(this);
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
                    <Paper className="Card">
                        <PositionsDepart
                            strategy={START_POSITIONS_LIBERO}
                            focusedPlayer={this.state.focus === ALL_PLAYERS ? undefined : this.state.focus}/>
                    </Paper>
                    <Paper className="Card">
                        <PositionsDepart
                            strategy={START_POSITIONS_DEFAULT}
                            focusedPlayer={this.state.focus === ALL_PLAYERS ? undefined : this.state.focus}/>
                    </Paper>
                    <Paper className="Card LegendCard">
                        <div className="Card-header">
                            {legend.map(player => (
                                <div className={"col-sm-3"}>
                                    <div className={"Legend"}>
                                        {player.label.replace(" A","")}
                                        <svg viewBox={`0 0 80 80`} className={"Legend-picto"}>
                                            <Player player={player} focus={true}/>
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}
