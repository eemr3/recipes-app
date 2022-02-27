import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import GroupButton from '../../components/GroupButton';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { requestAllFoods } from '../../services/api';

const TWELVE = 12;
function Foods() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getAllMeals = async () => {
      const respose = await requestAllFoods();
      setMeals(respose.slice(0, TWELVE));
    };
    getAllMeals();
  }, []);

  return (
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
  );
}

export default Foods;
