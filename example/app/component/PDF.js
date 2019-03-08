import React from "react";
import {EPlayer, Position} from "../../../src";
import {START_POSITIONS_DEFAULT} from "../data/start-position-default";
import {EActions} from "../model/EAction";
import {EPositions} from "../model/EPosition";
import Player from "../../../src/container/Player";

import "../../styles/pdf.scss"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

const legend = [EPlayer.SETTER,EPlayer.OPPOSITE,EPlayer.OUTSIDE_A,EPlayer.MIDDLE_A];

const PDF = () => (
    <div>
            <div className={"row"}>
                {legend.map(player => (
                    <div className={"col-sm-3"}>
                        <div className={"Legend"}>
                            {player.label.replace(" A","")}
                            <svg viewBox={`0 0 80 80`} className={"Legend-picto"}>
                                <Player player={player} focus={true}/>
                            </svg>
                        </div>
                    </div>
                ))}
        </div>
        {EPositions.map(position => (
            <div className={"Position"}>
                <div className={"row"}>
                    <div className="col-sm-2">
                        <div className={"Position-label"}>{position.label}</div>
                    </div>
                    {EActions.map(action => (
                        <div className={"col-sm-3"}>
                            <div className={"Position-diagram"}>
                                <Position positions={START_POSITIONS_DEFAULT[position.id][action.id]}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);
export default PDF;
