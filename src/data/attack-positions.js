import {EPlayerRole} from "../model/EPlayerRole";
import {EAttackAction} from "../model/EAttackAction";
import {EGamePosition} from "../model/EGamePosition";
import {switchPlayer} from "../utils/position-utils";
import {
    ORIGINAL_P1, ORIGINAL_P2, ORIGINAL_P3, ORIGINAL_P4, ORIGINAL_P5, ORIGINAL_P6, OUSTIDE_BACK_MIDDLE
} from "./default-positions"

const configurePotitions = (position) => ({
    [EGamePosition.FRONT.id]: position,
    [EGamePosition.BACK.id]: switchPlayer(position, EPlayerRole.SETTER, EPlayerRole.OPPOSITE)
});

let MIDDLE = {
    [EPlayerRole.SETTER.id]: {px: 80, py: 20},
    [EPlayerRole.OUTSIDE_A.id]: {px: 20, py: 20},
    [EPlayerRole.MIDDLE_A.id]: {px: 50, py: 5},
    [EPlayerRole.OPPOSITE.id]: {px: 70, py: 55},
    [EPlayerRole.OUTSIDE_B.id]: OUSTIDE_BACK_MIDDLE,
    [EPlayerRole.MIDDLE_B.id]: {px: 30, py: 55},
};

export const ATTACK_POSITIONS = {
    [EAttackAction.ORIGINAL.id]: configurePotitions({
        [EPlayerRole.SETTER.id]: ORIGINAL_P2,
        [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P4,
        [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P3,
        [EPlayerRole.OPPOSITE.id]: ORIGINAL_P1,
        [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P6,
        [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P5,
    }),
    [EAttackAction.OUTSIDE.id]: configurePotitions({
        [EPlayerRole.SETTER.id]: {px: 70, py: 20},
        [EPlayerRole.OUTSIDE_A.id]: {px: 5, py: 5},
        [EPlayerRole.MIDDLE_A.id]: {px: 35, py: 20},
        [EPlayerRole.OPPOSITE.id]: {px: 70, py: 60},
        [EPlayerRole.OUTSIDE_B.id]: {px: 40, py: 80},
        [EPlayerRole.MIDDLE_B.id]: {px: 15, py: 40},
    }),
    [EAttackAction.MIDDLE.id]: configurePotitions(MIDDLE),
    [EAttackAction.OPPOSITE.id]: {
        [EGamePosition.FRONT.id]: {
            [EPlayerRole.SETTER.id]: {px: 80, py: 20},
            [EPlayerRole.OUTSIDE_A.id]: {px: 20, py: 20},
            [EPlayerRole.MIDDLE_A.id]: {px: 50, py: 25},
            [EPlayerRole.OPPOSITE.id]: {px: 85, py: 40},
            [EPlayerRole.OUTSIDE_B.id]: {px: 60, py: 70},
            [EPlayerRole.MIDDLE_B.id]: {px: 30, py: 55},
        },
        [EGamePosition.BACK.id]: {
            [EPlayerRole.SETTER.id]: {px: 85, py: 40},
            [EPlayerRole.OUTSIDE_A.id]: {px: 30, py: 20},
            [EPlayerRole.MIDDLE_A.id]: {px: 65, py: 20},
            [EPlayerRole.OPPOSITE.id]: {px: 95, py: 5},
            [EPlayerRole.OUTSIDE_B.id]: {px: 60, py: 80},
            [EPlayerRole.MIDDLE_B.id]: {px: 30, py: 60},
        },
    },
};