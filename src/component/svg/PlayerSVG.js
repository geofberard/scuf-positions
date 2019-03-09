import React from "react";
import {COURT_SIZE} from "./CourtSVG";
import "../../styles/player.scss"

const PlayerSVG = ({role, position, focus}) => (
    <circle id={role.id}
            cx={position.px * COURT_SIZE / 100}
            cy={position.py * COURT_SIZE / 100}
            r="40"
            fill={focus ? role.highlight : role.understate}/>
);

PlayerSVG.defaultProps = {
    position: {px: 40 * 100 / COURT_SIZE, py: 40 * 100 / COURT_SIZE},
};

export default PlayerSVG;
