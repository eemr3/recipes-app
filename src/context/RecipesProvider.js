import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [countChecked, setCountChecked] = useState(0);
  const [isDisableButton, setIsDisableButton] = useState(false);

  return (
    <RecipesContext.Provider
      value={ {
        countChecked,
        setCountChecked,
        isDisableButton,
        setIsDisableButton,
      } }
    >
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default RecipesProvider;
