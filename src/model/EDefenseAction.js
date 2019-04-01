import {ResourceKey} from "../resources/ResourceKey";
import {i18n} from "../resources/label-utils";

export const EDefenseAction = {
    ORIGINAL: {id: "ORIGINAL", label: i18n(ResourceKey.D_ORIGINAL)},
    RELANCE: {id: "RELANCE", label: i18n(ResourceKey.D_RELANCE)},
    OUTSIDE: {id: "OUTSIDE", label: i18n(ResourceKey.D_OUTSIDE)},
    MIDDLE: {id: "MIDDLE", label: i18n(ResourceKey.D_MIDDLE)},
    OPPOSITE: {id: "OPPOSITE", label: i18n(ResourceKey.D_OPPOSITE)},
};

export const EDefenseActions = Object.values(EDefenseAction);