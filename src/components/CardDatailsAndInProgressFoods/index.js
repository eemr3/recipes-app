import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsDone } from '../../redux/actions/globalAction';
import getListIngredients,
{ handleClickDone, handleClickShare } from '../../functions/functionsInCards';
import validationLocalStorage,
{ validationLocalStorageDone } from '../../functions/validationManager';
import ListIngredients from './comonent-cardInProgress/ListIngredients';
import ButtonFavorite from '../ButtonFavorite';
import Button from './comonent-cardInProgress/Button';
import Carousel from '../Carousel/index';
import RecipesContext from '../../context/RecipesContext';
import ShareIcon from '../../images/shareIcon.svg';

const notify = () => toast.success('Link copiado!', {
  duration: 3000,
  position: 'top-right',
});

function CardDatailsAndInProgressFoods({ recipe, inProgress, inDetail,
  isDone, changeIsDone }) {
  const { push } = useHistory();
  const { id } = useParams();

  const { isDisableButton } = useContext(RecipesContext);
  const [listIngredients, setListIngredients] = useState([]);
  const [labelButton, setLabelButton] = useState('');

  useEffect(() => {
    const params = { id, setLabelButton };
    validationLocalStorage(params, 'meals');
    validationLocalStorageDone(id, 'meals', changeIsDone);
  }, [changeIsDone, id]);

  useEffect(() => {
    getListIngredients(recipe, setListIngredients);
  }, [recipe]);

  const handleClick = () => {
    if (inProgress && isDisableButton) {
      handleClickDone(id, 'meals');
      push('/done-recipes');
    } else {
      push(`/foods/${recipe.idMeal}/in-progress`);
    }
  };

  return (
    <div>
      <Toaster />
      <div
        className="fixed top-0 left-0 w-full h-2/5 bg-cover md:h-5/6"
        style={ {
          backgroundImage: `url(${recipe.strMealThumb})`,
        } }
      />
      <div
        className="bg-white absolute w-full
        min-h-screen top-56 md:top-96"
      >
        <div
          className="flex justify-between items-start mt-5 p-2 md:container
          md:mx-auto"
        >
          <div className="flex flex-col">
            <h2 className="text-2xl">{recipe.strMeal}</h2>
            <p className="text-gray-400 mt-1">{recipe.strCategory}</p>
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
          <div>
            <div
              className="p-3 flex flex-col mb-10 lg:w-3/5 md:container
            md:mx-auto md:h-96"
            >
              <h3 className="text-center mt-5 mb-6 text-xl">Vídeo</h3>
              <iframe
                className="md:h-full"
                src={ recipe.strYoutube
                  .replace('\\/', '//').replace('/watch?v=', '/embed/') }
                title="W3Scho"
                data-testid="video"
              />
            </div>
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
  isDone: PropTypes.bool,
  changeIsDone: PropTypes.func,
};

CardDatailsAndInProgressFoods.defaultProps = {
  recipe: {},
  inProgress: false,
  inDetail: false,
  isDone: false,
  changeIsDone: () => {},
};

export default connect(mapStateToProps,
  mapDispatchToProps)(CardDatailsAndInProgressFoods);
