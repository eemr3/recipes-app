import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  requestAllFoods,
  requestCateforyByNameFoods,
} from '../../services/api';
import GlobalContext from '../../context/GlobalContext';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import GroupButton from '../../components/GroupButton';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import RecipesProvider from '../../context/RecipesProvider';

const TWELVE = 12;

function Foods() {
  const { push } = useHistory();
  const {
    searchBar,
    selectCategory,
    foodAndDrinkByIngredient,
  } = useContext(GlobalContext);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getAllMeals = async () => {
      if (foodAndDrinkByIngredient.length > 0) {
        setMeals(foodAndDrinkByIngredient);
      } else if (selectCategory === 'All') {
        const response = await requestAllFoods();
        setMeals(response.slice(0, TWELVE));
      } else {
        const response = await requestCateforyByNameFoods(selectCategory);
        setMeals(response.slice(0, TWELVE));
      }
    };

    getAllMeals();
  }, [foodAndDrinkByIngredient, selectCategory]);

  useEffect(() => {
    if (searchBar.length === 1) push(`/foods/${searchBar[0].idMeal}`);
    else if (searchBar.length > 1) {
      setMeals(searchBar);
    }
  }, [push, searchBar]);

  return (
    <RecipesProvider>
      <div>
        <Header title="Comidas" isSearch />
        <GroupButton route="foods" />
        {
          meals.length === 0 ? (
            <Loading />
          ) : (
            <div
              className="grid grid-cols-2 mt-4 mb-12
            sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
            container mx-auto px-4"
            >
              {meals.map((
                {
                  idMeal,
                  strMealThumb,
                  strMeal,
                },
              ) => (
                <Cards
                  key={ idMeal }
                  idMeal={ idMeal }
                  image={ strMealThumb }
                  name={ strMeal }
                  url={ `/foods/${idMeal}` }
                />
              ))}

            </div>
          )
        }

        <Footer />
      </div>
    </RecipesProvider>
  );
}

export default Foods;
