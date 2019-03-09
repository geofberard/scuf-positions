import React from "react";
import Court from "./Court";
import Player from "./Player";
import {EPlayer} from "../data/EPlayer";

export const MAX_SIZE = 1100;

const OUTSIDE = {px: 120, py: 70};

const Position = ({positions, focus}) => (
    <svg viewBox={`0 0 ${MAX_SIZE} ${MAX_SIZE - 50}`}>
        <Court>
            {Object.values(EPlayer)
                .map(player => <Player key={player.id}
                                       player={player}
                                       position={positions[player.id] || OUTSIDE}
                                       focus={focus === undefined || focus === player}/>)}
        </Court>
    </svg>
);

Position.defaultProps = {
    positions: {
        [EPlayer.SETTER.id]: {px: 80, py: 70},
        [EPlayer.OUTSIDE_A.id]: {px: 80, py: 20},
        [EPlayer.MIDDLE_A.id]: {px: 50, py: 20},
        [EPlayer.OPPOSITE.id]: {px: 20, py: 20},
        [EPlayer.OUTSIDE_B.id]: {px: 20, py: 70},
        [EPlayer.MIDDLE_B.id]: {px: 50, py: 70},
    },
};

export default Position;