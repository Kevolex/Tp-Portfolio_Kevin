import './Home.css'
import React from 'react'
import { useState, useEffect, useContext } from 'react';
import Titulo from './Titulo'
import Favorito from './Favorito'
import { CreacionesContext } from "../Context/CreacionesContext"

const Home = (props) => {
    const { creaciones, setCreaciones  } = useContext(CreacionesContext)

  return (
    <div className='bottom'>
        <section>
            <Titulo/>
        </section>
        {creaciones.slice(0, 6).map((creaciones) => 
            <section className='creacion' key={creaciones.id}>
                <div className='contieneC'>
                    <p>Mi proyecto N° {creaciones.id}</p>
                    <h2 className='creacionProyecto'><b>{creaciones.nombre}</b></h2>
                    <p>{creaciones.descripcion}</p>
                    <p>Lenguaje/s usado/s: {creaciones.leguaje}</p>
                    <p>{creaciones.fecha}</p>
                    <a  style={{ textDecoration: 'none', color: 'white'}} href={creaciones.respositorio} target="_blank" rel="noopener noreferrer">{creaciones.respositorio}</a>
                    <Favorito id={creaciones.id}/>
                </div>
            </section>
        )}
    </div>
  )
}

export default Home