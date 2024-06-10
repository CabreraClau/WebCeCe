import React from "react";
import { ListaTareas } from "../ListasTareas/ListaTareas";


export default function TableroTareas({ tareasToDo, tareasDoing, tareasDone }) {
    return (
      <div className="contenedor-tarjetas">
        <div className="tarjeta">
          <h2>To Do</h2>
          <ListaTareas tareas={tareasToDo} />
        </div>
  
        <div className="tarjeta">
          <h2>Doing</h2>
          <ListaTareas tareas={tareasDoing} />
        </div>
  
        <div className="tarjeta">
          <h2>Done</h2>
          <ListaTareas tareas={tareasDone} />
        </div>
      </div>
    );
  }

