import {ResourceKey} from "../resources/ResourceKey";
import {i18n} from "../resources/label-utils";

export const EGameAction = {
    ORIGINAL: {id: "GA_ORIGINAL", label: i18n(ResourceKey.GA_ORIGINAL)},
    RELANCE: {id: "GA_RELANCE", label: i18n(ResourceKey.GA_RELANCE)},
    ATTACK_OUTSIDE: {id: "GA_ATTACK_OUTSIDE", label: i18n(ResourceKey.GA_ATTACK_OUTSIDE)},
    ATTACK_MIDDLE: {id: "GA_ATTACK_MIDDLE", label: i18n(ResourceKey.GA_ATTACK_MIDDLE)},
    ATTACK_OPPOSITE: {id: "GA_ATTACK_OPPOSITE", label: i18n(ResourceKey.GA_ATTACK_OPPOSITE)},
    DEFENSE_OUTSIDE: {id: "GA_DEFENSE_OUTSIDE", label: i18n(ResourceKey.GA_DEFENSE_OUTSIDE)},
    DEFENSE_MIDDLE: {id: "GA_DEFENSE_MIDDLE", label: i18n(ResourceKey.GA_DEFENSE_MIDDLE)},
    DEFENSE_OPPOSITE: {id: "GA_DEFENSE_OPPOSITE", label: i18n(ResourceKey.GA_DEFENSE_OPPOSITE)},
};

export const EGameActions = Object.values(EGameAction);