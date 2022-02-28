import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import WhiteHeartIcons from '../../images/whiteHeartIcon.svg';
import OrangeHeartIcon from '../../images/blackHeartIcon.svg';
import ShareIcon from '../../images/shareIcon.svg';
import setFavoriteRecipeInSotage from '../../functions/favoriteRecipes';

function ButtonFavorite({ recipe }) {
  const { pathname } = useLocation();

  const [favoritIcon, setFavoritIcon] = useState(false);

  const handleClickFavorite = () => {
    if (pathname.includes('foods')) {
      setFavoriteRecipeInSotage({
        id: recipe.idMeal,
        type: 'Comida',
        nationality: recipe.strArea,
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic,
        name: recipe.strMeal,
        image: recipe.strMealThumb,
      });
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
