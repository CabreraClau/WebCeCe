import React from "react";
import { useState } from "react";
import { Tarea } from "../Tarea/Tarea";
import { useEffect } from "react";




export function AgregarTarea({ refetchTareas }) {
    const [nombre, setNombre] = useState("");
    const [status, setStatus] = useState("");
  
    const agregarTarea = async () => {
      if (nombre && status) {
        try {
          const response = await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              
              title: nombre,
              status: status,
            }),
          });
  
          if (!response.ok) {
            throw new Error("Error al agregar la tarea");
          }
  
          // Actualizar la lista de tareas después de agregar una nueva tarea
          refetchTareas();
  
          // Limpiar los campos después de agregar la tarea
          setNombre("");
          setStatus("");
        } catch (error) {
          alert("Error al agregar la tarea: " + error.message);
        }
      } else {
        alert("Tienes que darle un nombre y un estado a la tarea");
      }
    };
  
    return (
      <section className="ListarTareas">
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Nada">Nada</option>
            <option value="To Do">To Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
  
        <button onClick={agregarTarea}>Agregar tarea</button>
      </section>
    );
  }
