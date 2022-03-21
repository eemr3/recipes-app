import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { connect } from 'react-redux';
import { getIsDone } from '../../redux/actions/globalAction';
import getListIngredients,
{ handleClickDone, handleClickShare } from '../../functions/functionsInCards';
import validationLocalStorage,
{ validationLocalStorageDone } from '../../functions/validationManager';
import ListIngredients from './comonent-cardInProgress/ListIngredients';
import ButtonFavorite from '../ButtonFavorite';
import Button from './comonent-cardInProgress/Button';
import Carousel from '../Carousel';
import RecipesContext from '../../context/RecipesContext';
import ShareIcon from '../../images/shareIcon.svg';

const notify = () => toast.success('Link copiado!', {
  duration: 3000,
  position: 'top-right',
});

function CardDatailsAndInProgressDrinks({ recipe, inDetail, inProgress,
  isDone, changeIsDone }) {
  const { push } = useHistory();
  const { id } = useParams();

  const { isDisableButton } = useContext(RecipesContext);
  const [listIngredients, setListIngredients] = useState([]);
  const [labelButton, setLabelButton] = useState('');

  useEffect(() => {
    const params = { id, setLabelButton };
    validationLocalStorage(params, 'cocktails');
    validationLocalStorageDone(id, 'cocktails', changeIsDone);
  }, [changeIsDone, id]);

  useEffect(() => {
    getListIngredients(recipe, setListIngredients);
  }, [recipe]);

  const handleClick = () => {
    if (inProgress && isDisableButton) {
      handleClickDone(id, 'cocktails');
      push('/done-recipes');
    } else {
      push(`/drinks/${recipe.idDrink}/in-progress`);
    }
  };

  return (
    <div>
      <Toaster />
      <div
        className="fixed top-0 left-0 w-full h-2/5 bg-cover md:h-5/6"
        style={ {
          backgroundImage: `url(${recipe.strDrinkThumb})`,
        } }
      />
      <div
        className="bg-white absolute w-full
        min-h-screen md:h-4/5 top-56 md:top-96"
      >
        <div
          className="flex justify-between items-start mt-5 p-2 md:container
          md:mx-auto"
        >
          <div className="flex flex-col">
            <h2 className="text-2xl">{recipe.strDrink}</h2>
            <p className="text-gray-400 mt-1">{recipe.strAlcoholic}</p>
          </div>
          <div className="flex justify-end gap-3 mr-2">
            <img
              src={ ShareIcon }
              alt="Icon Share"
              onClick={ () => handleClickShare(inProgress, notify) }
              aria-hidden="true"
              className="w-7"
            />
            <ButtonFavorite recipe={ recipe } />
          </div>
        </div>
        <div className="bg-gray-50 w-full md:container md:mx-auto md:py-5">
          <h3 className="text-center text-xl mb-2">Ingredientes</h3>
          <ListIngredients
            listIngredients={ listIngredients }
            inProgress={ inProgress }
          />
        </div>
        <div className="p-5 mb-10 md:container md:mx-auto">
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
          <div className="md:container md:mx-auto md:w-full">
            <div className="p-3 flex flex-col mb-10 md:w-full">
              <h3 className="text-center mt-5 mb-6 text-xl">Recomendações</h3>
              <Carousel />
            </div>
          </div>
        )}
        { !isDone && (
          <Button
            disabled={ inProgress ? !isDisableButton : isDisableButton }
            onClick={ handleClick }
          >
            { inProgress ? 'Finalizar Receita' : labelButton }
          </Button>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isDone: state.globalReducer.done,
});

const mapDispatchToProps = (dispatch) => ({
  changeIsDone: (done) => dispatch(getIsDone(done)),
});

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
  isDone: PropTypes.bool,
  changeIsDone: PropTypes.func,
};

CardDatailsAndInProgressDrinks.defaultProps = {
  recipe: {},
  inProgress: false,
  inDetail: false,
  isDone: false,
  changeIsDone: () => {},
};

export default connect(mapStateToProps,
  mapDispatchToProps)(CardDatailsAndInProgressDrinks);
