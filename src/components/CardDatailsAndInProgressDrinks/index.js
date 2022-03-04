import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import Copy from 'clipboard-copy';
import toast, { Toaster } from 'react-hot-toast';
import ListIngredients from './comonent-cardInProgress/ListIngredients';
import ButtonFavorite from '../ButtonFavorite';
import Button from './comonent-cardInProgress/Button';
import Carousel from '../Carousel';
import RecipesContext from '../../context/RecipesContext';
import validationLocalStorage from '../../functions/validationManager';
import ShareIcon from '../../images/shareIcon.svg';

const notify = () => toast.success('Link copiado!', {
  duration: 3000,
  position: 'top-right',
});

function CardDatailsAndInProgressDrinks({ recipe, inDetail, inProgress }) {
  const { push } = useHistory();
  const { id } = useParams();

  const { isDisableButton } = useContext(RecipesContext);
  const [listIngredients, setListIngredients] = useState([]);
  const [labelButton, setLabelButton] = useState('');

  useEffect(() => {
    const params = { id, setLabelButton };
    validationLocalStorage(params, 'cocktails');
  }, [id]);

  useEffect(() => {
    const getListIngredients = () => {
      const listIngredientsAndMeasure = [];
      const ingredientKeys = Object.keys(recipe)
        .filter((item) => item.includes('strIngredient'));
      const measureKeys = Object.keys(recipe)
        .filter((item) => item.includes('strMeasure'));
      const ingredients = ingredientKeys.map((key) => recipe[key])
        .filter((recip) => recip !== null);
      const measure = measureKeys.map((key) => recipe[key])
        .filter((recip) => recip !== null);
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
          backgroundImage: `url(${recipe.strDrinkThumb})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        } }
      />
      <div className="bg-white absolute w-full min-h-screen md:h-4/5 top-56">
        <div className="flex justify-between items-start mt-5 p-2">
          <div className="flex flex-col">
            <h2 className="text-2xl">{recipe.strDrink}</h2>
            <p className="text-gray-400 mt-1">{recipe.strAlcoholic}</p>
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
        {inDetail && <Carousel /> }
        <Button
          disabled={ inProgress ? !isDisableButton : isDisableButton }
          onClick={ inProgress && isDisableButton
            ? () => push('/done-recipes')
            : () => push(`/drinks/${recipe.idDrink}/in-progress`) }
        >
          { inProgress ? 'Finalizar Receita' : labelButton}
        </Button>
      </div>
    </div>
  );
}

CardDatailsAndInProgressDrinks.propTypes = {
  recipe: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
  }),
  inProgress: PropTypes.bool,
  inDetail: PropTypes.bool,
};

CardDatailsAndInProgressDrinks.defaultProps = {
  recipe: {},
  inProgress: false,
  inDetail: false,
};
export default CardDatailsAndInProgressDrinks;
