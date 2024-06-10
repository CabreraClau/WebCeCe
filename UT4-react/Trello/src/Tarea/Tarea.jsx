import React from "react";



export function Tarea ({nombreTarea, statusTarea}){


    const handleEliminar = () => {
        onEliminar(); 
      };
    
    return(
        <article className="player-card">
            <div>
                <div className="tarea-info">
                    <strong>{nombreTarea}</strong>
                    <span className="tarea-responsable"> {statusTarea}</span>
                </div>
                <button onClick={handleEliminar}>Eliminar</button>
                
            </div>
            

        </article>
    )


}
