import React from "react"
import { useState } from "react"



export function AgregarTarjetaDeporte ({ refetchJuegos }) {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
  
    const agregarJuego = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: titulo,
            description: descripcion
          }),
        });
  
        if (!response.ok) {
          throw new Error("Error al agregar el juego");
        }
  
        refetchJuegos();
        
        setTitulo("");
        setDescripcion("");
      } catch (error) {
        alert("Error al agregar el juego: " + error.message);
      }
    };
  
    return (
      <div className="conteinerDeAgregar">

      
      <section className="AgregarTarjetaDeporte">
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
  
        <button onClick={agregarJuego}>Agregar juego</button>
      </section>
      </div>
    );
  }