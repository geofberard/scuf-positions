import React from "react";
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden/Hidden";
import Drawer from "@material-ui/core/Drawer/Drawer";
import { withStyles } from '@material-ui/core/styles';


import Player from "../component/svg/Player";
import ServicePositions from "../component/ServicePositions";
import {EPlayerRole, EPlayerRoles} from "../model/EPlayerRole";
import {SERVICE_POSITIONS_DEFAULT} from "../data/service-positions-default";
import {SERVICE_POSITIONS_LIBERO} from "../data/service-positions-libero";

import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormControl from "@material-ui/core/FormControl/FormControl";

import "../styles/positions.scss"
import GamePosition from "../component/GamePositions";
import {GAME_POSITIONS_DEFAULT, GAME_POSITIONS_LIBERO} from "../data/game-positions";

const ALL_PLAYERS = {
    id: "ALL_PLAYERS",
    label: "Tous"
};

const EPlayerFilter = {
    ALL_PLAYERS: ALL_PLAYERS,
    ...EPlayerRole
};

const EPlayerFilters = Object.values(EPlayerFilter);

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    grow: {
        flexGrow: 1,
    },
});

const POSITIONS = [
    {
        id: "SERVICE_POSITIONS_DEFAULT",
        label: "Service - standard",
        getComponent: focusedPlayer => (
            <Paper className="Card">
                <ServicePositions
                    strategy={SERVICE_POSITIONS_DEFAULT}
                    focusedPlayer={focusedPlayer}/>
            </Paper>
        )
    },
    {
        id: "SERVICE_POSITIONS_LIBERO",
        label: "Service - libéro",
        getComponent: focusedPlayer => (
            <Paper className="Card">
                <ServicePositions
                    strategy={SERVICE_POSITIONS_LIBERO}
                    focusedPlayer={focusedPlayer}/>
            </Paper>
        )
    },
    {
        id: "GAME_POSITIONS_DEFAULT",
        label: "Jeu - standard",
        getComponent: focusedPlayer => (
            <Paper className="Card">
                <GamePosition
                    strategy={GAME_POSITIONS_DEFAULT}
                    focusedPlayer={focusedPlayer}/>
            </Paper>
        )
    },
    {
        id: "GAME_POSITIONS_LIBERO",
        label: "Jeu - libéro",
        getComponent: focusedPlayer => (
            <Paper className="Card">
                <GamePosition
                    strategy={GAME_POSITIONS_LIBERO}
                    focusedPlayer={focusedPlayer}/>
            </Paper>
        )
    },
];

class PositionsApp extends React.Component {
    constructor() {
        super();
        this.state = {
            position: POSITIONS[0],
            focus: ALL_PLAYERS,
            mobileOpen: false,
        };
        this.onPlayerChange = this.onPlayerChange.bind(this);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.changePosition = this.changePosition.bind(this);
    }

    onPlayerChange(event) {
        this.setState({focus: EPlayerFilter[event.target.value]});
    }

    handleDrawerToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    changePosition(position) {
        return () => this.setState({position});
    };

    goToPdf() {
        window.location.replace("positions.pdf");
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar}>
                    <ListItem>
                        <FormControl>
                            <InputLabel htmlFor={"option-select-player"}>Rôle</InputLabel>
                            <Select native
                                    color="inherit"
                                    value={this.state.focus.id}
                                    onChange={this.onPlayerChange}
                                    inputProps={{name: 'title', id: "option-select-player"}}>
                                className={"PlayerSelect-input"}>
                                {EPlayerFilters.map(player => (<option key={player.id} value={player.id}>{player.label}</option>))}
                            </Select>
                        </FormControl>
                    </ListItem>
                </div>
                <Divider />
                <List>
                    <ListSubheader>Positions</ListSubheader>
                    {POSITIONS.map(position => (
                        <ListItem button key={position.id}
                                  id={position.id}
                                  selected={this.state.position === position}
                                  onClick={this.changePosition(position)}>
                            <ListItemText id={position.id}  primary={position.label} />

                        </ListItem>
                    ))}
                </List>
                <Divider />
                <ListSubheader>Légende</ListSubheader>
                {EPlayerRoles
                    .filter(role => !role.id.endsWith("_B"))
                    .map(role => (
                        <ListItem key={role.id}>
                            <ListItemText primary={role.label.replace(" A", "")}/>
                            <Player role={role} focus={true}/>
                        </ListItem>
                    ))}
                <Divider />
                <List>
                    <ListItem button onClick={this.goToPdf}>
                        <ListItemText primary="Télécharger le PDF" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit"
                                    aria-label="Open drawer"
                                    onClick={this.handleDrawerToggle}
                                    className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={"Title"} variant="headline" color="inherit">
                            SCUF - Positions
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer container={this.props.container}
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={this.state.mobileOpen}
                                onClose={this.handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}>
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer classes={{paper: classes.drawerPaper,}}
                                variant="permanent"
                                open>
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    {this.state.position.getComponent(this.state.focus === ALL_PLAYERS ? undefined : this.state.focus)}
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PositionsApp);