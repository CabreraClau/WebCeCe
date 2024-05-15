  import React from 'react'
  import './App.css'
  import { ListaTarjetasDeportes } from './Componentes/ListaTarjetaDeportes'
  import { useFetchJuegos } from './Componentes/UseFetchJuegos'
  import { AgregarTarjetaDeporte } from './Componentes/AgregarTarjetaDeporte'
  import DeporteDetalle from './Componentes/DeporteDetalles'
  import TableroDeportes from './Componentes/TableroDeportes'
  import { BrowserRouter, Routes, Route } from "react-router-dom";



{/*Quiero aclarar que si van aprtar "ver detalles" se va a cerrar o romper el proyecto, para que no pase eso lo pueden abrir en una pestaña nueva,
  el post y el get andan bien, no pude terminar lo de las rutas. */}



  export function App() {
    const { loading, error, juegos, refetchJuegos } = useFetchJuegos(); 
    if (loading) {
      return <div>Cargando...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableroDeportes juegos={juegos} refetchJuegos={refetchJuegos} />} />
        <Route path="/deporte/:id" element={<DeporteDetalle juegos={juegos} />} />
      </Routes>
    </BrowserRouter>
    
  );
  }
