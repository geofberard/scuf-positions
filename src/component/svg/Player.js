import React from "react";
import PlayerSVG from "./PlayerSVG";

const Player = ({role}) => (
    <svg viewBox={`0 0 80 80`}>
        <PlayerSVG role={role} focus={true}/>
    </svg>
);

export default Player;
