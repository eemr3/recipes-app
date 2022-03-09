import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { requestAreaMeals, requestExploreFoodsByArea } from '../../services/api';
import CardExploreNationality from './components/CardExploreNationality';
import GlobalContext from '../../context/GlobalContext';

const TWELVE = 12;
export default function ExploreFoodsNatinality() {
  const { allFoods } = useContext(GlobalContext);
  const [areas, setAreas] = useState([]);
  const [areaFood, setAreaFood] = useState([]);
  const [valueSelect, setValueSelect] = useState('All');

  useEffect(() => {
    const getAreas = async () => {
      const responseArea = await requestAreaMeals();
      setAreas(responseArea);
      if (valueSelect === 'All') {
        setAreaFood(allFoods);
      } else {
        const responseFoods = await requestExploreFoodsByArea(valueSelect);
        setAreaFood(responseFoods.slice(0, TWELVE));
      }
    };
    getAreas();
  }, [allFoods, valueSelect]);

  const handleSelectArea = async ({ target }) => {
    const { value } = target;
    setValueSelect(value);
  };

  return (
    <div>
      <Header title="Explorar Comidas por Nacionalidade" />
      <div className="w-full">
        <select
          name="nationality"
          id="food-area"
          onChange={ handleSelectArea }
          className="w-3/6 form-select mt-5 block bg-white
          p-2 mx-auto rounded border border-gray-400 outline-none"

        >
          <option value="All">All</option>
          {areas.length > 0 ? areas.map((area, index) => (
            <option
              key={ `${index}-${area.strArea}` }
              value={ area.strArea }
            >
              {area.strArea}

            </option>
          )) : <option value="Loadin...">Loadin...</option>}
        </select>
      </div>
      <div
        className="grid grid-cols-2 mt-4 mb-12
      sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
      container mx-auto px-4"
      >
        {areaFood.length > 0 && areaFood !== null ? areaFood.map((food) => (
          <CardExploreNationality
            key={ food.idMeal }
            name={ food.strMeal }
            image={ food.strMealThumb }
            idFood={ food.idMeal }
          />
        )) : <h2 className="text-center my-3 text-gray-500">Escolha uma localidade</h2>}
        <Footer />

      </div>
    </div>
  );
}
