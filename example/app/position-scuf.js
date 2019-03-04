import {EPosition, EAction, EPlayer} from "../../src/index";

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

export const PLAYER_SCUF = {
    [EPosition.P1.id]: {
        [EAction.ORIGINAL.id]: {
            [EPlayer.SETTER.id]: ORIGINAL_P1,
            [EPlayer.OUTSIDE_FRONT.id]: ORIGINAL_P2,
            [EPlayer.MIDDLE_FRONT.id]: ORIGINAL_P3,
            [EPlayer.OPPOSITE.id]: ORIGINAL_P4,
            [EPlayer.OUTSIDE_BACK.id]: ORIGINAL_P5,
            [EPlayer.MIDDLE_BACK.id]: ORIGINAL_P6,
        },
        [EAction.SERVING.id]: {
            [EPlayer.SETTER.id]: SERVICE_PLACE,
            [EPlayer.OUTSIDE_FRONT.id]: {px: 60, py: 15},
            [EPlayer.MIDDLE_FRONT.id]: MIDDLE_FRONT,
            [EPlayer.OPPOSITE.id]: {px: 40, py: 10},
            [EPlayer.OUTSIDE_BACK.id]: OUSTIDE_BACK_MIDDLE,
            [EPlayer.MIDDLE_BACK.id]: {px: 60, py: 70},
        },
        [EAction.RECEIVING.id]: {
            [EPlayer.SETTER.id]: {px: 90, py: 70},
            [EPlayer.OUTSIDE_FRONT.id]: RECEIVING_RIGHT,
            [EPlayer.MIDDLE_FRONT.id]: {px: 50, py: 10},
            [EPlayer.OPPOSITE.id]: {px: 5, py: 30},
            [EPlayer.OUTSIDE_BACK.id]: RECEIVING_LEFT,
            [EPlayer.MIDDLE_BACK.id]: ORIGINAL_P6,
        },
    },
    [EPosition.P6.id]: {
        [EAction.ORIGINAL.id]: {
            [EPlayer.SETTER.id]: ORIGINAL_P6,
            [EPlayer.OUTSIDE_FRONT.id]: ORIGINAL_P1,
            [EPlayer.MIDDLE_FRONT.id]: ORIGINAL_P2,
            [EPlayer.OPPOSITE.id]: ORIGINAL_P3,
            [EPlayer.OUTSIDE_BACK.id]: ORIGINAL_P4,
            [EPlayer.MIDDLE_BACK.id]: ORIGINAL_P5,
        },
        [EAction.SERVING.id]: {
            [EPlayer.SETTER.id]: {px: 80, py: 70},
            [EPlayer.OUTSIDE_FRONT.id]: SERVICE_PLACE,
            [EPlayer.MIDDLE_FRONT.id]: MIDDLE_FRONT,
            [EPlayer.OPPOSITE.id]: {px: 40, py: 10},
            [EPlayer.OUTSIDE_BACK.id]: {px: 30, py: 5},
            [EPlayer.MIDDLE_BACK.id]: ORIGINAL_P5,
        },
        [EAction.RECEIVING.id]: {
            [EPlayer.SETTER.id]: {px: 60, py: 10},
            [EPlayer.OUTSIDE_FRONT.id]: RECEIVING_RIGHT,
            [EPlayer.MIDDLE_FRONT.id]: {px: 75, py: 30},
            [EPlayer.OPPOSITE.id]: {px: 70, py: 5},
            [EPlayer.OUTSIDE_BACK.id]: RECEIVING_LEFT,
            [EPlayer.MIDDLE_BACK.id]: ORIGINAL_P6,
        },
    },
    [EPosition.P5.id]: {
        [EAction.ORIGINAL.id]: {
            [EPlayer.SETTER.id]: ORIGINAL_P5,
            [EPlayer.OUTSIDE_FRONT.id]: ORIGINAL_P6,
            [EPlayer.MIDDLE_FRONT.id]: ORIGINAL_P1,
            [EPlayer.OPPOSITE.id]: ORIGINAL_P2,
            [EPlayer.OUTSIDE_BACK.id]: ORIGINAL_P3,
            [EPlayer.MIDDLE_BACK.id]: ORIGINAL_P4,
        },
        [EAction.SERVING.id]: {
            [EPlayer.SETTER.id]: {px: 40, py: 70},
            [EPlayer.OUTSIDE_FRONT.id]: OUSTIDE_BACK_MIDDLE,
            [EPlayer.MIDDLE_FRONT.id]: SERVICE_PLACE,
            [EPlayer.OPPOSITE.id]: {px: 70, py: 5},
            [EPlayer.OUTSIDE_BACK.id]: {px: 60, py: 10},
            [EPlayer.MIDDLE_BACK.id]: MIDDLE_FRONT,
        },
        [EAction.RECEIVING.id]: {
            [EPlayer.SETTER.id]: {px: 40, py: 10},
            [EPlayer.OUTSIDE_FRONT.id]: ORIGINAL_P6,
            [EPlayer.MIDDLE_FRONT.id]: RECEIVING_RIGHT,
            [EPlayer.OPPOSITE.id]: {px: 95, py: 30},
            [EPlayer.OUTSIDE_BACK.id]: RECEIVING_LEFT,
            [EPlayer.MIDDLE_BACK.id]: {px: 5, py: 5},
        },
    },
    [EPosition.P4.id]: {
        [EAction.ORIGINAL.id]: {
            [EPlayer.SETTER.id]: ORIGINAL_P4,
            [EPlayer.OUTSIDE_FRONT.id]: ORIGINAL_P5,
            [EPlayer.MIDDLE_FRONT.id]: ORIGINAL_P6,
            [EPlayer.OPPOSITE.id]: ORIGINAL_P1,
            [EPlayer.OUTSIDE_BACK.id]: ORIGINAL_P2,
            [EPlayer.MIDDLE_BACK.id]: ORIGINAL_P3,
        },
        [EAction.SERVING.id]: {
            [EPlayer.SETTER.id]: {px: 40, py: 10},
            [EPlayer.OUTSIDE_FRONT.id]: OUSTIDE_BACK_MIDDLE,
            [EPlayer.MIDDLE_FRONT.id]: {px: 60, py: 70},
            [EPlayer.OPPOSITE.id]: SERVICE_PLACE,
            [EPlayer.OUTSIDE_BACK.id]: {px: 60, py: 15},
            [EPlayer.MIDDLE_BACK.id]: MIDDLE_FRONT,
        },
        [EAction.RECEIVING.id]: {
            [EPlayer.SETTER.id]: {px: 5, py: 5},
            [EPlayer.OUTSIDE_FRONT.id]: ORIGINAL_P6,
            [EPlayer.MIDDLE_FRONT.id]: RECEIVING_RIGHT,
            [EPlayer.OPPOSITE.id]: {px: 90, py: 90},
            [EPlayer.OUTSIDE_BACK.id]: RECEIVING_LEFT,
            [EPlayer.MIDDLE_BACK.id]: {px: 10, py: 20},
        },
    },
    [EPosition.P3.id]: {
        [EAction.ORIGINAL.id]: {
            [EPlayer.SETTER.id]: ORIGINAL_P3,
            [EPlayer.OUTSIDE_FRONT.id]: ORIGINAL_P4,
            [EPlayer.MIDDLE_FRONT.id]: ORIGINAL_P5,
            [EPlayer.OPPOSITE.id]: ORIGINAL_P6,
            [EPlayer.OUTSIDE_BACK.id]: ORIGINAL_P1,
            [EPlayer.MIDDLE_BACK.id]: ORIGINAL_P2,
        },
        [EAction.SERVING.id]: {
            [EPlayer.SETTER.id]: {px: 40, py: 10},
            [EPlayer.OUTSIDE_FRONT.id]: {px: 30, py: 5},
            [EPlayer.MIDDLE_FRONT.id]: ORIGINAL_P5,
            [EPlayer.OPPOSITE.id]: {px: 80, py: 70},
            [EPlayer.OUTSIDE_BACK.id]: SERVICE_PLACE,
            [EPlayer.MIDDLE_BACK.id]: MIDDLE_FRONT,
        },
        [EAction.RECEIVING.id]: {
            [EPlayer.SETTER.id]: SETTING_PLACE,
            [EPlayer.OUTSIDE_FRONT.id]: RECEIVING_LEFT,
            [EPlayer.MIDDLE_FRONT.id]: ORIGINAL_P6,
            [EPlayer.OPPOSITE.id]: {px: 60, py: 90},
            [EPlayer.OUTSIDE_BACK.id]: RECEIVING_RIGHT,
            [EPlayer.MIDDLE_BACK.id]: {px: 70, py: 25},
        },
    },
    [EPosition.P2.id]: {
        [EAction.ORIGINAL.id]: {
            [EPlayer.SETTER.id]: ORIGINAL_P2,
            [EPlayer.OUTSIDE_FRONT.id]: ORIGINAL_P3,
            [EPlayer.MIDDLE_FRONT.id]: ORIGINAL_P4,
            [EPlayer.OPPOSITE.id]: ORIGINAL_P5,
            [EPlayer.OUTSIDE_BACK.id]: ORIGINAL_P6,
            [EPlayer.MIDDLE_BACK.id]: ORIGINAL_P1,
        },
        [EAction.SERVING.id]: {
            [EPlayer.SETTER.id]: {px: 70, py: 5},
            [EPlayer.OUTSIDE_FRONT.id]: {px: 60, py: 10},
            [EPlayer.MIDDLE_FRONT.id]: MIDDLE_FRONT,
            [EPlayer.OPPOSITE.id]: {px: 40, py: 70},
            [EPlayer.OUTSIDE_BACK.id]: OUSTIDE_BACK_MIDDLE,
            [EPlayer.MIDDLE_BACK.id]: SERVICE_PLACE,
        },
        [EAction.RECEIVING.id]: {
            [EPlayer.SETTER.id]: SETTING_PLACE,
            [EPlayer.OUTSIDE_FRONT.id]: RECEIVING_LEFT,
            [EPlayer.MIDDLE_FRONT.id]: {px: 5, py: 5},
            [EPlayer.OPPOSITE.id]: {px: 40, py: 95},
            [EPlayer.OUTSIDE_BACK.id]: ORIGINAL_P6,
            [EPlayer.MIDDLE_BACK.id]: RECEIVING_RIGHT,
        },
    },
};