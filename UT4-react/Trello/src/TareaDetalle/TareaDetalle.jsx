import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tarea } from "../Tarea/Tarea";
import { useFetchTareas } from "../UseFetchTareas/UseFetchTareas";


export default function TareaDetalle() {
    const { id } = useParams();
    const { loading, error, tareas } = useFetchTareas(); 
  
    
    const tarea = tareas.find(tarea => tarea.id === id);
  
    if (loading) {
      return <div>Cargando detalles de la tarea...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!tarea) {
      return <div>No se encontró la tarea</div>;
    }
  
    return (
      <div>
        <h1>Detalles de la tarea {tarea.id}</h1>
        <p>Titulo: {tarea.title}</p>
        <p>Descripción: {tarea.description}</p>
        <p>Asignado a: {tarea.assignedTo}</p>
        <p>Fecha de inicio: {tarea.startDate}</p>
        <p>Fecha de fin: {tarea.endDate}</p>
        <p>Estado: {tarea.status}</p>
        <p>Prioridad: {tarea.priority}</p>
        
      </div>
    );
  }