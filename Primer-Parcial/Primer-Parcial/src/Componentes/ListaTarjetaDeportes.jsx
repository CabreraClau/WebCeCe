import React from "react";
import { TarjetaDeporte } from "./TarjetDeporte";
import { Link } from "react-router-dom"; 


export function ListaTarjetasDeportes({ juegos }) {
    return (
      <div className="ListaTarjetasDeportes">
        <ul>
                {juegos.map((juego) => (
                    <li key={juego.id}>
                         <Link to={`/deporte/${juego.id}`}>Ver detalles</Link>
                         <TarjetaDeporte juego={juego} />
                    </li>
                ))}
            </ul>
      </div>
    );
  }
  
