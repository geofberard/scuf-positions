import React from "react";
import * as PropTypes from "prop-types";

import Position from "../component/svg/Position";
import {EAction, EActions} from "../model/EAction";
import {EServicePosition, EServicePositions} from "../model/EServicePosition";
import StepSelector from "./StepSelector";

import "../styles/positions.scss"

const modulo = (value, n) => ((value % n) + n) % n;
const getNextElement = (current, diff, list) => list[modulo(list.indexOf(current) + diff, list.length)];

export class PositionsDepart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: EServicePosition.P1,
            action: EAction.ORIGINAL,
        };
        this.onPositionChange = this.onPositionChange.bind(this);
        this.onPositionNavigation = this.onPositionNavigation.bind(this);
        this.onActionChange = this.onActionChange.bind(this);
        this.onActionNavigation = this.onActionNavigation.bind(this);
    }

    onPositionChange(position) {
        this.setState({position: position});
    }

    onPositionNavigation(diff) {
        this.setState({position: getNextElement(this.state.position, diff, EServicePositions)});
    }

    onActionChange(action) {
        this.setState({action: action});
    }

    onActionNavigation(diff) {
        this.setState({action: getNextElement(this.state.action, diff, EActions)});
    }

    render() {
        const {position, action} = this.state;
        return (
            <React.Fragment>
                <div className="Card-header">
                    <StepSelector title="Position"
                                  value={position}
                                  values={EServicePositions}
                                  onValueChange={this.onPositionChange}/>
                    <StepSelector title="Action"
                                  value={action}
                                  values={EActions}
                                  onValueChange={this.onActionChange}/>
                </div>
                <Position positions={this.props.strategy[position.id][action.id]}
                          focus={this.props.focusedPlayer}/>
            </React.Fragment>
        );
    }
}

PositionsDepart.propTypes = {
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
