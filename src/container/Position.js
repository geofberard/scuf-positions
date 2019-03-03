import React from "react";
import Court from "./Court";
import HorizontalLine from "./HorizontalLine";
import VerticalLine from "./VerticalLine";
import Player from "./Player";

export const MAX_SIZE = 1100;

const ORIGINAL = {
    O1: {px: 80, py: 70},
    O2: {px: 80, py: 20},
    O3: {px: 50, py: 20},
    O4: {px: 20, py: 20},
    O5: {px: 20, py: 70},
    O6: {px: 50, py: 70},
    SERVICE: {px: 80, py: 110},
};

export const POSITION = {
    P1: "P1",
    P6: "P6",
    P5: "P5",
    P4: "P4",
    P3: "P3",
    P2: "P2"
};

export const ACTION = {
    ORIGINAL: "ORIGINAL",
    SERVING: "SERVING",
    RECEIVING: "RECEIVING"
};

const PLAYERS = {
    SETTER: {
        id: "SETTER",
        label: "Passeuse",
        highlight: "#283593",
        understate: "#9fa8da",
    },
    OPPOSITE: {
        id: "OPPOSITE",
        label: "Pointe",
        highlight: "#6a1b9a",
        understate: "#ce93d8",
    },
    OUTSIDE_FRONT: {
        id: "OUTSIDE_FRONT",
        label: "Réceptionneuses-Attaquantes Avant",
        highlight: "#c62828",
        understate: "#ef9a9a",
    },
    OUTSIDE_BACK: {
        id: "OUTSIDE_BACK",
        label: "Réceptionneuses-Attaquantes Arrière",
        highlight: "#c62828",
        understate: "#ef9a9a",
    },
    MIDDLE_FRONT: {
        id: "MIDDLE_FRONT",
        label: "Centrale Avant",
        highlight: "#2e7d32",
        understate: "#a5d6a7",
    },
    MIDDLE_BACK: {
        id: "MIDDLE_BACK",
        label: "Centrale Arrière",
        highlight: "#2e7d32",
        understate: "#a5d6a7",
    }
};

let OUSTIDE_BACK_MIDDLE = {px: 50, py: 80};
let MIDDLE_FRONT = {px: 50, py: 5};
let RECEIVING_LEFT = {px: 20, py: 65};
let RECEIVING_RIGHT = {px: 80, py: 65};

