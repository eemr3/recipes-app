import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import WhiteHeartIcons from '../../images/whiteHeartIcon.svg';
import OrangeHeartIcon from '../../images/blackHeartIcon.svg';
import ShareIcon from '../../images/shareIcon.svg';
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
      console.log(dataForSaveInStorage);
      setFavoriteRecipeInSotage(dataForSaveInStorage);
      setFavoritIcon(false);
    } else {
      setFavoriteRecipeInSotage([...itemsSaveInLocalStorage,
        setDataForInStorage(recipe, pathname)]);
      setFavoritIcon(true);
    }
  };

  return (
    <div className="flex justify-end gap-3 mr-2">
      <img className="w-7" src={ ShareIcon } alt="Share Icon" />
      <img
        className="w-7"
        src={ favoritIcon === false ? WhiteHeartIcons : OrangeHeartIcon }
        alt="Favorite Icon"
        onClick={ handleClickFavorite }
        aria-hidden="true"
      />
    </div>
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
