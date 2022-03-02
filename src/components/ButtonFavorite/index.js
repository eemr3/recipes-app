import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import WhiteHeartIcons from '../../images/whiteHeartIcon.svg';
import OrangeHeartIcon from '../../images/blackHeartIcon.svg';
import setFavoriteRecipeInSotage from '../../functions/favoriteRecipes';
import setDataForInStorage from '../../functions/dataForSaveInStorage';

function ButtonFavorite({ recipe }) {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [favoritIcon, setFavoritIcon] = useState(false);
  const [itemsSaveInLocalStorage, setItemsSaveInLocalStorage] = useState([]);

  useEffect(() => {
    const getSaveStorage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setItemsSaveInLocalStorage(getSaveStorage);
    setFavoritIcon(getSaveStorage.some((item) => item.id === id));
  }, [id]);

  const handleClickFavorite = () => {
    if (favoritIcon) {
      const dataForSaveInStorage = itemsSaveInLocalStorage
        .filter((item) => (item.id !== id));
      setFavoriteRecipeInSotage(dataForSaveInStorage);
      setFavoritIcon(false);
    } else {
      setFavoriteRecipeInSotage([...itemsSaveInLocalStorage,
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
};

ButtonFavorite.defaultProps = {
  recipe: {},
};
export default ButtonFavorite;
