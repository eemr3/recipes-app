import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
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
=======
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { requestAllFoods, requestAllDrinks } from '../../services/api';
import Cards from '../Cards';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderSettings from './sliderSettings';

const TWENTY = 12;

export default function Carrousel() {
  const { pathname } = useLocation();
  console.log(pathname);

  const [recommendation, setRecommendation] = useState([]);

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
      <Slider { ...sliderSettings }>
        { recommendation.length > 0 && (
          recommendation.map((
            {
              idDrink,
              strDrinkThumb,
              strDrink,
            },
          ) => (
            <div
              className="px-1"
              key={ idDrink }
            >
              <Cards
                name={ strDrink }
                image={ strDrinkThumb }
                url={ `/drinks/${idDrink}` }
              />
            </div>
          ))
        )}
      </Slider>
    </div>
>>>>>>> 04190282d9500d3086831af40db276454b9a2c24
  );
}
