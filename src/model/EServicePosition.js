import {ResourceKey} from "../resources/ResourceKey";
import {i18n} from "../resources/label-utils";

export const EServicePosition = {
    P1: {id:"P1",label:i18n(ResourceKey.SP_P1)},
    P6: {id:"P6",label:i18n(ResourceKey.SP_P6)},
    P5: {id:"P5",label:i18n(ResourceKey.SP_P5)},
    P4: {id:"P4",label:i18n(ResourceKey.SP_P4)},
    P3: {id:"P3",label:i18n(ResourceKey.SP_P3)},
    P2: {id:"P2",label:i18n(ResourceKey.SP_P2)},
};

export const EServicePositions = Object.values(EServicePosition);