import { useEffect, useState } from 'react';



export function useFetchJuegos() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [juegos, setJuegos] = useState([]);

  const refetchJuegos = async () => {
      try {
          const response = await fetch('http://localhost:3000/api/games');
          if (!response.ok) {
              throw new Error('Error al obtener los juegos');
          }
          const data = await response.json();
          setJuegos(data);
      } catch (error) {
          setError(error.message);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      refetchJuegos(); // Llama a refetchJuegos cuando el componente se monta o actualiza
  }, []);

  return { loading, error, juegos, refetchJuegos };
}