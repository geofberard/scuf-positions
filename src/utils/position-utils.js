import {EPlayerRole} from "../model/EPlayerRole";

const mapCollector  = (map, obj) => (map[obj.key] = obj.value, map);

function getNewPlayer(playerId, player1, player2) {
    return playerId === player1.id ? player2.id : playerId === player2.id ? player1.id : playerId;
}

export const switchPlayer = (position, player1, player2) => {
    return Object.keys(position)
        .map(playerId => ({key: getNewPlayer(playerId, player1, player2), value:position[playerId]}))
        .reduce(mapCollector,{});
};

const switchLibero = (position) => {
    const middleToChange = Object.keys(position)
        .map(roleId => EPlayerRole[roleId])
        .filter(role => role === EPlayerRole.MIDDLE_A || role === EPlayerRole.MIDDLE_B)
        .filter(role => position[role.id].py > 30 && position[role.id].py < 100)
        .sort((roleA,roleB) => position[roleB.id].py - position[roleA.id].py)[0];
    return middleToChange ? switchPlayer(position, middleToChange, EPlayerRole.LIBERO) : position;
};

export const replaceLibero = (positions) =>
    Object.keys(positions)
        .map(level1 => ({
            key: level1,
            value: Object.keys(positions[level1])
                .map(level2 => ({
                    key: level2,
                    value: switchLibero(positions[level1][level2]),
                })).reduce(mapCollector, {}),
        })).reduce(mapCollector, {});