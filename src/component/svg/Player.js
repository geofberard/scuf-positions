import React from "react";
import PlayerSVG from "./PlayerSVG";

const Player = ({role, className}) => (
    <svg viewBox={`0 0 80 80`} height="20px">
        <PlayerSVG role={role} focus={true} className={className}/>
    </svg>
);

export default Player;
