import {EPlayerRole} from "../model/EPlayerRole";
import {EServiceAction} from "../model/EServiceAction";
import {EServicePosition} from "../model/EServicePosition";


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

export const START_POSITIONS_LIBERO = {
    [EServicePosition.P1.id]: {
        [EServiceAction.ORIGINAL.id]: {
            [EPlayerRole.SETTER.id]: ORIGINAL_P1,
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P2,
            [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P3,
            [EPlayerRole.OPPOSITE.id]: ORIGINAL_P4,
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P5,
            [EPlayerRole.LIBERO.id]: ORIGINAL_P6,
        },
        [EServiceAction.SERVING.id]: {
            [EPlayerRole.SETTER.id]: SERVICE_PLACE,
            [EPlayerRole.OUTSIDE_A.id]: {px: 60, py: 15},
            [EPlayerRole.MIDDLE_A.id]: MIDDLE_FRONT,
            [EPlayerRole.OPPOSITE.id]: {px: 40, py: 10},
            [EPlayerRole.OUTSIDE_B.id]: OUSTIDE_BACK_MIDDLE,
            [EPlayerRole.LIBERO.id]: {px: 60, py: 70},
        },
        [EServiceAction.RECEIVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 90, py: 70},
            [EPlayerRole.OUTSIDE_A.id]: RECEIVING_RIGHT,
            [EPlayerRole.MIDDLE_A.id]: {px: 50, py: 10},
            [EPlayerRole.OPPOSITE.id]: {px: 5, py: 30},
            [EPlayerRole.OUTSIDE_B.id]: RECEIVING_LEFT,
            [EPlayerRole.LIBERO.id]: ORIGINAL_P6,
        },
    },
    [EServicePosition.P6.id]: {
        [EServiceAction.ORIGINAL.id]: {
            [EPlayerRole.SETTER.id]: ORIGINAL_P6,
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P1,
            [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P2,
            [EPlayerRole.OPPOSITE.id]: ORIGINAL_P3,
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P4,
            [EPlayerRole.LIBERO.id]: ORIGINAL_P5,
        },
        [EServiceAction.SERVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 80, py: 70},
            [EPlayerRole.OUTSIDE_A.id]: SERVICE_PLACE,
            [EPlayerRole.MIDDLE_A.id]: MIDDLE_FRONT,
            [EPlayerRole.OPPOSITE.id]: {px: 40, py: 10},
            [EPlayerRole.OUTSIDE_B.id]: {px: 30, py: 5},
            [EPlayerRole.LIBERO.id]: ORIGINAL_P5,
        },
        [EServiceAction.RECEIVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 60, py: 10},
            [EPlayerRole.OUTSIDE_A.id]: RECEIVING_RIGHT,
            [EPlayerRole.MIDDLE_A.id]: {px: 75, py: 30},
            [EPlayerRole.OPPOSITE.id]: {px: 70, py: 5},
            [EPlayerRole.OUTSIDE_B.id]: RECEIVING_LEFT,
            [EPlayerRole.LIBERO.id]: ORIGINAL_P6,
        },
    },
    [EServicePosition.P5.id]: {
        [EServiceAction.ORIGINAL.id]: {
            [EPlayerRole.SETTER.id]: ORIGINAL_P5,
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P6,
            [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P1,
            [EPlayerRole.OPPOSITE.id]: ORIGINAL_P2,
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P3,
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P4,
        },
        [EServiceAction.SERVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 40, py: 70},
            [EPlayerRole.OUTSIDE_A.id]: OUSTIDE_BACK_MIDDLE,
            [EPlayerRole.MIDDLE_A.id]: SERVICE_PLACE,
            [EPlayerRole.OPPOSITE.id]: {px: 70, py: 5},
            [EPlayerRole.OUTSIDE_B.id]: {px: 60, py: 10},
            [EPlayerRole.MIDDLE_B.id]: MIDDLE_FRONT,
        },
        [EServiceAction.RECEIVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 40, py: 10},
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P6,
            [EPlayerRole.LIBERO.id]: RECEIVING_RIGHT,
            [EPlayerRole.OPPOSITE.id]: {px: 95, py: 30},
            [EPlayerRole.OUTSIDE_B.id]: RECEIVING_LEFT,
            [EPlayerRole.MIDDLE_B.id]: {px: 5, py: 5},
        },
    },
    [EServicePosition.P4.id]: {
        [EServiceAction.ORIGINAL.id]: {
            [EPlayerRole.SETTER.id]: ORIGINAL_P4,
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P5,
            [EPlayerRole.LIBERO.id]: ORIGINAL_P6,
            [EPlayerRole.OPPOSITE.id]: ORIGINAL_P1,
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P2,
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P3,
        },
        [EServiceAction.SERVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 40, py: 10},
            [EPlayerRole.OUTSIDE_A.id]: OUSTIDE_BACK_MIDDLE,
            [EPlayerRole.LIBERO.id]: {px: 60, py: 70},
            [EPlayerRole.OPPOSITE.id]: SERVICE_PLACE,
            [EPlayerRole.OUTSIDE_B.id]: {px: 60, py: 15},
            [EPlayerRole.MIDDLE_B.id]: MIDDLE_FRONT,
        },
        [EServiceAction.RECEIVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 5, py: 5},
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P6,
            [EPlayerRole.LIBERO.id]: RECEIVING_RIGHT,
            [EPlayerRole.OPPOSITE.id]: {px: 90, py: 90},
            [EPlayerRole.OUTSIDE_B.id]: RECEIVING_LEFT,
            [EPlayerRole.MIDDLE_B.id]: {px: 10, py: 20},
        },
    },
    [EServicePosition.P3.id]: {
        [EServiceAction.ORIGINAL.id]: {
            [EPlayerRole.SETTER.id]: ORIGINAL_P3,
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P4,
            [EPlayerRole.LIBERO.id]: ORIGINAL_P5,
            [EPlayerRole.OPPOSITE.id]: ORIGINAL_P6,
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P1,
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P2,
        },
        [EServiceAction.SERVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 40, py: 10},
            [EPlayerRole.OUTSIDE_A.id]: {px: 30, py: 5},
            [EPlayerRole.LIBERO.id]: ORIGINAL_P5,
            [EPlayerRole.OPPOSITE.id]: {px: 80, py: 70},
            [EPlayerRole.OUTSIDE_B.id]: SERVICE_PLACE,
            [EPlayerRole.MIDDLE_B.id]: MIDDLE_FRONT,
        },
        [EServiceAction.RECEIVING.id]: {
            [EPlayerRole.SETTER.id]: SETTING_PLACE,
            [EPlayerRole.OUTSIDE_A.id]: RECEIVING_LEFT,
            [EPlayerRole.LIBERO.id]: ORIGINAL_P6,
            [EPlayerRole.OPPOSITE.id]: {px: 60, py: 90},
            [EPlayerRole.OUTSIDE_B.id]: RECEIVING_RIGHT,
            [EPlayerRole.MIDDLE_B.id]: {px: 70, py: 25},
        },
    },
    [EServicePosition.P2.id]: {
        [EServiceAction.ORIGINAL.id]: {
            [EPlayerRole.SETTER.id]: ORIGINAL_P2,
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P3,
            [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P4,
            [EPlayerRole.OPPOSITE.id]: ORIGINAL_P5,
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P6,
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P1,
        },
        [EServiceAction.SERVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 70, py: 5},
            [EPlayerRole.OUTSIDE_A.id]: {px: 60, py: 10},
            [EPlayerRole.MIDDLE_A.id]: MIDDLE_FRONT,
            [EPlayerRole.OPPOSITE.id]: {px: 40, py: 70},
            [EPlayerRole.OUTSIDE_B.id]: OUSTIDE_BACK_MIDDLE,
            [EPlayerRole.MIDDLE_B.id]: SERVICE_PLACE,
        },
        [EServiceAction.RECEIVING.id]: {
            [EPlayerRole.SETTER.id]: SETTING_PLACE,
            [EPlayerRole.OUTSIDE_A.id]: RECEIVING_LEFT,
            [EPlayerRole.MIDDLE_A.id]: {px: 5, py: 5},
            [EPlayerRole.OPPOSITE.id]: {px: 40, py: 95},
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P6,
            [EPlayerRole.LIBERO.id]: RECEIVING_RIGHT,
        },
    },
};