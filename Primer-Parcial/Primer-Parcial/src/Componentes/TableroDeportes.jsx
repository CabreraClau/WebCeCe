import React from "react";
import { ListaTarjetasDeportes } from "./ListaTarjetaDeportes";
import { AgregarTarjetaDeporte } from "./AgregarTarjetaDeporte";


export default function TableroDeportes({ juegos, refetchJuegos }) {
    return (
      <div className="TableroDeportes">
        <ListaTarjetasDeportes juegos={juegos} />
        <AgregarTarjetaDeporte refetchJuegos={refetchJuegos} />
      </div>
    );
  }