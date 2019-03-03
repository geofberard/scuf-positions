import React from "react";
import Court from "./Court";
import HorizontalLine from "./HorizontalLine";
import VerticalLine from "./VerticalLine";
import Player from "./Player";
import {PLAYER_POSITION} from "./position-data";
import {EPlayer} from "../data/EPlayer";
import {EAction} from "../data/EAction";
import {EPosition} from "../data/EPosition";

export const MAX_SIZE = 1100;

const Position = ({position, action}) => (
    <svg viewBox={`0 0 ${MAX_SIZE} ${MAX_SIZE}`}>
        <Court>
            {Object.values(EPlayer)
                .map(player => <Player
                    player={player}
                    position={PLAYER_POSITION[position.id][player.id][action.id]}/>)}
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
    position: EPosition.P1,
    action: EAction.ORIGINAL,
};

export default Position;