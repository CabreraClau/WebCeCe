import React from "react"

export function TarjetaDeporte({ juego }) {
    return (
      <div className="tarjeta">
        <h3>{juego.title}</h3>
        <p>{juego.description}</p>
        {/*aca podria agregar las otras propiedades del juego, pero no lo quise ahcer porque es la idea de ver los detalles, quiero dejarlo en claro nada mas*/ }
        
      </div>
    );
  }
  
 