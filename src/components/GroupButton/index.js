import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { requestCategoryFoods } from '../../services/api';
import Loading from '../Loading';

const FIVE = 5;

function GroupButton({ handleClick, route }) {
  const [categoryBtn, setCategoryBtn] = useState([]);

  useEffect(() => {
    const getCategoryFood = async () => {
      switch (route) {
      case 'foods': {
        const response = await requestCategoryFoods('themealdb');
        setCategoryBtn(response.meals.slice(0, FIVE));
      }
        break;
      case 'drinks': {
        const respose = await requestCategoryFoods('thecocktaildb');
        setCategoryBtn(respose.drinks.slice(0, FIVE));
      }
        break;
      default:
        break;
      }
    };
    getCategoryFood();
  }, [route]);

  return (

    categoryBtn.length === 0 ? (<Loading />) : (
      <div className="flex justify-center flex-wrap">
        <button
          type="button"
          className="px-6 py-2 text-sm transition-colors duration-300
            rounded-full shadow-md text-violet-100 bg-orange-500
            hover:bg-orange-600 shadow-orange-400 w-28 m-1"
          onClick={ handleClick }
        >
          All
        </button>
        {categoryBtn.map(({ strCategory }) => (
          <button
            key={ strCategory }
            type="button"
            className="px-6 py-2 text-sm transition-colors duration-300
            rounded-full shadow-md text-violet-100 bg-orange-500
            hover:bg-orange-600 shadow-orange-400 w-28 m-1"
            onClick={ handleClick }
          >
            {strCategory.includes('Unknown') ? strCategory.split('/')[0]
              : strCategory.split(' ')[0]}
          </button>
        ))}
      </div>)

  );
}

GroupButton.propTypes = {
  handleClick: PropTypes.func,
  route: PropTypes.string,
};

GroupButton.defaultProps = {
  handleClick: () => { },
  route: '',
};

export default GroupButton;
