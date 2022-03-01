import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import settings from './settings';
import { requestAllFoods } from '../../services/api';
import Cards from '../Cards';

const TWENTY = 12;

export default function Responsive() {
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    const getRequestRecommendation = async () => {
      const data = await requestAllFoods();
      setRecommendation(data.slice(0, TWENTY));
    };
    getRequestRecommendation();
  }, []);

  return (
    <ul>
      <Slider { ...settings }>
        { recommendation.length > 0 && (
          recommendation.map((
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
          ))
        )}
      </Slider>
    </ul>
  );
}
