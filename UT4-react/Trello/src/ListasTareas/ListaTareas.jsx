import React from "react";
import { Tarea } from "../Tarea/Tarea";
import { Link } from "react-router-dom"; 

export function ListaTareas({ titulo, tareas }) {
    return (
        <div className="lista-container">
            <h2>{titulo}</h2>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                         <Link to={`/tareas/${tarea.id}`}>Ver detalles</Link>
                        <Tarea nombreTarea={tarea.title} />

                    </li>
                ))}
            </ul>
        </div>
    );
}
