import React from "react";
import {COURT_SIZE} from "./Court";
import "../styles/player.scss"

class Player extends React.Component {

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        console.log("render");
        const {player, position} = this.props;
        return(
            <circle id={player.id} cx={position.px * COURT_SIZE / 100} cy={position.py * COURT_SIZE / 100} r="40"
                    fill={player.highlight}/>
        );
    }
}

export default Player;
