import './Home.css'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import Favorito from './Favorito'

const Favoritos = (props) => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext)

  console.log('tus favoritos: ', favoritos)

  return (
    <div className='margengrande bottom'>   
      <h1>Favoritos</h1>
      {favoritos.length > 0 ? (
        favoritos.map((favoritos) =>
        <section className='creacion' key={favoritos.id}>
        <p>Mi proyecto N° {favoritos.id}</p>
        <h2 className='creacionProyecto'><b>{favoritos.nombre}</b></h2>
        <p>{favoritos.descripcion}</p>
        <p>Lenguaje/s usado/s: {favoritos.leguaje}</p>
        <p>{favoritos.fecha}</p>
        <a  style={{ textDecoration: 'none', color: 'white'}} href={favoritos.respositorio} target="_blank" rel="noopener noreferrer">{favoritos.respositorio}</a>
        <Favorito id={favoritos.id}/>
    </section>
        )) : favoritos.length === 1 ? (
          <>
            <section className='creacion' key={favoritos.id}>
        <p>Mi proyecto N° {favoritos.id}</p>
        <h2 className='creacionProyecto'><b>{favoritos.nombre}</b></h2>
        <p>{favoritos.descripcion}</p>
        <p>Lenguaje/s usado/s: {favoritos.leguaje}</p>
        <p>{favoritos.fecha}</p>
        <a  style={{ textDecoration: 'none', color: 'white'}} href={favoritos.respositorio} target="_blank" rel="noopener noreferrer">{favoritos.respositorio}</a>
        <Favorito id={favoritos.id}/>
    </section>
          </>) : (
        <><h1>No hay elementos</h1></>
      )
      }
    </div>
  )
}

export default Favoritos