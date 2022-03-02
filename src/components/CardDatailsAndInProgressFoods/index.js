import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ListIngredients from './comonent-cardInProgress/ListIngredients';
import ButtonFavorite from '../ButtonFavorite';
import Button from './comonent-cardInProgress/Button';
import Carousel from '../Carousel/index';
import RecipesContext from '../../context/RecipesContext';

function CardDatailsAndInProgressFoods({ recipe, inProgress, inDetail }) {
  const { push } = useHistory();

  const { isDisableButton } = useContext(RecipesContext);
  const [listIngredients, setListIngredients] = useState([]);

  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  const countChecked = Number(itemLST.recipesCount.meals[recipe.idMeal]) || 0;
  const labelButton = countChecked !== 0 ? 'Editar Receita' : 'Iniciar Receita';

  useEffect(() => {
    const getListIngredients = () => {
      const listIngredientsAndMeasure = [];
      const ingredientKeys = Object.keys(recipe)
        .filter((item) => item.includes('strIngredient'));
      const measureKeys = Object.keys(recipe)
        .filter((item) => item.includes('strMeasure'));
      const ingredients = ingredientKeys.map((key) => recipe[key])
        .filter((recip) => recip !== '' && recip !== null);
      const measure = measureKeys.map((key) => recipe[key])
        .filter((recip) => recip !== '' && recip !== null);
      for (let index = 0; index < ingredients.length; index += 1) {
        listIngredientsAndMeasure.push([ingredients[index], measure[index]]);
      }
      setListIngredients(listIngredientsAndMeasure);
    };
    getListIngredients();
  }, [recipe]);

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-2/5"
        style={ {
          backgroundImage: `url(${recipe.strMealThumb})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        } }
      />
      <div className="bg-white absolute w-full min-h-screen md:h-4/5 top-56">
        <div className="flex justify-between items-start mt-5 p-2">
          <div className="flex flex-col">
            <h2 className="text-2xl">{recipe.strMeal}</h2>
            <p className="text-gray-400 mt-1">{recipe.strCategory}</p>
          </div>
          <ButtonFavorite recipe={ recipe } />
        </div>
        <div className="bg-gray-50 w-full">
          <h3 className="text-center text-xl mb-2">Ingredientes</h3>
          <ListIngredients
            listIngredients={ listIngredients }
            inProgress={ inProgress }
          />
        </div>
        <div className="p-3">
          <h3 className="text-center mt-5 mb-6 text-xl">instruções</h3>
          <p className="mb-5 text-gray-700">
            {recipe.strInstructions}
          </p>
        </div>
        {inDetail && (
          <div>
            <div className="p-3 flex flex-col mb-10 lg:w-3/5">
              <h3 className="text-center mt-5 mb-6 text-xl">Vídeo</h3>
              <iframe
                src={ recipe.strYoutube
                  .replace('\\/', '//').replace('/watch?v=', '/embed/') }
                title="W3Scho"
                data-testid="video"
              />
            </div>
            <div className="p-3 flex flex-col mb-10 lg:w-3/5">
              <h3 className="text-center mt-5 mb-6 text-xl">Recomendações</h3>
              <Carousel />
            </div>
          </div>
        )}
        <Button
          disabled={ inProgress ? !isDisableButton : isDisableButton }
          onClick={ inProgress && isDisableButton
            ? () => push('/done-recipes')
            : () => push(`/foods/${recipe.idMeal}/in-progress`) }
        >
          { inProgress ? 'Finalizar Receita' : labelButton }
        </Button>
      </div>
    </div>
  );
}

CardDatailsAndInProgressFoods.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
  }),
  inProgress: PropTypes.bool,
  inDetail: PropTypes.bool,
};

CardDatailsAndInProgressFoods.defaultProps = {
  recipe: {},
  inProgress: false,
  inDetail: false,
};
export default CardDatailsAndInProgressFoods;
