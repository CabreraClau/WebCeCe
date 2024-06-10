  import React, { useState } from "react";
  import './App.css'
  import { ListaTareas } from "./ListasTareas/ListaTareas";
  import { useFetchTareas } from "./UseFetchTareas/UseFetchTareas";
  import { AgregarTarea } from "./AgregarDeporte/AgregarTarea";
  import TareaDetalle from "./TareaDetalle/TareaDetalle";
  import TableroTareas from "./Tablerotareas/TableroTareas";
  import { BrowserRouter, Routes, Route } from "react-router-dom";

  export function App() {
  const { loading, error, tareas, refetchTareas } = useFetchTareas(); // Usa el hook useFetchTareas

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  

  // Filtra las tareas por estado
  const tareasToDo = tareas.filter((tarea) => tarea.status === "To Do");
  const tareasDoing = tareas.filter((tarea) => tarea.status === "Doing");
  const tareasDone = tareas.filter((tarea) => tarea.status === "Done");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TableroTareas tareasToDo={tareasToDo} tareasDoing={tareasDoing} tareasDone={tareasDone} />} path="/" />
        <Route element={<TareaDetalle tareas={tareas} />} path="/tareas/:id" />
      </Routes>
      <AgregarTarea refetchTareas={refetchTareas} />
    </BrowserRouter>
    {/*Quiero aclarar que si van aprtar "ver detalles" se va a cerrar o romper el proyceto, para que no pase eso lo pueden abrir en una pestaña nueva,
  el post y el get andan bien, no pude terminar lo de las rutas. */}
  );
}