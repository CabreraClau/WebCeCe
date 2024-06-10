import { useEffect, useState } from 'react';



export function useFetchTareas() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tareas, setTareas] = useState([]);
  
    const refetchTareas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/tasks');
        if (!response.ok) {
          throw new Error('Error al obtener las tareas');
        }
        const data = await response.json();
        setTareas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      refetchTareas(); // Llama a refetchTareas cuando el componente se monta o actualiza
    }, []);
  
    return { loading, error, tareas, refetchTareas };
  }