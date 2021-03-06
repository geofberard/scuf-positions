import {EPlayerRole} from "../model/EPlayerRole";
import {EServiceAction} from "../model/EServiceAction";
import {EServicePosition} from "../model/EServicePosition";
import {
    MIDDLE_FRONT,
    ORIGINAL_P1, ORIGINAL_P2, ORIGINAL_P3, ORIGINAL_P4, ORIGINAL_P5, ORIGINAL_P6,
    OUSTIDE_BACK_MIDDLE, RECEIVING_LEFT, RECEIVING_RIGHT, SERVICE_PLACE, SETTING_PLACE
} from "./default-positions"

export const SERVICE_POSITIONS = {
    [EServicePosition.P1.id]: {
        [EServiceAction.ORIGINAL.id]: {
            [EPlayerRole.SETTER.id]: ORIGINAL_P1,
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P2,
            [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P3,
            [EPlayerRole.OPPOSITE.id]: ORIGINAL_P4,
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P5,
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P6,
        },
        [EServiceAction.SERVING.id]: {
            [EPlayerRole.SETTER.id]: SERVICE_PLACE,
            [EPlayerRole.OUTSIDE_A.id]: {px: 60, py: 15},
            [EPlayerRole.MIDDLE_A.id]: MIDDLE_FRONT,
            [EPlayerRole.OPPOSITE.id]: {px: 40, py: 10},
            [EPlayerRole.OUTSIDE_B.id]: OUSTIDE_BACK_MIDDLE,
            [EPlayerRole.MIDDLE_B.id]: {px: 60, py: 70},
        },
        [EServiceAction.RECEIVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 90, py: 70},
            [EPlayerRole.OUTSIDE_A.id]: RECEIVING_RIGHT,
            [EPlayerRole.MIDDLE_A.id]: {px: 50, py: 10},
            [EPlayerRole.OPPOSITE.id]: {px: 5, py: 30},
            [EPlayerRole.OUTSIDE_B.id]: RECEIVING_LEFT,
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P6,
        },
    },
    [EServicePosition.P6.id]: {
        [EServiceAction.ORIGINAL.id]: {
            [EPlayerRole.SETTER.id]: ORIGINAL_P6,
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P1,
            [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P2,
            [EPlayerRole.OPPOSITE.id]: ORIGINAL_P3,
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P4,
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P5,
        },
        [EServiceAction.SERVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 80, py: 70},
            [EPlayerRole.OUTSIDE_A.id]: SERVICE_PLACE,
            [EPlayerRole.MIDDLE_A.id]: MIDDLE_FRONT,
            [EPlayerRole.OPPOSITE.id]: {px: 40, py: 10},
            [EPlayerRole.OUTSIDE_B.id]: {px: 30, py: 5},
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P5,
        },
        [EServiceAction.RECEIVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 60, py: 10},
            [EPlayerRole.OUTSIDE_A.id]: RECEIVING_RIGHT,
            [EPlayerRole.MIDDLE_A.id]: {px: 75, py: 30},
            [EPlayerRole.OPPOSITE.id]: {px: 70, py: 5},
            [EPlayerRole.OUTSIDE_B.id]: RECEIVING_LEFT,
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P6,
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
            [EPlayerRole.MIDDLE_A.id]: RECEIVING_RIGHT,
            [EPlayerRole.OPPOSITE.id]: {px: 95, py: 30},
            [EPlayerRole.OUTSIDE_B.id]: RECEIVING_LEFT,
            [EPlayerRole.MIDDLE_B.id]: {px: 5, py: 5},
        },
    },
    [EServicePosition.P4.id]: {
        [EServiceAction.ORIGINAL.id]: {
            [EPlayerRole.SETTER.id]: ORIGINAL_P4,
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P5,
            [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P6,
            [EPlayerRole.OPPOSITE.id]: ORIGINAL_P1,
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P2,
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P3,
        },
        [EServiceAction.SERVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 40, py: 10},
            [EPlayerRole.OUTSIDE_A.id]: OUSTIDE_BACK_MIDDLE,
            [EPlayerRole.MIDDLE_A.id]: {px: 60, py: 70},
            [EPlayerRole.OPPOSITE.id]: SERVICE_PLACE,
            [EPlayerRole.OUTSIDE_B.id]: {px: 60, py: 15},
            [EPlayerRole.MIDDLE_B.id]: MIDDLE_FRONT,
        },
        [EServiceAction.RECEIVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 5, py: 5},
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P6,
            [EPlayerRole.MIDDLE_A.id]: RECEIVING_RIGHT,
            [EPlayerRole.OPPOSITE.id]: {px: 90, py: 90},
            [EPlayerRole.OUTSIDE_B.id]: RECEIVING_LEFT,
            [EPlayerRole.MIDDLE_B.id]: {px: 10, py: 20},
        },
    },
    [EServicePosition.P3.id]: {
        [EServiceAction.ORIGINAL.id]: {
            [EPlayerRole.SETTER.id]: ORIGINAL_P3,
            [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P4,
            [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P5,
            [EPlayerRole.OPPOSITE.id]: ORIGINAL_P6,
            [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P1,
            [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P2,
        },
        [EServiceAction.SERVING.id]: {
            [EPlayerRole.SETTER.id]: {px: 40, py: 10},
            [EPlayerRole.OUTSIDE_A.id]: {px: 30, py: 5},
            [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P5,
            [EPlayerRole.OPPOSITE.id]: {px: 80, py: 70},
            [EPlayerRole.OUTSIDE_B.id]: SERVICE_PLACE,
            [EPlayerRole.MIDDLE_B.id]: MIDDLE_FRONT,
        },
        [EServiceAction.RECEIVING.id]: {
            [EPlayerRole.SETTER.id]: SETTING_PLACE,
            [EPlayerRole.OUTSIDE_A.id]: RECEIVING_LEFT,
            [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P6,
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
            [EPlayerRole.MIDDLE_B.id]: RECEIVING_RIGHT,
        },
    },
};