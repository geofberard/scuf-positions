import React from "react";

const VerticalLine = ({x}) => (
    <line x1={x}
          y1={0}
          x2={x}
          y2={1100}
          style={{"stroke-width": 1, stroke: "gray"}}/>
);

export default VerticalLine;
