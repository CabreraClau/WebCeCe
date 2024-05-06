import React, { useState } from 'react';
import './App.css';
import MyButton from "./components/MyButton";






export default function App() {
  const [contador, setContador] =  useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };
  return (
    <div id="root">
      <h1>Contador: {contador}</h1>
      <MyButton color="green" onClick={sumar}>Sumar</MyButton>
      <MyButton color="red" onClick={restar}>Restar</MyButton>
      <MyButton color="Azul" click={reiniciar}>Reiniciar</MyButton>
    </div>
  );
}
    


  
