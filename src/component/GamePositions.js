import React from "react";
import * as PropTypes from "prop-types";

import TwoLevelPositions from "./TwoLevelPositions";
import {EGamePositions} from "../model/EGamePosition";
import {EGameActions} from "../model/EGameAction";


import "../styles/positions.scss"

const GamePosition = ({strategy, focusedPlayer}) => (
    <TwoLevelPositions level1={{label: "Action", values: EGameActions}}
                       level2={{label: "Passe", values: EGamePositions}}
                       strategy={strategy}
                       focusedPlayer={focusedPlayer}/>
);

GamePosition.propTypes = {
    focusedPlayer: PropTypes.object,
    strategy: PropTypes.objectOf(
        PropTypes.objectOf(
            PropTypes.objectOf(
                PropTypes.shape({
                    px: PropTypes.number.isRequired,
                    py: PropTypes.number.isRequired,
                })
            )
        )
    ).isRequired
};

export default GamePosition;