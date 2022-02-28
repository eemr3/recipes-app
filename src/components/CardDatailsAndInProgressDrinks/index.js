import React from 'react';
import PropTypes from 'prop-types';
import ListIngredients from './comonent-cardInProgress/ListIngredients';
// import WhiteHeartIcons from '../../images/whiteHeartIcon.svg';
import OrangeHeartIcon from '../../images/blackHeartIcon.svg';
import ShareIcon from '../../images/shareIcon.svg';

function CardDatailsAndInProgressDrinks({ recipe }) {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-2/5"
        style={ {
          backgroundImage: `url(${recipe.strDrinkThumb})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        } }
      />
      <div className="bg-white absolute h-screen w-full md:h-4/5 top-56">
        <div className="flex justify-between items-start mt-5 p-2">
          <div className="flex flex-col">
            <h2 className="text-2xl">Spicy Arrabiata Penne</h2>
            <p className="text-gray-400 mt-1">Vegetarian</p>
          </div>
          <div className="flex justify-end gap-3 mr-2">
            <img className="w-7" src={ ShareIcon } alt="Share Icon" />
            <img className="w-7" src={ OrangeHeartIcon } alt="Favorite Icon" />
          </div>

        </div>
        <div className="bg-gray-50 w-full">
          <h3 className="text-center text-xl mb-2">Ingredientes</h3>
          <ListIngredients />
        </div>
        <div className="p-3">
          <h3 className="text-center mt-5 mb-3 text-xl">instruções</h3>
          <p className="mb-5 text-gray-700">
            Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C).
            Warm gravy in saucepan or microwave. Place the fries into the hot
            oil, and cook until light brown, about 5 minutes. Remove to a paper
            towel lined plate to drain. Place the fries on a serving platter,
            and sprinkle the cheese over them. Ladle gravy over the fries and
            cheese, and serve immediately.
          </p>
        </div>
      </div>
      <button
        className="w-full"
        type="button"
      >
        Finalizar Receita

      </button>
    </div>
  );
}

CardDatailsAndInProgressDrinks.propTypes = {
  recipe: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
  }),
};

CardDatailsAndInProgressDrinks.defaultProps = {
  recipe: {},
};
export default CardDatailsAndInProgress;
