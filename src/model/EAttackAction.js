import {ResourceKey} from "../resources/ResourceKey";
import {i18n} from "../resources/label-utils";

export const EAttackAction = {
    ORIGINAL: {id: "ORIGINAL", label: i18n(ResourceKey.A_ORIGINAL)},
    OUTSIDE: {id: "OUTSIDE", label: i18n(ResourceKey.A_OUTSIDE)},
    MIDDLE: {id: "MIDDLE", label: i18n(ResourceKey.A_MIDDLE)},
    OPPOSITE: {id: "OPPOSITE", label: i18n(ResourceKey.A_OPPOSITE)},
};

export const EAttackActions = Object.values(EAttackAction);