import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);

  // Genérico / básico
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        "id": 7,
        "email": "carlita.contreras@reqres.in",
        "first_name": "Carlita",
        "last_name": "Contreras"
      },
      {
        "id": 8,
        "email": "isabel.saez@reqres.in",
        "first_name": "Isabel",
        "last_name": "Sáez"
      },
      {
        "id": 9,
        "email": "alejandro.saez@reqres.in",
        "first_name": "Alejandro",
        "last_name": "Sáez"
      }
    ])
  }

  useEffect(() => {
    getUsuariosEstaticos();
  }, [])

  return (
    <div>
      <h2>Listado de usuarios vía Ajax</h2>
      <ol className='usuarios'>
        {
          usuarios.map(usuario => {
            console.log(usuario);
            return <li key={usuario.id}>{usuario.first_name}{usuario.last_name}</li>
          })
        }
      </ol>

    </div>
  )
}
