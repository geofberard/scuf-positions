import {EPlayerRole} from "../model/EPlayerRole";
import {EGameAction} from "../model/EGameAction";
import {EGamePosition} from "../model/EGamePosition";

const ORIGINAL_P1 = {px: 80, py: 70};
const ORIGINAL_P2 = {px: 80, py: 20};
const ORIGINAL_P3 = {px: 50, py: 20};
const ORIGINAL_P4 = {px: 20, py: 20};
const ORIGINAL_P5 = {px: 20, py: 70};
const ORIGINAL_P6 = {px: 50, py: 70};
const OUSTIDE_BACK_MIDDLE = {px: 50, py: 80};
const SETTING_PLACE = {px: 65, py: 10};

let RELANCE = {
    [EPlayerRole.SETTER.id]: SETTING_PLACE,
    [EPlayerRole.OUTSIDE_A.id]: {px: 15, py: 40},
    [EPlayerRole.MIDDLE_A.id]: {px: 50, py: 40},
    [EPlayerRole.OPPOSITE.id]: {px: 80, py: 60},
    [EPlayerRole.OUTSIDE_B.id]: {px: 55, py: 80},
    [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P5,
};

function getNewPlayer(playerId, player1, player2) {
    return playerId === player1.id ? player2.id : playerId === player2.id ? player1.id : playerId;
}

const switchPlayer = (position, player1, player2) => {
    const newPosition = {};
    Object.keys(position)
        .forEach(playerId => newPosition[getNewPlayer(playerId, player1, player2)] = position[playerId])
    return newPosition;
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

export const GAME_POSITIONS_DEFAULT = {
    [EGameAction.ORIGINAL.id]: configurePotitions({
        [EPlayerRole.SETTER.id]: ORIGINAL_P2,
        [EPlayerRole.OUTSIDE_A.id]: ORIGINAL_P4,
        [EPlayerRole.MIDDLE_A.id]: ORIGINAL_P3,
        [EPlayerRole.OPPOSITE.id]: ORIGINAL_P1,
        [EPlayerRole.OUTSIDE_B.id]: ORIGINAL_P6,
        [EPlayerRole.MIDDLE_B.id]: ORIGINAL_P5,
    }),
    [EGameAction.RELANCE.id]: {
        [EGamePosition.FRONT.id]: RELANCE,
        [EGamePosition.BACK.id]: RELANCE,
    },
    [EGameAction.ATTACK_OUTSIDE.id]: configurePotitions({
        [EPlayerRole.SETTER.id]: {px: 70, py: 20},
        [EPlayerRole.OUTSIDE_A.id]: {px: 5, py: 5},
        [EPlayerRole.MIDDLE_A.id]: {px: 35, py: 20},
        [EPlayerRole.OPPOSITE.id]: {px: 70, py: 60},
        [EPlayerRole.OUTSIDE_B.id]: {px: 40, py: 80},
        [EPlayerRole.MIDDLE_B.id]: {px: 15, py: 40},
    }),
    [EGameAction.ATTACK_MIDDLE.id]: configurePotitions(MIDDLE),
    [EGameAction.ATTACK_OPPOSITE.id]: {
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
    [EGameAction.DEFENSE_OUTSIDE.id]: configurePotitions({
        [EPlayerRole.SETTER.id]: {px: 65, py: 20},
        [EPlayerRole.OUTSIDE_A.id]: {px: 10, py: 5},
        [EPlayerRole.MIDDLE_A.id]: {px: 20, py: 5},
        [EPlayerRole.OPPOSITE.id]: {px: 90, py: 55},
        [EPlayerRole.OUTSIDE_B.id]: {px: 75, py: 75},
        [EPlayerRole.MIDDLE_B.id]: {px: 5, py: 55},
    }),
    [EGameAction.DEFENSE_MIDDLE.id]: configurePotitions(MIDDLE),
    [EGameAction.DEFENSE_OPPOSITE.id]: configurePotitions({
        [EPlayerRole.SETTER.id]: {px: 90, py: 5},
        [EPlayerRole.OUTSIDE_A.id]: {px: 35, py: 20},
        [EPlayerRole.MIDDLE_A.id]: {px: 80, py: 5},
        [EPlayerRole.OPPOSITE.id]: {px: 95, py: 55},
        [EPlayerRole.OUTSIDE_B.id]: {px: 25, py: 75},
        [EPlayerRole.MIDDLE_B.id]: {px: 10, py: 55},
    }),
};

const mapCollector  = (map, obj) => (map[obj.key] = obj.value, map);

const switchLibero = (position) => {
    const middleToChange = Object.keys(position)
        .map(roleId => EPlayerRole[roleId])
        .find(role => role === EPlayerRole.MIDDLE_A && position[role.id].py > 30
            || role === EPlayerRole.MIDDLE_B && position[role.id].py > 30);
    return switchPlayer(position, middleToChange, EPlayerRole.LIBERO);
};

export const GAME_POSITIONS_LIBERO = Object.keys(GAME_POSITIONS_DEFAULT)
    .map(action => ({
        key: action,
        value: Object.keys(GAME_POSITIONS_DEFAULT[action])
            .map(position => ({
                key: position,
                value: switchLibero(GAME_POSITIONS_DEFAULT[action][position]),
            })).reduce(mapCollector, {}),
    })).reduce(mapCollector, {});