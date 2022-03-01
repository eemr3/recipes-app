import React, { useEffect, useState } from 'react';
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
  );
}
