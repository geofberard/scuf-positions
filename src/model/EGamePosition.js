import {ResourceKey} from "../resources/ResourceKey";
import {i18n} from "../resources/label-utils";

export const EGamePosition = {
    FRONT: {id:"FRONT",label:i18n(ResourceKey.GP_FRONT)},
    BACK: {id:"BACK",label:i18n(ResourceKey.GP_BACK)},
};

export const EGamePositions = Object.values(EGamePosition);