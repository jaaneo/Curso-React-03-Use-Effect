import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");

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

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then(respuesta => respuesta.json())
      .then(
        resultado_final => {
          setUsuarios(resultado_final.data)
          console.log(usuarios)
        },
        error => {
          console.log(error)
        }
      )
  }

  const getUsuariosAjaxAW = () => {

    setTimeout(async () => {
      try {
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await peticion.json()

        setUsuarios(data);
        setCargando(false);
      } catch (error) {
        console.log("Hola ",error)
        setErrores(error.message)
      }
    }, 4000);
  }

  useEffect(() => {
    //getUsuariosEstaticos();
    //getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  }, []);


  if(errores !== ""){
    //Cuando pasa algún error
    return (
      <div className='errores'>
        {errores}
      </div>
    );
    } else if ( cargando === true ) {
    //Cuando esta todo cargando
    return (
      <div className='cargando'>
        Cargando datos...
      </div>
    );
  } else if (cargando === false && errores === ""){
    // Cuando todo ha ido bien
    return (
      <div>
        <h2>Listado de usuarios vía Ajax</h2>
        <ul className='usuarios'>
          {
            usuarios.map(usuario => {
              return <li key={usuario.id}>
                <img src={usuario.avatar} alt="" className='avatar' />
                &nbsp;
                {usuario.first_name} {usuario.last_name}</li>
            })
          }
        </ul>

      </div>
    )
  }
}
