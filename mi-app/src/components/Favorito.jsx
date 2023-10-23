import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import { CreacionesContext } from "../Context/CreacionesContext"

const Favoritos = (props) => {
    const { creaciones, setCreaciones } = useContext(CreacionesContext)
    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const estaEnFavoritos = favoritos.some((element) => element.id === props.id)

    const accionBoton = async () => {
        console.log(props)
        if (estaEnFavoritos) {
            const indice = favoritos.findIndex((element) => (element.id) === props.id)
            console.log(indice)
            const nuev = [...favoritos]
            nuev.splice(indice, 1)
            setFavoritos(nuev)
        }
        else {
            setFavoritos((favoritos) => [...favoritos, creaciones[props.id - 1]])
            // localStorage.setItem('favoritos', JSON.stringify(favoritos))
        }
    }
    useEffect(()=>{
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
      }, [favoritos])

    return (
        <div>
            <button onClick={accionBoton}>{estaEnFavoritos ? 'Eliminar de favoritos' : 'Agregar a favoritos'}</button>
        </div>
    )
}

export default Favoritos