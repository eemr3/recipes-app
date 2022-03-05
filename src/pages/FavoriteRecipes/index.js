import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import CardFavorites from './components/CardFavorites';
import GroupButtonFavorite from './components/GroupButtonFavorite';

export default function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavorites(storage);
  }, []);

  return (
    <div>
      <Header title="Comidas Favoritas" />
      <GroupButtonFavorite />
      { favorites.length > 0 && (
        favorites.map(({ category, image, name, nationality }, index) => (
          <CardFavorites
            key={ index }
            category={ category }
            image={ image }
            name={ name }
            nationality={ nationality }
          />))
      ) }
    </div>
  );
}
