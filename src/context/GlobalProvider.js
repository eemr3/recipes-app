import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [searchBar, setSearchBar] = useState([]);
  const [selectCategory, setSelectCategory] = useState('All');

  return (
    <GlobalContext.Provider
      value={ {
        searchBar,
        setSearchBar,
        selectCategory,
        setSelectCategory,
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
