import {ResourceKey} from "../resources/ResourceKey";
import {i18n} from "../resources/label-utils";

export const EServiceAction = {
    ORIGINAL: {id: "GA_ORIGINAL", label: i18n(ResourceKey.SA_ORIGINAL)},
    SERVING: {id: "SA_SERVING", label: i18n(ResourceKey.SA_SERVING)},
    RECEIVING: {id: "SA_RECEIVING", label: i18n(ResourceKey.SA_RECEIVING)},
};

export const EServiceActions = Object.values(EServiceAction);