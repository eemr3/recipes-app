import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  requestExploreIngredientesDrinks,
} from '../../services/api';
import CardExploreIngrentesDrinks from './components/CardExploreIngrentesDrinks';

import RecipesProvider from '../../context/RecipesProvider';

const TWELVE = 12;

function ExploreDrinksIngredients() {
  const [ingredientesDrinks, setIngredientesDrinks] = useState([]);

  useEffect(() => {
    const getIngredientesDrinks = async () => {
      const response = await requestExploreIngredientesDrinks();
      setIngredientesDrinks(response.slice(0, TWELVE));
    };
    getIngredientesDrinks();
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes de Comida" />
      <RecipesProvider>
        <div
          className="grid grid-cols-2 mt-4 mb-12
      sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
      container mx-auto px-4"
        >
          {ingredientesDrinks.map((ingred, index) => (
            <CardExploreIngrentesDrinks
              key={ `${ingred.strIngredient1}-${index}` }
              name={ ingred.strIngredient1 }
              image={ `https://www.themealdb.com/images/ingredients/${ingred.strIngredient1}.png` }
            />
          ))}
        </div>
      </RecipesProvider>
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
