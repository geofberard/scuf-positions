import React from "react";

const HorizontalLine = ({y}) => (
    <line x1={0}
          y1={y}
          x2={1100}
          y2={y}
          style={{"stroke-width": 1, stroke: "gray"}}/>
);

export default HorizontalLine;
