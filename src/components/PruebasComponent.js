import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent'

export const PruebasComponent = () => {
  
  const [usuario, setUsuario] = useState("Alejandro Sáez")
  const [fecha, setFecha] = useState("01-01-1999, 00:00:01")
  const [contador, setContador] = useState(0)
  
  const modUsuario = (e) => {

    let inputUser = e.target.value;
    setUsuario(inputUser);
  };

  const cambiarFecha = (e) => {
    //setFecha(new Date().toLocaleDateString());
    const fechaActual = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const fechaFormateada = `${fechaActual.toLocaleDateString('es-ES', options)}`;
    setFecha(fechaFormateada);
  }

  // con el 2do parametro, este useEffect solo se ejecuta una sola vez, solo al cargar el componente
  useEffect(() => {
    console.log("Has cargador el componente PruebasComponent !!")
  }, []) 

  // Se ejecuta solo al cambiar el nombre
  useEffect(() => {
    console.log("Has modificado el usuario: "+contador)
    setContador(contador+1)
  }, [usuario,fecha])

  // Se ejecuta solo al cambiar la fecha
  useEffect(() => {
  }, [fecha])

  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>
      
      <strong>{usuario}</strong>
      <strong className='label label-green'>{fecha}</strong>
      <p>
        <input
        type="text"
        onChange={e => modUsuario(e)}
        placeholder='Cambiar el nombre'
        />
        &nbsp;
        <button
          type="text"
          onClick={ cambiarFecha }
        >
          Actualizar fecha y hora
        </button>
      </p>
      
      { usuario === "ALEJANDRO" && <AvisoComponent />}
      
    </div>
  )
}
