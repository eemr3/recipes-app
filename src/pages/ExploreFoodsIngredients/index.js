import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  requestExploreIngredientesFoods,
} from '../../services/api';
import CardExploreIngrentesFoods from './components/CardExploreIngrentesFoods';
import RecipesProvider from '../../context/RecipesProvider';

const TWELVE = 12;

function ExploreFoodsIngredients() {
  const [ingredientesFoods, setIngredientesFoods] = useState([]);

  useEffect(() => {
    const getIngredientesFoods = async () => {
      const response = await requestExploreIngredientesFoods();
      setIngredientesFoods(response.slice(0, TWELVE));
    };
    getIngredientesFoods();
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
          {ingredientesFoods.map((ingred) => (
            <CardExploreIngrentesFoods
              key={ ingred.idIngredient }
              name={ ingred.strIngredient }
              image={ `https://www.themealdb.com/images/ingredients/${ingred.strIngredient}.png` }
              url="/foods"
            />
          ))}
        </div>
      </RecipesProvider>
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;

/* idIngredient: '2', strIngredient */
