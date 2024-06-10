import React from "react";
import { ListarJugadores } from "../ListarJugadores/ListarJugadores";

export function AltaJugadores ({playerName, playerPosition, playerProfile}){

    const perfilImgUrl = playerProfile;
    return(
        <article className="player-card">
            <header>
                <div className="player-info">
                    <strong>{playerName}</strong>
                    <span className="player-infoPlayerPosition"> {playerPosition}</span>
                </div>

            </header>

        </article>
    )


}
