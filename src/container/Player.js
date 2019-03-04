import React from "react";
import {COURT_SIZE} from "./Court";
import "../styles/player.scss"

class Player extends React.Component {

    render() {
        const {player, position, focus} = this.props;
        console.log(focus);
        return(
            <circle id={player.id}
                    cx={position.px * COURT_SIZE / 100}
                    cy={position.py * COURT_SIZE / 100}
                    r="40"
                    fill={focus ? player.highlight : player.understate}/>
        );
    }
}

export default Player;
