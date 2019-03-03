import React from "react";
import Position, {POSITION} from "./Position";

export default class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            position: POSITION.P1
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({position: event.target.value});
    }

    render() {
        return (
            <div className="helo-world">
                Hello World !
                <select onChange={this.onChange}>
                    {Object.values(POSITION).map(position => <option value={position}>{position}</option>)}
                </select>
                <Position position={this.state.position}/>
            </div>
        );
    }
}
