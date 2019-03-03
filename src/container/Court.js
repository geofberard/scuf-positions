import React from "react";

export const COURT_SIZE = 900;
const lineWidth = 5;
const offset = 100;

const Court = ({children}) => (
    <g>
        <rect x={offset - lineWidth / 2}
              y={lineWidth / 2}
              width={COURT_SIZE}
              height={COURT_SIZE}
              style={{fill: "none", "stroke-width": lineWidth, stroke: "black"}}/>
        <line x1={offset}
              y1={COURT_SIZE / 3}
              x2={offset + COURT_SIZE}
              y2={COURT_SIZE / 3}
              style={{"stroke-width": lineWidth, stroke: "black"}}/>
        <g transform={`translate(${offset},0)`}>
            {children}
        </g>
    </g>
);

export default Court;
