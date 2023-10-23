import './Home.css'
import Favorito from './Favorito';
import React, { useState, useContext } from 'react';
import { CreacionesContext } from "../Context/CreacionesContext";

const MisCreaciones = (props) => {
  const { creaciones, setCreaciones } = useContext(CreacionesContext)
  const elementosPorPagina = 5
  const [paginaActual, setPaginaActual] = useState(1)

  const obtenerPosiciones = () => {
    const ultimoElemento = paginaActual * elementosPorPagina
    const primerElemento = ultimoElemento - elementosPorPagina
    return creaciones.slice(primerElemento, ultimoElemento)
  }

  const cambiarPagina = (siguientePag) => {
    setPaginaActual(siguientePag)
  }

  return (
    <div className='margengrande bottom'>
      <h1>Todos mis proyectos</h1>
      {obtenerPosiciones().map((creacion) => (
        <section className='creacion' key={creacion.id}>
          <p>{creacion.id}</p>
          <p>{creacion.nombre}</p>
          <p>{creacion.descripcion}</p>
          <p>{creacion.leguaje}</p>
          <p>{creacion.fecha}</p>
          <p>{creacion.respositorio}</p>
          <Favorito id={creaciones.id}/>
        </section>
      ))}

      <div className="paginacion">
        <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>Anterior</button>
        <span>Página {paginaActual}</span>
        <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual * elementosPorPagina >= creaciones.length}>Siguiente</button>
      </div>
    </div>
  )
}

export default MisCreaciones;
