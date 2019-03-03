import React from "react";
import {COURT_SIZE} from "./Court";

const Player = ({player,position}) => (
    <circle id={player.id} cx={position.px * COURT_SIZE / 100} cy={position.py * COURT_SIZE / 100} r="40" fill={player.highlight}/>
);

export default Player;
