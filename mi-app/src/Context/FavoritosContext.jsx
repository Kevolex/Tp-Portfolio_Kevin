import React from 'react';

export const FavoritosContext = React.createContext();

const FavoritosProvider = (props) => {
    const [favoritos, setFavoritos] = React.useState([]);

    return <FavoritosContext.Provider value={{favoritos, setFavoritos}}>{props.children}</FavoritosContext.Provider>
}

export default FavoritosProvider;