import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { requestAllFoods } from '../../services/api';

function Foods() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getAllMeals = async () => {
      const respose = await requestAllFoods();
      setMeals(respose);
    };
    getAllMeals();
  });

  return (
    <div>
      <Header title="Comidas" isSearch />
      <div className="text-center">
        <Loading />
        <div
          className="grid grid-cols-2 mt-4 mb-12
     sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
              container mx-auto"
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
              image={ strMealThumb }
              name={ strMeal }
              idMeal={ idMeal }
              url="/foods/"
            />
          ))}

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Foods;
