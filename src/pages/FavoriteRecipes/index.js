import React, { useEffect, useContext, useState } from 'react';
import Header from '../../components/Header';
import CardFavorites from './components/CardFavorites';
import GroupButtonFavorite from './components/GroupButtonFavorite';
import GlobalContext from '../../context/GlobalContext';

export default function FavoriteRecipes() {
  const { favoriteStorage, setFavoriteStorage } = useContext(GlobalContext);
  const [renderFavorites, setRenderFavorites] = useState([]);

  useEffect(() => {
    setFavoriteStorage(JSON.parse(localStorage.getItem('favoriteRecipes')) || []);
  }, [setFavoriteStorage]);

  useEffect(() => {
    setRenderFavorites(favoriteStorage);
  }, [favoriteStorage]);

  return (
    <div>
      <Header title="Comidas Favoritas" />
      <GroupButtonFavorite setRenderFavorites={ setRenderFavorites } />
      { renderFavorites.length > 0 && (
        renderFavorites.map(({ category, image, name, nationality, id }, index) => (
          <CardFavorites
            key={ index }
            category={ category }
            image={ image }
            name={ name }
            nationality={ nationality }
            id={ id }
          />))
      ) }
    </div>
  );
}
