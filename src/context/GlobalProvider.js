import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [nameSearch, setNameSearch] = useState();
  const [ingredientSearch, setIngredientSearch] = useState();
  const [firstSearch, setFirstSearch] = useState();

  return (
    <GlobalContext.Provider
      value={ {
        nameSearch,
        setNameSearch,
        ingredientSearch,
        setIngredientSearch,
        firstSearch,
        setFirstSearch,
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
