import React from "react";
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Switch from "@material-ui/core/Switch";
import { withStyles } from '@material-ui/core/styles';

import "../resources/default_resource";

import Player from "../component/svg/Player";
import {EPlayerRole, EPlayerRoles} from "../model/EPlayerRole";
import {SERVICE_POSITIONS} from "../data/service-positions";
import {ATTACK_POSITIONS} from "../data/attack-positions";
import {DEFENSE_POSITIONS} from "../data/defense-positions";

import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormControl from "@material-ui/core/FormControl/FormControl";

import "../styles/positions.scss"
import {ResourceKey} from "../resources/ResourceKey";
import {i18n} from "../resources/label-utils";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {replaceLibero} from "../utils/position-utils";
import {EServicePositions} from "../model/EServicePosition";
import {EServiceActions} from "../model/EServiceAction";
import {EAttackActions} from "../model/EAttackAction";
import {EGamePositions} from "../model/EGamePosition";
import TwoLevelPositions from "../component/TwoLevelPositions";
import {EDefenseAction, EDefenseActions} from "../model/EDefenseAction";

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
        id: "SERVICE_POSITIONS",
        label: i18n(ResourceKey.P_SERVICE),
        getComponent: (focusedPlayer, libero) => (
            <Paper className="Card">
                <TwoLevelPositions key={"SERVICE_POSITIONS"}
                                   level1={{label: i18n(ResourceKey.SERVICE_POSITION), values: EServicePositions}}
                                   level2={{label: i18n(ResourceKey.SERVICE_ACTION), values: EServiceActions}}
                                   strategy={libero ? replaceLibero(SERVICE_POSITIONS) : SERVICE_POSITIONS}
                                   focusedPlayer={focusedPlayer}/>
            </Paper>
        )
    },
    {
        id: "ATTACK_POSITIONS",
        label: i18n(ResourceKey.P_ATTACK),
        getComponent: (focusedPlayer, libero) => (
            <Paper className="Card">
                <TwoLevelPositions key={"ATTACK_POSITIONS"}
                                   level1={{label: i18n(ResourceKey.ATTACK_ACTION), values: EAttackActions}}
                                   level2={{label: i18n(ResourceKey.GAME_POSITION), values: EGamePositions}}
                                   strategy={libero ? replaceLibero(ATTACK_POSITIONS) : ATTACK_POSITIONS}
                                   focusedPlayer={focusedPlayer}/>
            </Paper>
        )
    },
    {
        id: "DEFENSE_POSITIONS",
        label: i18n(ResourceKey.P_DEFENSE),
        getComponent: (focusedPlayer, libero) => (
            <Paper className="Card">
                <TwoLevelPositions key={"DEFENSE_POSITIONS"}
                                   level1={{label: i18n(ResourceKey.DEFENSE_ACTION), values: EDefenseActions}}
                                   level2={{label: i18n(ResourceKey.GAME_POSITION), values: EGamePositions}}
                                   strategy={libero ? replaceLibero(DEFENSE_POSITIONS) : DEFENSE_POSITIONS}
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
            libero: false,
            mobileOpen: false,
        };
        this.onPlayerChange = this.onPlayerChange.bind(this);
        this.toggleLibero = this.toggleLibero.bind(this);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.changePosition = this.changePosition.bind(this);
    }

    onPlayerChange(event) {
        this.setState({focus: EPlayerFilter[event.target.value], mobileOpen: false});
    }

    toggleLibero() {
        this.setState({libero: !this.state.libero, mobileOpen: false});
    };

    handleDrawerToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen});
    };

    changePosition(position) {
        return () => this.setState({position, mobileOpen: false});
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
                            <InputLabel htmlFor={"option-select-player"}>{i18n(ResourceKey.ROLE)}</InputLabel>
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
                    <ListItem>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.libero}
                                    onChange={this.toggleLibero}
                                    value="checkedA"
                                    color="primary"
                                />
                            }
                            label={this.state.libero ? i18n(ResourceKey.LIBERO_WITH) : i18n(ResourceKey.LIBERO_WITHOUT)}
                        />
                    </ListItem>
                </div>
                <Divider />
                <List>
                    <ListSubheader>{i18n(ResourceKey.POSITIONS)}</ListSubheader>
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
                <ListSubheader>{i18n(ResourceKey.LEGENDE)}</ListSubheader>
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
                        <ListItemText primary={i18n(ResourceKey.DOWNLOAD)} />
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
                            {i18n(ResourceKey.TITLE)}
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
                    {this.state.position.getComponent(this.state.focus === ALL_PLAYERS ? undefined : this.state.focus, this.state.libero)}
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PositionsApp);