import './Home.css'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import Favorito from './Favorito'

const Favoritos = (props) => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext)

  console.log('favoritos tiene: ', favoritos)

  return (
    <div className='margengrande bottom'>
      {favoritos.length > 1 ? (
        favoritos.map((favoritos) =>
          <section className='creacion' key={favoritos.id}>
            <p>{favoritos.id}</p>
            <p>{favoritos.nombre}</p>
            <p>{favoritos.descripcion}</p>
            <p>{favoritos.leguaje}</p>
            <p>{favoritos.fecha}</p>
            <p>{favoritos.respositorio}</p>
            <Favorito id={favoritos.id} />
          </section>
        )) : favoritos.length === 1 ? (
          <>
            <section className='creacion'>
              <h1>HOLA MUNDO</h1>
              <p>{favoritos[0].id}</p>
              <p>{favoritos[0].nombre}</p>
              <p>{favoritos[0].descripcion}</p>
              <p>{favoritos[0].leguaje}</p>
              <p>{favoritos[0].fecha}</p>
              <p>{favoritos[0].respositorio}</p>
              <Favorito id={favoritos[0].id} />
            </section>
          </>) : (
        <><h1>No hay elementos</h1></>
      )
      }
    </div>
  )
}

export default Favoritos