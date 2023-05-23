import React, { useEffect, useState } from 'react'

export const PruebasComponent = () => {
  
  const [usuario, setUsuario] = useState("Alejandro Sáez")
  const [fecha, setFecha] = useState("01-01-1999, 00:00:01")
  
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
    console.log("Has modificado el usuario !!")
  }, [usuario])

  // Se ejecuta solo al cambiar la fecha
  useEffect(() => {
    console.log("Has modificado la fecha !!")
  }, [fecha])

  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>
      
      <strong className='label'>{usuario}</strong>
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
      
      
    </div>
  )
}
