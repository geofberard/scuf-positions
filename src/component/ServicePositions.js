import React from "react";
import * as PropTypes from "prop-types";

import TwoLevelPositions from "./TwoLevelPositions";
import {EServiceActions} from "../model/EServiceAction";
import {EServicePositions} from "../model/EServicePosition";

import "../styles/positions.scss"
import {i18n} from "../resources/label-utils";
import {ResourceKey} from "../resources/ResourceKey";

const ServicePositions = ({strategy, focusedPlayer}) => (
    <TwoLevelPositions level1={{label: i18n(ResourceKey.SERVICE_POSITION), values: EServicePositions}}
                       level2={{label: i18n(ResourceKey.SERVICE_ACTION), values: EServiceActions}}
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