import {ResourceKey} from "./ResourceKey";
import {init} from "./label-utils";

init({
    [ResourceKey.TITLE]: "SCUF - Positions",

    [ResourceKey.POSITIONS]: "Positions",
    [ResourceKey.P_SERVICE]: "Service",
    [ResourceKey.P_ATTACK]: "Attaque",
    [ResourceKey.P_DEFENSE]: "Défense",

    [ResourceKey.ATTACK_ACTION]: "Attaque",
    [ResourceKey.A_ORIGINAL]: "Position",
    [ResourceKey.A_OUTSIDE]: "Latérale",
    [ResourceKey.A_MIDDLE]: "Centrale",
    [ResourceKey.A_OPPOSITE]: "Opposée",

    [ResourceKey.DEFENSE_ACTION]: "Défense",
    [ResourceKey.D_ORIGINAL]: "Position",
    [ResourceKey.D_RELANCE]: "Relance",
    [ResourceKey.D_OUTSIDE]: "Latérale",
    [ResourceKey.D_MIDDLE]: "Centrale",
    [ResourceKey.D_OPPOSITE]: "Opposée",

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

    [ResourceKey.LIBERO_WITH]: "Avec libéro",
    [ResourceKey.LIBERO_WITHOUT]: "Sans libéro",
});

if(window.location.search.includes('?l=geek')) {
    init({
        [ResourceKey.TITLE]: "CHKUF - Posichions",

        [ResourceKey.POSITIONS]: "Posichions",
        [ResourceKey.P_SERVICE]: "Cherviche",
        [ResourceKey.P_ATTACK]: "Smash",
        [ResourceKey.P_DEFENSE]: "Défenche",

        [ResourceKey.ATTACK_ACTION]: "Smash",
        [ResourceKey.A_ORIGINAL]: "Posichion",
        [ResourceKey.A_OUTSIDE]: "Smach Latérale",
        [ResourceKey.A_MIDDLE]: "Smach Chentrale",
        [ResourceKey.A_OPPOSITE]: "Smach Oppochée",

        [ResourceKey.DEFENSE_ACTION]: "Défenche",
        [ResourceKey.D_ORIGINAL]: "Posichion",
        [ResourceKey.D_RELANCE]: "Relanche",
        [ResourceKey.D_MIDDLE]: "Chentrale",
        [ResourceKey.D_OPPOSITE]: "Oppochée",

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

        [ResourceKey.LIBERO_WITHOUT]: "Chans libéro",
    });
}