import React from "react";
import {SERVICE_POSITIONS} from "../data/service-positions";
import {EPlayerRole} from "../model/EPlayerRole";
import {EServiceActions} from "../model/EServiceAction";
import {EServicePositions} from "../model/EServicePosition";
import Player from "../component/svg/PlayerSVG";
import Position from "../component/svg/Position";

import "../styles/pdf.scss"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

const legend = [EPlayerRole.SETTER,EPlayerRole.OPPOSITE,EPlayerRole.OUTSIDE_A,EPlayerRole.MIDDLE_A];

const PDFGeneratorApp = () => (
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
        {EServicePositions.map(position => (
            <div className={"Position"}>
                <div className={"row"}>
                    <div className="col-sm-2">
                        <div className={"Position-label"}>{position.label}</div>
                    </div>
                    {EServiceActions.map(action => (
                        <div className={"col-sm-3"}>
                            <div className={"Position-diagram"}>
                                <Position positions={SERVICE_POSITIONS[position.id][action.id]}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export default PDFGeneratorApp;