let SETTING_PLACE = {px: 65, py: 10};
const PLAYER_POSITION = {
    [POSITION.P1]: {
        [PLAYERS.SETTER.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O1,
            [ACTION.SERVING]: ORIGINAL.SERVICE,
            [ACTION.RECEIVING]: {px: 90, py: 70},
        },
        [PLAYERS.OUTSIDE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O2,
            [ACTION.SERVING]: {px: 60, py: 15},
            [ACTION.RECEIVING]: RECEIVING_RIGHT,
        },
        [PLAYERS.MIDDLE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O3,
            [ACTION.SERVING]: MIDDLE_FRONT,
            [ACTION.RECEIVING]: {px: 50, py: 10},
        },
        [PLAYERS.OPPOSITE.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O4,
            [ACTION.SERVING]: {px: 40, py: 10},
            [ACTION.RECEIVING]: {px: 5, py: 30},
        },
        [PLAYERS.OUTSIDE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O5,
            [ACTION.SERVING]: OUSTIDE_BACK_MIDDLE,
            [ACTION.RECEIVING]: RECEIVING_LEFT,
        },
        [PLAYERS.MIDDLE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O6,
            [ACTION.SERVING]: {px: 60, py: 70},
            [ACTION.RECEIVING]: ORIGINAL.O6,
        },
    },
    [POSITION.P6]: {
        [PLAYERS.SETTER.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O6,
            [ACTION.SERVING]: {px: 80, py: 70},
            [ACTION.RECEIVING]: {px: 60, py: 10},
        },
        [PLAYERS.OUTSIDE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O1,
            [ACTION.SERVING]: ORIGINAL.SERVICE,
            [ACTION.RECEIVING]: RECEIVING_RIGHT,
        },
        [PLAYERS.MIDDLE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O2,
            [ACTION.SERVING]: MIDDLE_FRONT,
            [ACTION.RECEIVING]: {px: 75, py: 30},
        },
        [PLAYERS.OPPOSITE.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O3,
            [ACTION.SERVING]: {px: 40, py: 10},
            [ACTION.RECEIVING]: {px: 70, py: 5},
        },
        [PLAYERS.OUTSIDE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O4,
            [ACTION.SERVING]: {px: 30, py: 5},
            [ACTION.RECEIVING]: RECEIVING_LEFT,
        },
        [PLAYERS.MIDDLE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O5,
            [ACTION.SERVING]: ORIGINAL.O5,
            [ACTION.RECEIVING]: ORIGINAL.O6,
        },
    },
    [POSITION.P5]: {
        [PLAYERS.SETTER.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O5,
            [ACTION.SERVING]: {px: 40, py: 70},
            [ACTION.RECEIVING]: {px: 40, py: 10},
        },
        [PLAYERS.OUTSIDE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O6,
            [ACTION.SERVING]: OUSTIDE_BACK_MIDDLE,
            [ACTION.RECEIVING]: ORIGINAL.O6,
        },
        [PLAYERS.MIDDLE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O1,
            [ACTION.SERVING]: ORIGINAL.SERVICE,
            [ACTION.RECEIVING]: RECEIVING_RIGHT,
        },
        [PLAYERS.OPPOSITE.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O2,
            [ACTION.SERVING]: {px: 70, py: 5},
            [ACTION.RECEIVING]: {px: 95, py: 30},
        },
        [PLAYERS.OUTSIDE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O3,
            [ACTION.SERVING]: {px: 60, py: 10},
            [ACTION.RECEIVING]: RECEIVING_LEFT,
        },
        [PLAYERS.MIDDLE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O4,
            [ACTION.SERVING]: MIDDLE_FRONT,
            [ACTION.RECEIVING]: {px: 5, py: 5},
        },
    },
    [POSITION.P4]: {
        [PLAYERS.SETTER.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O4,
            [ACTION.SERVING]: {px: 40, py: 10},
            [ACTION.RECEIVING]: {px: 5, py: 5},
        },
        [PLAYERS.OUTSIDE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O5,
            [ACTION.SERVING]: OUSTIDE_BACK_MIDDLE,
            [ACTION.RECEIVING]: ORIGINAL.O6,
        },
        [PLAYERS.MIDDLE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O6,
            [ACTION.SERVING]: {px: 60, py: 70},
            [ACTION.RECEIVING]: RECEIVING_RIGHT,
        },
        [PLAYERS.OPPOSITE.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O1,
            [ACTION.SERVING]: ORIGINAL.SERVICE,
            [ACTION.RECEIVING]: {px: 90, py: 90},
        },
        [PLAYERS.OUTSIDE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O2,
            [ACTION.SERVING]: {px: 60, py: 15},
            [ACTION.RECEIVING]: RECEIVING_LEFT,
        },
        [PLAYERS.MIDDLE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O3,
            [ACTION.SERVING]: MIDDLE_FRONT,
            [ACTION.RECEIVING]: {px: 10, py: 20},
        },
    },
    [POSITION.P3]: {
        [PLAYERS.SETTER.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O3,
            [ACTION.SERVING]: {px: 40, py: 10},
            [ACTION.RECEIVING]: SETTING_PLACE,
        },
        [PLAYERS.OUTSIDE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O4,
            [ACTION.SERVING]: {px: 30, py: 5},
            [ACTION.RECEIVING]: RECEIVING_LEFT,
        },
        [PLAYERS.MIDDLE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O5,
            [ACTION.SERVING]: ORIGINAL.O5,
            [ACTION.RECEIVING]: ORIGINAL.O6,
        },
        [PLAYERS.OPPOSITE.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O6,
            [ACTION.SERVING]: {px: 80, py: 70},
            [ACTION.RECEIVING]: {px: 60, py: 90},
        },
        [PLAYERS.OUTSIDE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O1,
            [ACTION.SERVING]: ORIGINAL.SERVICE,
            [ACTION.RECEIVING]: RECEIVING_RIGHT,
        },
        [PLAYERS.MIDDLE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O2,
            [ACTION.SERVING]: MIDDLE_FRONT,
            [ACTION.RECEIVING]: {px: 70, py: 25},
        },
    },
    [POSITION.P2]: {
        [PLAYERS.SETTER.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O2,
            [ACTION.SERVING]: {px: 70, py: 5},
            [ACTION.RECEIVING]: SETTING_PLACE,
        },
        [PLAYERS.OUTSIDE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O3,
            [ACTION.SERVING]: {px: 60, py: 10},
            [ACTION.RECEIVING]: RECEIVING_LEFT,
        },
        [PLAYERS.MIDDLE_FRONT.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O4,
            [ACTION.SERVING]: MIDDLE_FRONT,
            [ACTION.RECEIVING]: {px: 5, py: 5},
        },
        [PLAYERS.OPPOSITE.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O5,
            [ACTION.SERVING]: {px: 40, py: 70},
            [ACTION.RECEIVING]: {px: 40, py: 95},
        },
        [PLAYERS.OUTSIDE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O6,
            [ACTION.SERVING]: OUSTIDE_BACK_MIDDLE,
            [ACTION.RECEIVING]: ORIGINAL.O6,
        },
        [PLAYERS.MIDDLE_BACK.id]: {
            [ACTION.ORIGINAL]: ORIGINAL.O1,
            [ACTION.SERVING]: ORIGINAL.SERVICE,
            [ACTION.RECEIVING]: RECEIVING_RIGHT,
        },
    },
}

const Position = ({position, action}) => (
    <svg viewBox={`0 0 ${MAX_SIZE} ${MAX_SIZE}`}>
        <Court>
            {Object.values(PLAYERS)
                .map(player => <Player
                    player={player}
                    position={PLAYER_POSITION[position][player.id][action]}/>)}
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
    position: POSITION.P1,
    action: ACTION.ORIGINAL,
};

export default Position;