import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import WhiteHeartIcons from '../../images/whiteHeartIcon.svg';
import OrangeHeartIcon from '../../images/blackHeartIcon.svg';
import ShareIcon from '../../images/shareIcon.svg';
import setFavoriteRecipeInSotage from '../../functions/favoriteRecipes';
import setDataForInStorage from '../../functions/dataForSaveInStorage';

function ButtonFavorite({ recipe }) {
  const { pathname } = useLocation();

  const [favoritIcon, setFavoritIcon] = useState(false);

  const handleClickFavorite = () => {
    switch (pathname) {
    case pathname.includes('foods'):
      setFavoriteRecipeInSotage(setDataForInStorage(recipe));
      setFavoritIcon(true);
      break;
    // eslint-disable-next-line sonarjs/no-duplicated-branches
    case pathname.includes('drinks'):
      setFavoriteRecipeInSotage(setDataForInStorage(recipe));
      setFavoritIcon(true);
      break;
    default:
      break;
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
