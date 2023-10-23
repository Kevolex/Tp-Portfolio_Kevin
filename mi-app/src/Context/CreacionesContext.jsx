import React from 'react';

export const CreacionesContext = React.createContext();

const CreacionesProvider = (props) => {
    const [creaciones, setCreaciones] = React.useState([{
        id: 1,
        nombre: 'Mi Portfolio',
        descripcion: 'Esta hermosa pagina¿¿',
        leguaje: 'JS, CSS',
        fecha: 'Fines de 2023',
        respositorio: 'https://github.com/Kevolex/Tp-Portfolio_Kevin.git',
        imagen: null
      },
      {
        id: 2,
        nombre: 'Listado de citas',
        descripcion: 'Una pagina que consta de sacar turno para nuestra mascota, en caso de tener que ir al veterinario.',
        leguaje: 'JS, CSS',
        fecha: 'Mayo 2023',
        respositorio: 'https://github.com/jditzco/TP5citas-Itzco-Kevojs.git',
        imagen: null
      },
      {
        id: 3,
        nombre: 'React Native Challenge',
        descripcion: 'Este fue un desafio propuesto en DAI, una de mis materias, esta consistia en hacer una app que tenía que tener un login, una pantalla prinicpal con distintas resetas porporcionadas por una API y un buscador de estas recetas.',
        leguaje: 'JS, CSS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/Kevolex/RN-Challenge.git',
        imagen: null
      },
      {
        id: 4,
        nombre: 'Flags Handling',
        descripcion: 'Un juego en el cual tenes que adivinar la bandera',
        leguaje: 'JS, CSS',
        fecha: 'Julio 2023',
        respositorio: 'https://github.com/Kevolex/TP-6-Flags.git',
        imagen: null
      },
      {
        id: 5,
        nombre: 'Buscador de Personajes',
        descripcion: 'Un buscador en el cual podes buscar diversos personajes de disney y a que peliculas o series pertenecen.',
        leguaje: 'JS, CSS',
        fecha: 'Abril 2023',
        respositorio: 'https://github.com/Kevolex/TPpersj.git',
        imagen: null
      },
      {
        id: 6,
        nombre: 'Lista de Tareas',
        descripcion: 'Una pagina donde uno puede crear, borrar o modificar sus tareas pendientes.',
        leguaje: 'HTML',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/Kevolex/TP2-efsi.git',
        imagen: null
      },
      {
        id: 7,
        nombre: 'Cambio Climatico',
        descripcion: 'Un trabajo que constaba de hacer una pagina relacionada y que ayudara al cambio climatico, en este caso, una app de donaciones.',
        leguaje: 'JS, CSS',
        fecha: 'Septiembre 2023',
        respositorio: 'https://github.com/juancruz922/TpEfsiCambioClimatico.git',
        imagen: null
      },
      {
        id: 8,
        nombre: 'Backend de mi Proyecto Final',
        descripcion: 'Todo lo que va detras de mi proyecto final.',
        leguaje: 'JS, SQL',
        fecha: 'Fines de 2023',
        respositorio: 'https://github.com/AgustinSirotinsky/StudentBites_Backend.git',
        imagen: null
      },
      {
        id: 9,
        nombre: 'Frontend de mi Proyecto Final',
        descripcion: 'Todo el material visual y UI de mi proyecto final.',
        leguaje: 'JS, CSS, HTML',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/AgustinSirotinsky/StudentBites_Frontend.git',
        imagen: null
      },
      {
        id: 10,
        nombre: 'Lista de Tareas en React Native',
        descripcion: 'La misma lista de tareas usada antes pero esta vez en React Native',
        leguaje: 'JS, CSS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/Kevolex/RN-TaskList.git',
        imagen: null
      },
    ])

    return <CreacionesContext.Provider value={{creaciones, setCreaciones}}>{props.children}</CreacionesContext.Provider>
}

export default CreacionesProvider;