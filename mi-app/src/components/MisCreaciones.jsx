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
          <p>Mi proyecto N° {creacion.id}</p>
          <h2>{creacion.nombre}</h2>
          <p>{creacion.descripcion}</p>
          <p>Lenguaje/s usado/s: {creacion.leguaje}</p>
          <p>{creacion.fecha}</p>
          <a href={creacion.respositorio} style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
            {creacion.respositorio}
          </a>
          <Favorito id={creacion.id}/>
        </section>
      ))}

      <div className="paginacion">
        <button type="button" class="btn btn-light" onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>Anterior</button>
        <span>pag. {paginaActual}</span>
        <button type="button" class="btn btn-light" onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual * elementosPorPagina >= creaciones.length}>Siguiente</button>
      </div>
    </div>
  )
}

export default MisCreaciones;