import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderSettings from './sliderSettings';
import { requestAllFoods, requestAllDrinks } from '../../services/api';
import Cards from '../Cards';

const TWENTY = 12;

export default function Carrousel() {
  const { pathname } = useLocation();

  const [recommendation, setRecommendation] = useState([]);
  console.log(recommendation);
  useEffect(() => {
    const getRequestRecommendationFoods = async () => {
      const data = await requestAllFoods();
      setRecommendation(data.slice(0, TWENTY));
    };
    if (pathname.includes('/drinks')) getRequestRecommendationFoods();
  }, [pathname]);

  useEffect(() => {
    const getRequestRecommendationDrinks = async () => {
      const data = await requestAllDrinks();
      setRecommendation(data.slice(0, TWENTY));
    };
    if (pathname.includes('/foods')) getRequestRecommendationDrinks();
  }, [pathname]);

  return (
    <div className="m-2">
      { pathname.includes('/foods') && (
        <Slider { ...sliderSettings }>
          { recommendation.length > 0 && (
            recommendation.map((
              {
                idDrink,
                strDrinkThumb,
                strDrink,
                strAlcoholic,
              },
            ) => (
              <div
                className="px-1"
                key={ idDrink }
              >
                <Cards
                  name={ strDrink }
                  image={ strDrinkThumb }
                  category={ strAlcoholic }
                  url={ `/drinks/${idDrink}` }
                />
              </div>
            ))
          )}
        </Slider>)}
      { pathname.includes('/drinks') && (
        <Slider { ...sliderSettings }>
          { recommendation.length > 0 && (
            recommendation.map((
              {
                idMeal,
                strMealThumb,
                strMeal,
                strCategory,
              },
            ) => (
              <div
                className="px-1"
                key={ idMeal }
              >
                <Cards
                  image={ strMealThumb }
                  name={ strMeal }
                  category={ strCategory }
                  url={ `/foods/${idMeal}` }
                />
              </div>
            ))
          )}
        </Slider>)}
    </div>
  );
}
