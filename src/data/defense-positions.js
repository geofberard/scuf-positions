import {EPlayerRole} from "../model/EPlayerRole";
import {EDefenseAction} from "../model/EDefenseAction";
import {EGamePosition} from "../model/EGamePosition";
import {switchPlayer} from "../utils/position-utils";
import {ORIGINAL_P1, ORIGINAL_P2, ORIGINAL_P3, ORIGINAL_P4, ORIGINAL_P5, ORIGINAL_P6,
    OUSTIDE_BACK_MIDDLE, SETTING_PLACE} from "./default-positions"

let RELANCE = {
    [EPlayerRole.SETTER.id]: SETTING_PLACE,
    [EPlayerRole.OUTSIDE_A.id]: {px: 15, py: 40},
    [EPlayerRole.MIDDLE_A.id]: {px: 50, py: 40},
    [EPlayerRole.OPPOSITE.id]: {px: 80, py: 60},
    [EPlayerRole.OUTSIDE_B.id]: {px: 55, py: 80},
    [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P5,
};

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

export const DEFENSE_POSITIONS = {
    [EDefenseAction.ORIGINAL.id]: configurePotitions({
        [EPlayerRole.SETTER.id]: ORIGINAL_P2,
        [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P4,
        [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P3,
        [EPlayerRole.OPPOSITE.id]: ORIGINAL_P1,
        [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P6,
        [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P5,
    }),
    [EDefenseAction.RELANCE.id]: {
        [EGamePosition.FRONT.id]: RELANCE,
        [EGamePosition.BACK.id]: RELANCE,
    },
    [EDefenseAction.OUTSIDE.id]: configurePotitions({
        [EPlayerRole.SETTER.id]: {px: 65, py: 20},
        [EPlayerRole.OUTSIDE_A.id]: {px: 10, py: 5},
        [EPlayerRole.MIDDLE_A.id]: {px: 20, py: 5},
        [EPlayerRole.OPPOSITE.id]: {px: 90, py: 55},
        [EPlayerRole.OUTSIDE_B.id]: {px: 75, py: 75},
        [EPlayerRole.MIDDLE_B.id]: {px: 5, py: 55},
    }),
    [EDefenseAction.MIDDLE.id]: configurePotitions(MIDDLE),
    [EDefenseAction.OPPOSITE.id]: configurePotitions({
        [EPlayerRole.SETTER.id]: {px: 90, py: 5},
        [EPlayerRole.OUTSIDE_A.id]: {px: 35, py: 20},
        [EPlayerRole.MIDDLE_A.id]: {px: 80, py: 5},
        [EPlayerRole.OPPOSITE.id]: {px: 95, py: 55},
        [EPlayerRole.OUTSIDE_B.id]: {px: 25, py: 75},
        [EPlayerRole.MIDDLE_B.id]: {px: 10, py: 55},
    }),
};