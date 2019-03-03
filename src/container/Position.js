import React from "react";
import Court from "./Court";
import HorizontalLine from "./HorizontalLine";
import VerticalLine from "./VerticalLine";
import Player from "./Player";

export const MAX_SIZE = 1100;

const ORIGINAL = {
  O1:{px:80,py:70},
  O2:{px:80,py:20},
  O3:{px:50,py:20},
  O4:{px:20,py:20},
  O5:{px:20,py:70},
  O6:{px:50,py:70},
};

export const POSITION = {
    P1:"P1",
    P6:"P6",
    P5:"P5",
    P4:"P4",
    P3:"P3",
    P2:"P2"
}

const PLAYERS = {
    SETTER: {
        id:"SETTER",
        label: "Passeuse",
        highlight: "#283593",
        understate: "#9fa8da",
    },
    OPPOSITE: {
        id:"OPPOSITE",
        label: "Pointe",
        highlight: "#6a1b9a",
        understate: "#ce93d8",
    },
    OUTSIDE_FRONT: {
        id:"OUTSIDE_FRONT",
        label: "Réceptionneuses-Attaquantes Avant",
        highlight: "#c62828",
        understate: "#ef9a9a",
    },
    OUTSIDE_BACK: {
        id:"OUTSIDE_BACK",
        label: "Réceptionneuses-Attaquantes Arrière",
        highlight: "#c62828",
        understate: "#ef9a9a",
    },
    MIDDLE_FRONT: {
        id:"MIDDLE_FRONT",
        label: "Centrale Avant",
        highlight: "#2e7d32",
        understate: "#a5d6a7",
    },
    MIDDLE_BACK: {
        id:"MIDDLE_BACK",
        label: "Centrale Arrière",
        highlight: "#2e7d32",
        understate: "#a5d6a7",
    }
};

const PLAYER_POSITION = {
    [POSITION.P1]:{
        [PLAYERS.SETTER.id]:ORIGINAL.O1,
        [PLAYERS.OUTSIDE_FRONT.id]:ORIGINAL.O2,
        [PLAYERS.MIDDLE_FRONT.id]:ORIGINAL.O3,
        [PLAYERS.OPPOSITE.id]:ORIGINAL.O4,
        [PLAYERS.OUTSIDE_BACK.id]:ORIGINAL.O5,
        [PLAYERS.MIDDLE_BACK.id]:ORIGINAL.O6,
    },
    [POSITION.P6]:{
        [PLAYERS.SETTER.id]:ORIGINAL.O6,
        [PLAYERS.OUTSIDE_FRONT.id]:ORIGINAL.O1,
        [PLAYERS.MIDDLE_FRONT.id]:ORIGINAL.O2,
        [PLAYERS.OPPOSITE.id]:ORIGINAL.O3,
        [PLAYERS.OUTSIDE_BACK.id]:ORIGINAL.O4,
        [PLAYERS.MIDDLE_BACK.id]:ORIGINAL.O5,
    },
    [POSITION.P5]:{
        [PLAYERS.SETTER.id]:ORIGINAL.O5,
        [PLAYERS.OUTSIDE_FRONT.id]:ORIGINAL.O6,
        [PLAYERS.MIDDLE_FRONT.id]:ORIGINAL.O1,
        [PLAYERS.OPPOSITE.id]:ORIGINAL.O2,
        [PLAYERS.OUTSIDE_BACK.id]:ORIGINAL.O3,
        [PLAYERS.MIDDLE_BACK.id]:ORIGINAL.O4,
    },
    [POSITION.P4]:{
        [PLAYERS.SETTER.id]:ORIGINAL.O4,
        [PLAYERS.OUTSIDE_FRONT.id]:ORIGINAL.O5,
        [PLAYERS.MIDDLE_FRONT.id]:ORIGINAL.O6,
        [PLAYERS.OPPOSITE.id]:ORIGINAL.O1,
        [PLAYERS.OUTSIDE_BACK.id]:ORIGINAL.O2,
        [PLAYERS.MIDDLE_BACK.id]:ORIGINAL.O3,
    },
    [POSITION.P3]:{
        [PLAYERS.SETTER.id]:ORIGINAL.O3,
        [PLAYERS.OUTSIDE_FRONT.id]:ORIGINAL.O4,
        [PLAYERS.MIDDLE_FRONT.id]:ORIGINAL.O5,
        [PLAYERS.OPPOSITE.id]:ORIGINAL.O6,
        [PLAYERS.OUTSIDE_BACK.id]:ORIGINAL.O1,
        [PLAYERS.MIDDLE_BACK.id]:ORIGINAL.O2,
    },
    [POSITION.P2]:{
        [PLAYERS.SETTER.id]:ORIGINAL.O2,
        [PLAYERS.OUTSIDE_FRONT.id]:ORIGINAL.O3,
        [PLAYERS.MIDDLE_FRONT.id]:ORIGINAL.O4,
        [PLAYERS.OPPOSITE.id]:ORIGINAL.O5,
        [PLAYERS.OUTSIDE_BACK.id]:ORIGINAL.O6,
        [PLAYERS.MIDDLE_BACK.id]:ORIGINAL.O1,
    },
}

const Position = ({position}) => (
    <svg viewBox={`0 0 ${MAX_SIZE} ${MAX_SIZE}`}>
        <Court>
            {Object.values(PLAYERS)
                .map(player => <Player player={player} position={PLAYER_POSITION[position][player.id]}/>)}
        </Court>
        {Array.apply(null, {length: 12})
            .map(Number.call, Number)
            .map(y => <HorizontalLine y={y * 100}/>)}
        {Array.apply(null, {length: 12})
            .map(Number.call, Number)
            .map(x => <VerticalLine x={x * 100}/>)}
    </svg>
);

Position.defaultProps= {
    position: POSITION.P1
};

export default Position;