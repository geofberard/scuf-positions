import React from "react";
import Court from "./Court";
import HorizontalLine from "./HorizontalLine";
import VerticalLine from "./VerticalLine";
import Player from "./Player";
import {EPlayer} from "../data/EPlayer";

export const MAX_SIZE = 1100;

const Position = ({positions}) => (
    <svg viewBox={`0 0 ${MAX_SIZE} ${MAX_SIZE}`}>
        <Court>
            {Object.values(EPlayer)
                .map(player => <Player
                    player={player}
                    position={positions[player.id]}/>)}
        </Court>
        {Array.apply(null, {length: 12})
            .map(Number.call, Number)
            .map(y => <HorizontalLine y={y * 100}/>)}
        {Array.apply(null, {length: 12})
            .map(Number.call, Number)
            .map(x => <VerticalLine x={x * 100}/>)}
    </svg>
);

Position.defaultProps = {
    positions: {
        [EPlayer.SETTER.id]: {px: 80, py: 70},
        [EPlayer.OUTSIDE_FRONT.id]: {px: 80, py: 20},
        [EPlayer.MIDDLE_FRONT.id]: {px: 50, py: 20},
        [EPlayer.OPPOSITE.id]: {px: 20, py: 20},
        [EPlayer.OUTSIDE_BACK.id]: {px: 20, py: 70},
        [EPlayer.MIDDLE_BACK.id]: {px: 50, py: 70},
    },
};

export default Position;