import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import WhiteHeartIcons from '../../images/whiteHeartIcon.svg';
import OrangeHeartIcon from '../../images/blackHeartIcon.svg';
import setFavoriteRecipeInStorage from '../../functions/favoriteRecipes';
import setDataForInStorage from '../../functions/dataForSaveInStorage';
import GlobalContext from '../../context/GlobalContext';

function ButtonFavorite({ recipe, favoriteId, favorite }) {
  const { setFavoriteStorage, favoriteStorage } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const { id } = useParams();
  const [favoritIcon, setFavoritIcon] = useState(false);

  useEffect(() => {
    const validId = id || favoriteId;
    setFavoriteStorage(JSON.parse(localStorage.getItem('favoriteRecipes')) || []);
    setFavoritIcon(favoriteStorage.some((item) => item.id === validId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickFavorite = () => {
    const validId = id || favoriteId;
    console.log(validId);
    if (favoritIcon) {
      const dataForSaveInStorage = favoriteStorage
        .filter((item) => item.id !== validId);
      setFavoriteRecipeInStorage(dataForSaveInStorage);
      setFavoriteStorage(dataForSaveInStorage);
      if (!favorite) setFavoritIcon(false);
    } else {
      setFavoriteRecipeInStorage([...favoriteStorage,
        setDataForInStorage(recipe, pathname)]);
      setFavoritIcon(true);
    }
  };

  return (
    <img
      className="w-7"
      src={ favoritIcon === false ? WhiteHeartIcons : OrangeHeartIcon }
      alt="Favorite Icon"
      onClick={ handleClickFavorite }
      aria-hidden="true"
    />
  );
}

ButtonFavorite.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    strArea: PropTypes.string,
    strCategory: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strTags: PropTypes.string,
    strAlcoholic: PropTypes.string,
  }),
  favoriteId: PropTypes.string,
  favorite: PropTypes.bool,
};

ButtonFavorite.defaultProps = {
  recipe: {},
  favoriteId: '',
  favorite: false,
};
export default ButtonFavorite;
