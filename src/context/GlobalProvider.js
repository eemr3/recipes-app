import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import { requestAllFoods } from '../services/api';

const TWELVE = 12;
function GlobalProvider({ children }) {
  const [searchBar, setSearchBar] = useState([]);
  const [selectCategory, setSelectCategory] = useState('All');
  const [foodAndDrinkByIngredient, setFoodAndDrinkByIngredient] = useState([]);
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    const getAllFodds = async () => {
      const response = await requestAllFoods();
      setAllFoods(response.slice(0, TWELVE));
    };
    getAllFodds();
  }, []);

  return (
    <GlobalContext.Provider
      value={ {
        searchBar,
        setSearchBar,
        selectCategory,
        setSelectCategory,
        foodAndDrinkByIngredient,
        setFoodAndDrinkByIngredient,
        allFoods,
      } }
    >
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GlobalProvider;
