import React from "react";
import * as PropTypes from "prop-types";

import TwoLevelPositions from "./TwoLevelPositions";
import {EServiceActions} from "../model/EServiceAction";
import {EServicePositions} from "../model/EServicePosition";

import "../styles/positions.scss"

const ServicePositions = ({strategy, focusedPlayer}) => (
    <TwoLevelPositions level1={{label: "Position", values: EServicePositions}}
                       level2={{label: "Action", values: EServiceActions}}
                       strategy={strategy}
                       focusedPlayer={focusedPlayer}/>
);

ServicePositions.propTypes = {
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

export default ServicePositions;