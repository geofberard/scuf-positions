import {ResourceKey} from "../resources/ResourceKey";
import {i18n} from "../resources/label-utils";

export const EPlayerRole = {
    SETTER: {
        id: "ROLE_SETTER",
        label: i18n(ResourceKey.ROLE_SETTER),
        highlight: "#283593",
        understate: "#9fa8da",
    },
    OPPOSITE: {
        id: "ROLE_OPPOSITE",
        label: i18n(ResourceKey.ROLE_OPPOSITE),
        highlight: "#6a1b9a",
        understate: "#ce93d8",
    },
    OUTSIDE_A: {
        id: "ROLE_OUTSIDE_A",
        label: i18n(ResourceKey.ROLE_OUTSIDE_A),
        highlight: "#c62828",
        understate: "#ef9a9a",
    },
    OUTSIDE_B: {
        id: "ROLE_OUTSIDE_B",
        label: i18n(ResourceKey.ROLE_OUTSIDE_B),
        highlight: "#c62828",
        understate: "#ef9a9a",
    },
    MIDDLE_A: {
        id: "ROLE_MIDDLE_A",
        label: i18n(ResourceKey.ROLE_MIDDLE_A),
        highlight: "#2e7d32",
        understate: "#a5d6a7",
    },
    MIDDLE_B: {
        id: "ROLE_MIDDLE_B",
        label: i18n(ResourceKey.ROLE_MIDDLE_B),
        highlight: "#2e7d32",
        understate: "#a5d6a7",
    },
    LIBERO: {
        id: "ROLE_LIBERO",
        label: i18n(ResourceKey.ROLE_LIBERO),
        highlight: "#ef6c00",
        understate: "#ffcc80",
    }
};

export const EPlayerRoles = Object.values(EPlayerRole);