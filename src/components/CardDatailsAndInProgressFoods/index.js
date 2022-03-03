import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Copy from 'clipboard-copy';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import ListIngredients from './comonent-cardInProgress/ListIngredients';
import ButtonFavorite from '../ButtonFavorite';
import Button from './comonent-cardInProgress/Button';
import Carousel from '../Carousel/index';
import RecipesContext from '../../context/RecipesContext';
import validationLocalStorage from '../../functions/validationManager';
import ShareIcon from '../../images/shareIcon.svg';

const notify = () => toast.success('Link copiado!', {
  duration: 3000,
  position: 'top-right',
});

function CardDatailsAndInProgressFoods({ recipe, inProgress, inDetail }) {
  const { push } = useHistory();
  const { id } = useParams();

  const { isDisableButton } = useContext(RecipesContext);
  const [listIngredients, setListIngredients] = useState([]);
  const [labelButton, setLabelButton] = useState('');

  useEffect(() => {
    const params = { id, setLabelButton };
    validationLocalStorage(params, 'meals');
  }, [id]);

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

  const handleClickShare = () => {
    let url = window.location.href;
    if (inProgress) {
      url = url.replace('/in-progress', '');
      Copy(url);
    } else {
      Copy(url);
    }
    notify();
  };

  return (
    <div>
      <Toaster />
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
          <div className="flex justify-end gap-3 mr-2">
            <img
              src={ ShareIcon }
              alt="Icon Share"
              onClick={ handleClickShare }
              aria-hidden="true"
              className="w-7"
            />
            <ButtonFavorite recipe={ recipe } />
          </div>
        </div>
        <div className="bg-gray-50 w-full">
          <h3 className="text-center text-xl mb-2">Ingredientes</h3>
          <ListIngredients
            listIngredients={ listIngredients }
            inProgress={ inProgress }
          />
        </div>
        <div className="p-5 mb-10">
          <h3 className="text-center mt-5 mb-6 text-xl">Instruções</h3>
          {recipe.strInstructions.split('\r\n').map((text, index) => (
            <p
              className="text-gray-700 text-justify indent-3 leading-6"
              key={ index }
            >
              {text}
            </p>
          ))}
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
        { (inProgress) && (
          <Button
            disabled={ inProgress ? !isDisableButton : isDisableButton }
            onClick={ inProgress && isDisableButton
              ? () => push('/done-recipes')
              : () => push(`/foods/${recipe.idMeal}/in-progress`) }
          >
            { inProgress ? 'Finalizar Receita' : labelButton }
          </Button>) }
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
