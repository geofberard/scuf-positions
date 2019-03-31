import {ResourceKey} from "../resources/ResourceKey";
import {i18n} from "../resources/label-utils";

export const EGameAction = {
    ORIGINAL: {id: "ORIGINAL", label: i18n(ResourceKey.GA_ORIGINAL)},
    RELANCE: {id: "RELANCE", label: i18n(ResourceKey.GA_RELANCE)},
    ATTACK_OUTSIDE: {id: "ATTACK_OUTSIDE", label: i18n(ResourceKey.GA_ATTACK_OUTSIDE)},
    ATTACK_MIDDLE: {id: "ATTACK_MIDDLE", label: i18n(ResourceKey.GA_ATTACK_MIDDLE)},
    ATTACK_OPPOSITE: {id: "ATTACK_OPPOSITE", label: i18n(ResourceKey.GA_ATTACK_OPPOSITE)},
    DEFENSE_OUTSIDE: {id: "DEFENSE_OUTSIDE", label: i18n(ResourceKey.GA_DEFENSE_OUTSIDE)},
    DEFENSE_MIDDLE: {id: "DEFENSE_MIDDLE", label: i18n(ResourceKey.GA_DEFENSE_MIDDLE)},
    DEFENSE_OPPOSITE: {id: "DEFENSE_OPPOSITE", label: i18n(ResourceKey.GA_DEFENSE_OPPOSITE)},
};

export const EGameActions = Object.values(EGameAction);