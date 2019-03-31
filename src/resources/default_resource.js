import {ResourceKey} from "./ResourceKey";
import {init} from "./label-utils";

init({
    [ResourceKey.SERVICE_POSITIONS_DEFAULT]: "Service - standard",
    [ResourceKey.SERVICE_POSITIONS_LIBERO]: "Service - libéro",
    [ResourceKey.GAME_POSITIONS_DEFAULT]: "Jeu - standard",
    [ResourceKey.GAME_POSITIONS_LIBERO]: "Jeu - libéro",

    [ResourceKey.GAME_ACTION]: "",
    [ResourceKey.GA_ORIGINAL]: "Position",
    [ResourceKey.GA_RELANCE]: "Relance",
    [ResourceKey.GA_ATTACK_OUTSIDE]: "Attaque Latérale",
    [ResourceKey.GA_ATTACK_MIDDLE]: "Attaque Centrale",
    [ResourceKey.GA_ATTACK_OPPOSITE]: "Attaque Opposée",
    [ResourceKey.GA_DEFENSE_OUTSIDE]: "Défense Latérale",
    [ResourceKey.GA_DEFENSE_MIDDLE]: "Défense Centrale",
    [ResourceKey.GA_DEFENSE_OPPOSITE]: "Défense Opposée",

    [ResourceKey.GAME_POSITION]: "",
    [ResourceKey.GP_FRONT]: "Avant",
    [ResourceKey.GP_BACK]: "Arrière",

    [ResourceKey.ROLE]: "",
    [ResourceKey.ROLE_SETTER]: "Passe",
    [ResourceKey.ROLE_OPPOSITE]: "Pointe",
    [ResourceKey.ROLE_OUTSIDE_A]: "Latéral A",
    [ResourceKey.ROLE_OUTSIDE_B]: "Latéral B",
    [ResourceKey.ROLE_MIDDLE_A]: "Central A",
    [ResourceKey.ROLE_MIDDLE_B]: "Central B",
    [ResourceKey.ROLE_LIBERO]: "Libero",
    
    [ResourceKey.SERVICE_ACTION]: "",
    [ResourceKey.SA_ORIGINAL]: "Standard",
    [ResourceKey.SA_SERVING]: "Service",
    [ResourceKey.SA_RECEIVING]: "Réception",

    [ResourceKey.SERVICE_POSITION]: "",
    [ResourceKey.SP_P1]: "SP_P1",
    [ResourceKey.SP_P6]: "SP_P6",
    [ResourceKey.SP_P5]: "SP_P5",
    [ResourceKey.SP_P4]: "SP_P4",
    [ResourceKey.SP_P3]: "SP_P3",
    [ResourceKey.SP_P2]: "SP_P2",

});