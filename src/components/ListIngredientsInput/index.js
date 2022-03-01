import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import localStorageManagerIngredients
from '../../functions/inProgressLocalStorageManager';

function Input({ idcheck, nameIngrediente }) {
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const { pathname } = useLocation();

  const handleChange = ({ target }) => {
    const { name } = target;
    const type = pathname.includes('/drinks') ? 'cocktails' : 'meals';
    setIsChecked(target.checked);
    setIsChecked((prevState) => {
      localStorageManagerIngredients(id, name, type, prevState);
      return !prevState;
    });
    setIsChecked(!isChecked);
  };

  return (
    <input
      id={ idcheck }
      type="checkbox"
      name={ nameIngrediente }
      onChange={ handleChange }
      checked={ isChecked }
    />
  );
}

Input.propTypes = {
  idcheck: PropTypes.string,
  nameIngrediente: PropTypes.string,
};

Input.defaultProps = {
  idcheck: '',
  nameIngrediente: '',
};

export default Input;
