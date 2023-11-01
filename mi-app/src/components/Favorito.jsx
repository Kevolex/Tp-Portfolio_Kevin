import React from 'react'
import './Home.css'
import { useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import { CreacionesContext } from "../Context/CreacionesContext"

const Favoritos = (props) => {
    const { creaciones} = useContext(CreacionesContext)
    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    const estaEnFavoritos = favoritos.some((element) => element.id === props.id)

    console.log(favoritos)
    const accionBoton = async () => {
        if (estaEnFavoritos) {
            const indice = favoritos.findIndex((element) => (element.id) === props.id)
            console.log(indice)
            const nuev = [...favoritos]
            nuev.splice(indice, 1)
            setFavoritos(nuev)
        }
        else{
            setFavoritos((favoritos) => [...favoritos, creaciones[props.id - 1]])
        }
    }
    


      const buttonClass = estaEnFavoritos ? 'btn btn-danger' : 'btn btn-success';

    return (
        <div>
            <button className={buttonClass} onClick={accionBoton} style={{padding: 5, marginTop: 20}}>{estaEnFavoritos ? 'Eliminar de favs' : 'Agregar a favs'}</button>
        </div>
    )
}

export default Favoritos