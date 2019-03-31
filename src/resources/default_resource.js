import {ResourceKey} from "./ResourceKey";
import {init} from "./label-utils";

init({
    [ResourceKey.TITLE]: "SCUF - Positions",

    [ResourceKey.POSITIONS]: "Positions",
    [ResourceKey.P_SERVICE_POSITIONS_DEFAULT]: "Service - standard",
    [ResourceKey.P_SERVICE_POSITIONS_LIBERO]: "Service - libéro",
    [ResourceKey.P_GAME_POSITIONS_DEFAULT]: "Jeu - standard",
    [ResourceKey.P_GAME_POSITIONS_LIBERO]: "Jeu - libéro",

    [ResourceKey.GAME_ACTION]: "Action",
    [ResourceKey.GA_ORIGINAL]: "Position",
    [ResourceKey.GA_RELANCE]: "Relance",
    [ResourceKey.GA_ATTACK_OUTSIDE]: "Attaque Latérale",
    [ResourceKey.GA_ATTACK_MIDDLE]: "Attaque Centrale",
    [ResourceKey.GA_ATTACK_OPPOSITE]: "Attaque Opposée",
    [ResourceKey.GA_DEFENSE_OUTSIDE]: "Défense Latérale",
    [ResourceKey.GA_DEFENSE_MIDDLE]: "Défense Centrale",
    [ResourceKey.GA_DEFENSE_OPPOSITE]: "Défense Opposée",

    [ResourceKey.GAME_POSITION]: "Passe",
    [ResourceKey.GP_FRONT]: "Avant",
    [ResourceKey.GP_BACK]: "Arrière",

    [ResourceKey.ROLE]: "Rôle",
    [ResourceKey.ROLE_SETTER]: "Passe",
    [ResourceKey.ROLE_OPPOSITE]: "Pointe",
    [ResourceKey.ROLE_OUTSIDE_A]: "Latéral A",
    [ResourceKey.ROLE_OUTSIDE_B]: "Latéral B",
    [ResourceKey.ROLE_MIDDLE_A]: "Central A",
    [ResourceKey.ROLE_MIDDLE_B]: "Central B",
    [ResourceKey.ROLE_LIBERO]: "Libero",
    
    [ResourceKey.SERVICE_ACTION]: "Action",
    [ResourceKey.SA_ORIGINAL]: "Standard",
    [ResourceKey.SA_SERVING]: "Service",
    [ResourceKey.SA_RECEIVING]: "Réception",

    [ResourceKey.SERVICE_POSITION]: "Position",
    [ResourceKey.SP_P1]: "P1",
    [ResourceKey.SP_P6]: "P6",
    [ResourceKey.SP_P5]: "P5",
    [ResourceKey.SP_P4]: "P4",
    [ResourceKey.SP_P3]: "P3",
    [ResourceKey.SP_P2]: "P2",

    [ResourceKey.LEGENDE]: "Legende",
    [ResourceKey.DOWNLOAD]: "Télécharger le PDF",
});

if(window.location.search.includes('?l=geek')) {
    init({
        [ResourceKey.TITLE]: "CHKUF - Posichions",

        [ResourceKey.POSITIONS]: "Posichions",
        [ResourceKey.P_SERVICE_POSITIONS_DEFAULT]: "Cherviche - chtandard",
        [ResourceKey.P_SERVICE_POSITIONS_LIBERO]: "Cherviche - libéro",
        [ResourceKey.P_GAME_POSITIONS_DEFAULT]: "Jeu - chtandard",

        [ResourceKey.GAME_ACTION]: "Akchion",
        [ResourceKey.GA_ORIGINAL]: "Posichion",
        [ResourceKey.GA_RELANCE]: "Relanche",
        [ResourceKey.GA_ATTACK_OUTSIDE]: "Attaque Latérale",
        [ResourceKey.GA_ATTACK_MIDDLE]: "Attaque Chentrale",
        [ResourceKey.GA_ATTACK_OPPOSITE]: "Attaque Oppochée",
        [ResourceKey.GA_DEFENSE_OUTSIDE]: "Défenche Latérale",
        [ResourceKey.GA_DEFENSE_MIDDLE]: "Défenche Chentrale",
        [ResourceKey.GA_DEFENSE_OPPOSITE]: "Défenche Oppochée",

        [ResourceKey.GAME_POSITION]: "Pache",

        [ResourceKey.ROLE_SETTER]: "Pache",
        [ResourceKey.ROLE_MIDDLE_A]: "Chentral A",
        [ResourceKey.ROLE_MIDDLE_B]: "Chentral B",

        [ResourceKey.SERVICE_ACTION]: "Akchion",
        [ResourceKey.SA_ORIGINAL]: "Chtandard",
        [ResourceKey.SA_SERVING]: "Chervice",
        [ResourceKey.SA_RECEIVING]: "Récheption",

        [ResourceKey.SERVICE_POSITION]: "Posichion",

        [ResourceKey.LEGENDE]: "Lechende",
        [ResourceKey.DOWNLOAD]: "Télécharcher le PDF",
    });
}