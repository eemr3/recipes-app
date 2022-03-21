import React, {
  useEffect,
  useState,
  useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import
{
  localStorageManagerIngredients,
  getLocalStorageInProgress,
} from '../../functions/inProgressLocalStorageManager';
import RecipesContext from '../../context/RecipesContext';

function Input({ idcheck, inProgress, children, nameIngrediente, quantityItem }) {
  const { id } = useParams();
  const { countChecked,
    setCountChecked,
    setIsDisableButton } = useContext(RecipesContext);
  const [isChecked, setIsChecked] = useState(false);
  const { pathname } = useLocation();

  const handleChange = ({ target }) => {
    const { name } = target;
    const type = pathname.includes('/drinks') ? 'cocktails' : 'meals';
    const params = {
      id, name, type, countChecked,
    };
    setIsChecked(target.checked);
    setIsChecked((prevState) => {
      localStorageManagerIngredients(prevState, params);
      return !prevState;
    });
    setCountChecked(() => (!isChecked ? countChecked + 1 : countChecked - 1));
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const route = pathname.includes('/drinks') ? 'drinks' : 'foods';
    const params = { setIsChecked, route, id, nameIngrediente, setCountChecked };
    getLocalStorageInProgress(params);
  }, [countChecked, id, isChecked, nameIngrediente, pathname, setCountChecked]);

  useEffect(() => {
    setIsDisableButton(quantityItem === countChecked);
  }, [countChecked, quantityItem, setIsDisableButton]);

  return (
    <label
      htmlFor={ idcheck }
      className={ isChecked ? 'line-through' : '' }
    >
      {inProgress
      && <input
        id={ idcheck }
        type="checkbox"
        name={ nameIngrediente }
        onChange={ handleChange }
        checked={ isChecked }
      />}
      {children}
    </label>
  );
}

Input.propTypes = {
  idcheck: PropTypes.string,
  nameIngrediente: PropTypes.string,
  quantityItem: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  inProgress: PropTypes.bool,
};

Input.defaultProps = {
  idcheck: '',
  nameIngrediente: '',
  quantityItem: 0,
  inProgress: false,
};

export default Input;
