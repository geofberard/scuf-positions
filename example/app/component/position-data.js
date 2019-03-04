import {EPlayer} from "../../../src";
import {EAction} from "../data/EAction";
import {EPosition} from "../data/EPosition";

const ORIGINAL_P1 = {px: 80, py: 70};
const ORIGINAL_P2 = {px: 80, py: 20};
const ORIGINAL_P3 = {px: 50, py: 20};
const ORIGINAL_P4 = {px: 20, py: 20};
const ORIGINAL_P5 = {px: 20, py: 70};
const ORIGINAL_P6 = {px: 50, py: 70};
const OUSTIDE_BACK_MIDDLE = {px: 50, py: 80};
const MIDDLE_FRONT = {px: 50, py: 5};
const RECEIVING_LEFT = {px: 20, py: 65};
const RECEIVING_RIGHT = {px: 80, py: 65};
const SETTING_PLACE = {px: 65, py: 10};
const SERVICE_PLACE = {px: 80, py: 110};

export const PLAYER_POSITION = {
    [EPosition.P1.id]: {
        [EPlayer.SETTER.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P1,
            [EAction.SERVING.id]: SERVICE_PLACE,
            [EAction.RECEIVING.id]: {px: 90, py: 70},
        },
        [EPlayer.OUTSIDE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P2,
            [EAction.SERVING.id]: {px: 60, py: 15},
            [EAction.RECEIVING.id]: RECEIVING_RIGHT,
        },
        [EPlayer.MIDDLE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P3,
            [EAction.SERVING.id]: MIDDLE_FRONT,
            [EAction.RECEIVING.id]: {px: 50, py: 10},
        },
        [EPlayer.OPPOSITE.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P4,
            [EAction.SERVING.id]: {px: 40, py: 10},
            [EAction.RECEIVING.id]: {px: 5, py: 30},
        },
        [EPlayer.OUTSIDE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P5,
            [EAction.SERVING.id]: OUSTIDE_BACK_MIDDLE,
            [EAction.RECEIVING.id]: RECEIVING_LEFT,
        },
        [EPlayer.MIDDLE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P6,
            [EAction.SERVING.id]: {px: 60, py: 70},
            [EAction.RECEIVING.id]: ORIGINAL_P6,
        },
    },
    [EPosition.P6.id]: {
        [EPlayer.SETTER.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P6,
            [EAction.SERVING.id]: {px: 80, py: 70},
            [EAction.RECEIVING.id]: {px: 60, py: 10},
        },
        [EPlayer.OUTSIDE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P1,
            [EAction.SERVING.id]: SERVICE_PLACE,
            [EAction.RECEIVING.id]: RECEIVING_RIGHT,
        },
        [EPlayer.MIDDLE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P2,
            [EAction.SERVING.id]: MIDDLE_FRONT,
            [EAction.RECEIVING.id]: {px: 75, py: 30},
        },
        [EPlayer.OPPOSITE.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P3,
            [EAction.SERVING.id]: {px: 40, py: 10},
            [EAction.RECEIVING.id]: {px: 70, py: 5},
        },
        [EPlayer.OUTSIDE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P4,
            [EAction.SERVING.id]: {px: 30, py: 5},
            [EAction.RECEIVING.id]: RECEIVING_LEFT,
        },
        [EPlayer.MIDDLE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P5,
            [EAction.SERVING.id]: ORIGINAL_P5,
            [EAction.RECEIVING.id]: ORIGINAL_P6,
        },
    },
    [EPosition.P5.id]: {
        [EPlayer.SETTER.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P5,
            [EAction.SERVING.id]: {px: 40, py: 70},
            [EAction.RECEIVING.id]: {px: 40, py: 10},
        },
        [EPlayer.OUTSIDE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P6,
            [EAction.SERVING.id]: OUSTIDE_BACK_MIDDLE,
            [EAction.RECEIVING.id]: ORIGINAL_P6,
        },
        [EPlayer.MIDDLE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P1,
            [EAction.SERVING.id]: SERVICE_PLACE,
            [EAction.RECEIVING.id]: RECEIVING_RIGHT,
        },
        [EPlayer.OPPOSITE.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P2,
            [EAction.SERVING.id]: {px: 70, py: 5},
            [EAction.RECEIVING.id]: {px: 95, py: 30},
        },
        [EPlayer.OUTSIDE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P3,
            [EAction.SERVING.id]: {px: 60, py: 10},
            [EAction.RECEIVING.id]: RECEIVING_LEFT,
        },
        [EPlayer.MIDDLE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P4,
            [EAction.SERVING.id]: MIDDLE_FRONT,
            [EAction.RECEIVING.id]: {px: 5, py: 5},
        },
    },
    [EPosition.P4.id]: {
        [EPlayer.SETTER.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P4,
            [EAction.SERVING.id]: {px: 40, py: 10},
            [EAction.RECEIVING.id]: {px: 5, py: 5},
        },
        [EPlayer.OUTSIDE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P5,
            [EAction.SERVING.id]: OUSTIDE_BACK_MIDDLE,
            [EAction.RECEIVING.id]: ORIGINAL_P6,
        },
        [EPlayer.MIDDLE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P6,
            [EAction.SERVING.id]: {px: 60, py: 70},
            [EAction.RECEIVING.id]: RECEIVING_RIGHT,
        },
        [EPlayer.OPPOSITE.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P1,
            [EAction.SERVING.id]: SERVICE_PLACE,
            [EAction.RECEIVING.id]: {px: 90, py: 90},
        },
        [EPlayer.OUTSIDE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P2,
            [EAction.SERVING.id]: {px: 60, py: 15},
            [EAction.RECEIVING.id]: RECEIVING_LEFT,
        },
        [EPlayer.MIDDLE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P3,
            [EAction.SERVING.id]: MIDDLE_FRONT,
            [EAction.RECEIVING.id]: {px: 10, py: 20},
        },
    },
    [EPosition.P3.id]: {
        [EPlayer.SETTER.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P3,
            [EAction.SERVING.id]: {px: 40, py: 10},
            [EAction.RECEIVING.id]: SETTING_PLACE,
        },
        [EPlayer.OUTSIDE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P4,
            [EAction.SERVING.id]: {px: 30, py: 5},
            [EAction.RECEIVING.id]: RECEIVING_LEFT,
        },
        [EPlayer.MIDDLE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P5,
            [EAction.SERVING.id]: ORIGINAL_P5,
            [EAction.RECEIVING.id]: ORIGINAL_P6,
        },
        [EPlayer.OPPOSITE.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P6,
            [EAction.SERVING.id]: {px: 80, py: 70},
            [EAction.RECEIVING.id]: {px: 60, py: 90},
        },
        [EPlayer.OUTSIDE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P1,
            [EAction.SERVING.id]: SERVICE_PLACE,
            [EAction.RECEIVING.id]: RECEIVING_RIGHT,
        },
        [EPlayer.MIDDLE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P2,
            [EAction.SERVING.id]: MIDDLE_FRONT,
            [EAction.RECEIVING.id]: {px: 70, py: 25},
        },
    },
    [EPosition.P2.id]: {
        [EPlayer.SETTER.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P2,
            [EAction.SERVING.id]: {px: 70, py: 5},
            [EAction.RECEIVING.id]: SETTING_PLACE,
        },
        [EPlayer.OUTSIDE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P3,
            [EAction.SERVING.id]: {px: 60, py: 10},
            [EAction.RECEIVING.id]: RECEIVING_LEFT,
        },
        [EPlayer.MIDDLE_FRONT.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P4,
            [EAction.SERVING.id]: MIDDLE_FRONT,
            [EAction.RECEIVING.id]: {px: 5, py: 5},
        },
        [EPlayer.OPPOSITE.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P5,
            [EAction.SERVING.id]: {px: 40, py: 70},
            [EAction.RECEIVING.id]: {px: 40, py: 95},
        },
        [EPlayer.OUTSIDE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P6,
            [EAction.SERVING.id]: OUSTIDE_BACK_MIDDLE,
            [EAction.RECEIVING.id]: ORIGINAL_P6,
        },
        [EPlayer.MIDDLE_BACK.id]: {
            [EAction.ORIGINAL.id]: ORIGINAL_P1,
            [EAction.SERVING.id]: SERVICE_PLACE,
            [EAction.RECEIVING.id]: RECEIVING_RIGHT,
        },
    },
};