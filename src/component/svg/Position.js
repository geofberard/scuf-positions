import React from "react";
import Court from "./CourtSVG";
import Player from "./PlayerSVG";
import {EPlayerRole, EPlayerRoles} from "../../model/EPlayerRole";

export const MAX_SIZE = 1100;

const OUTSIDE = {px: 120, py: 70};

const Position = ({positions, focus}) => (
    <svg viewBox={`0 0 ${MAX_SIZE} ${MAX_SIZE - 50}`}>
        <Court>
            {EPlayerRoles
                .map(role => <Player key={role.id}
                                     role={role}
                                     position={positions[role.id] || OUTSIDE}
                                     focus={focus === undefined || focus === role}/>)}
        </Court>
    </svg>
);

Position.defaultProps = {
    positions: {
        [EPlayerRole.SETTER.id]: {px: 80, py: 70},
        [EPlayerRole.OUTSIDE_A.id]: {px: 80, py: 20},
        [EPlayerRole.MIDDLE_A.id]: {px: 50, py: 20},
        [EPlayerRole.OPPOSITE.id]: {px: 20, py: 20},
        [EPlayerRole.OUTSIDE_B.id]: {px: 20, py: 70},
        [EPlayerRole.MIDDLE_B.id]: {px: 50, py: 70},
    },
};

export default Position;