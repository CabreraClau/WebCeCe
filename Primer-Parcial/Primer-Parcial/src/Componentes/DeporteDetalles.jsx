import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TarjetaDeporte } from "./TarjetDeporte";
import { useFetchJuegos } from "./UseFetchJuegos";
import { ListaTarjetasDeportes } from "./ListaTarjetaDeportes";



export default function DeporteDetalle() {
    const { id } = useParams();
    const { loading, error, deportes } = useFetchJuegos(); 
  
    
    const deporte = deportes.find(deporte => deporte.id === id);
  
    if (loading) {
      return <div>Cargando detalles de la deporte...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!deporte) {
      return <div>No se encontró la deporte</div>;
    }
  
    return (
      <div>
        <h1>Detalles de la deporte {deporte.id}</h1>
        <p>Titulo: {deporte.title}</p>
        <p>Descripción: {deporte.description}</p>
        <p>Jugadores: {deporte.players}</p>
        <p>Categorias: {deporte.categories}</p>
      </div>
    );
  }