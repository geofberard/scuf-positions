import React from "react";
import {MAX_SIZE} from "./Position";

export const COURT_SIZE = 900;
const lineWidth = 5;
const offset = 100;

const CourtSVG = ({children}) => (
    <g>
        <rect x={offset - lineWidth / 2}
              y={lineWidth / 2}
              width={COURT_SIZE}
              height={COURT_SIZE}
              style={{fill: "none", strokeWidth: lineWidth, stroke: "black"}}/>
        <line x1={offset}
              y1={COURT_SIZE / 3}
              x2={offset + COURT_SIZE}
              y2={COURT_SIZE / 3}
              style={{strokeWidth: lineWidth, stroke: "black"}}/>
        <line x1={offset/2}
              y1={lineWidth/2}
              x2={MAX_SIZE - offset/2}
              y2={lineWidth/2}
              style={{strokeWidth: lineWidth, stroke: "black"}}/>
        <circle cx={offset/2}
                cy={lineWidth/2}
                r="20"/>
        <circle cx={MAX_SIZE - offset/2}
                cy={lineWidth/2}
                r="20"/>
        <g transform={`translate(${offset},0)`}>
            {children}
        </g>
    </g>
);

export default CourtSVG;
