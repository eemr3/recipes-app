import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import CardFavorites from './components/CardFavorites';
import GroupButtonFavorite from './components/GroupButtonFavorite';
import GlobalContext from '../../context/GlobalContext';

export default function FavoriteRecipes() {
  const { favoriteStorage, setFavoriteStorage } = useContext(GlobalContext);

  useEffect(() => {
    setFavoriteStorage(JSON.parse(localStorage.getItem('favoriteRecipes')) || []);
  }, [setFavoriteStorage]);
  console.log(favoriteStorage);

  return (
    <div>
      <Header title="Comidas Favoritas" />
      <GroupButtonFavorite />
      { favoriteStorage.length > 0 && (
        favoriteStorage.map(({ category, image, name, nationality, id }, index) => (
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
