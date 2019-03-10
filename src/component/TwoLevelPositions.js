import React from "react";
import * as PropTypes from "prop-types";

import Position from "../component/svg/Position";
import StepSelector from "./StepSelector";

import "../styles/positions.scss"

export default class TwoLevelPositions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLevel1: props.level1.values[0],
            currentLevel2: props.level2.values[0],
        };
        this.onLevel1Change = this.onLevel1Change.bind(this);
        this.onLevel2Change = this.onLevel2Change.bind(this);
    }

    onLevel1Change(currentLevel1) {
        this.setState({currentLevel1});
    }

    onLevel2Change(currentLevel2) {
        this.setState({currentLevel2});
    }

    render() {
        const {level1, level2} = this.props;
        const {currentLevel1, currentLevel2} = this.state;
        return (
            <React.Fragment>
                <div className="Card-header">
                    <StepSelector title={level1.label}
                                  value={currentLevel1}
                                  values={level1.values}
                                  onValueChange={this.onLevel1Change}/>
                    <StepSelector title={level2.label}
                                  value={currentLevel2}
                                  values={level2.values}
                                  onValueChange={this.onLevel2Change}/>
                </div>
                <Position positions={this.props.strategy[currentLevel1.id][currentLevel2.id]}
                          focus={this.props.focusedPlayer}/>
            </React.Fragment>
        );
    }
}

TwoLevelPositions.propTypes = {
    focusedPlayer: PropTypes.object,
    level1: PropTypes.shape({
        label: PropTypes.string.isRequired,
        values: PropTypes.array.isRequired,
    }).isRequired,
    level2: PropTypes.shape({
        label: PropTypes.string.isRequired,
        values: PropTypes.array.isRequired,
    }).isRequired,
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