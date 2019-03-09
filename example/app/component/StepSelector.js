import React from "react";
import * as PropTypes from "prop-types";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import "../../styles/step-selector.scss"

const modulo = (value, n) => ((value % n) + n) % n;
const getNextElement = (current, diff, list) => list[modulo(list.indexOf(current) + diff, list.length)];

export default class StepSelector extends React.Component {
    constructor() {
        super();
        this.onOptionChange = this.onOptionChange.bind(this);
        this.onOptionNavigation = this.onOptionNavigation.bind(this);
    }

    onOptionChange(event) {
        this.props.onValueChange(this.props.values.find(value => value.id === event.target.value));
    }

    onOptionNavigation(diff) {
        this.props.onValueChange(getNextElement(this.props.value, diff, this.props.values));
    }

    render() {
        const {title, value, values} = this.props;
        return (
            <div className="StepSelector">
                <IconButton className="StepSelector-arrow-left"
                            aria-label="Précédant"
                            onClick={() => this.onOptionNavigation(-1)}>
                    <KeyboardArrowLeft fontSize="large"/>
                </IconButton>
                <FormControl className="StepSelector-select">
                    <InputLabel htmlFor={`option-select-${title}`}>{title}</InputLabel>
                    <Select native
                            value={value.id}
                            onChange={this.onOptionChange}
                            inputProps={{name: 'title', id: `option-select-${title}`}}>
                        {values.map(option => <option key={option.id} value={option.id}>{option.label}</option>)}
                    </Select>
                </FormControl>
                <IconButton className="StepSelector-arrow-right"
                            aria-label="Suivant"
                            onClick={() => this.onOptionNavigation(1)}>
                    <KeyboardArrowRight fontSize="large"/>
                </IconButton>
            </div>
        );
    }
}

StepSelector.propTypes = {
    title: PropTypes.string,
    value: PropTypes.object,
    values: PropTypes.array,
    onValueChange: PropTypes.func,
};