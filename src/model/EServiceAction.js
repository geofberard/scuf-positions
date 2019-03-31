import {ResourceKey} from "../resources/ResourceKey";
import {i18n} from "../resources/label-utils";

export const EServiceAction = {
    ORIGINAL: {id: "ORIGINAL", label: i18n(ResourceKey.SA_ORIGINAL)},
    SERVING: {id: "SERVING", label: i18n(ResourceKey.SA_SERVING)},
    RECEIVING: {id: "RECEIVING", label: i18n(ResourceKey.SA_RECEIVING)},
};

export const EServiceActions = Object.values(EServiceAction);