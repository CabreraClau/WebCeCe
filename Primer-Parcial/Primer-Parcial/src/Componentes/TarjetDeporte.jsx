import React from "react"

export function TarjetaDeporte({ juego }) {
  const handleEliminar = () => {
    onEliminar(); 
  };
    return (
      <div className="tarjeta">
        <h3>{juego.title}</h3>
        <p>{juego.description}</p>
        <button onClick={handleEliminar}>Eliminar</button>
        {/*aca podria agregar las otras propiedades del juego, pero no lo quise ahcer porque es la idea de ver los detalles, quiero dejarlo en claro nada mas*/ }
        
      </div>
    );
  }
  
 