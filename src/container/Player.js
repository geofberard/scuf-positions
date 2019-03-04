import React from "react";
import {COURT_SIZE} from "./Court";
import "../styles/player.scss"

const Player = ({player, position, focus}) => (
    <circle id={player.id}
            cx={position.px * COURT_SIZE / 100}
            cy={position.py * COURT_SIZE / 100}
            r="40"
            fill={focus ? player.highlight : player.understate}/>
);

export default Player;
