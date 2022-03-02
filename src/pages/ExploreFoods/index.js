import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { requestRandomRecipesFoods } from '../../services/api';

function ExploreFoods() {
  const history = useHistory();
  const [randomMeals, setRandomMeals] = useState([]);

  useEffect(() => {
    const getRandomRecipeMeal = async () => {
      const response = await requestRandomRecipesFoods();
      setRandomMeals(response);
    };
    getRandomRecipeMeal();
  }, []);
  const handleClickRandomRecipe = () => {
    history.push(`/foods/${randomMeals[0].idMeal}`);
  };

  return (
    <div>
      <Header title="Explorar Comidas" />
      <div
        className="flex flex-col
        items-center justify-center mt-5 container max-w-4xl mx-auto"
      >
        <button
          type="button"
          className="px-6 py-2 text-sm transition-colors duration-300
            rounded-full shadow-md text-violet-100 bg-orange-500
            hover:bg-orange-600 shadow-orange-400 w-3/4 m-1"
          onClick={ () => history.push('/explore-foods-ingredients') }
        >
          Por Ingredientes

        </button>
        <button
          type="button"
          className="px-6 py-2 text-sm transition-colors duration-300
            rounded-full shadow-md text-violet-100 bg-orange-500
            hover:bg-orange-600 shadow-orange-400 w-3/4 m-1"
          onClick={ () => history.push('/explore-foods-nationality') }
        >
          Por Nacionalidade
        </button>
        <button
          type="button"
          className="px-6 py-2 text-sm transition-colors duration-300
            rounded-full shadow-md text-violet-100 bg-orange-500
            hover:bg-orange-600 shadow-orange-400 w-3/4 m-1"
          onClick={ handleClickRandomRecipe }
        >
          Surprienda-me
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
