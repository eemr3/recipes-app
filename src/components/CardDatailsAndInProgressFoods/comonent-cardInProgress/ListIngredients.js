import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import localStorageManagerIngredients from
// '../../../functions/inProgressLocalStorageManager';

function ListIngredients({ inProgress, listIngredients, isChecked, setIsChecked }) {
  const { id } = useParams();
  // const [isChecked, setIsChecked] = useState(false);

  const handleChangeChecked = ({ target }) => {
    const { name } = target;
    console.log(name, id);
    setIsChecked(target.checked);
    // setIsChecked((prevState) => {
    //   localStorageManagerIngredients(id, name);
    //   return !prevState;
    // });
  };

  return (
    <ul className="ml-4">
      {listIngredients.map((ingredient, index) => (
        <li key={ index }>
          <label
            htmlFor={ `${index}-${ingredient[0]}` }
          >
            {inProgress
            && <input
              id={ `${index}-${ingredient[0]}` }
              type="checkbox"
              name={ `${ingredient[0]}, ${ingredient[1]}` }
              onChange={ handleChangeChecked }
              checked={ isChecked }
            />}
            <span
              className="ml-2 text-gray-700"
            >
              {`${ingredient[0]} - ${ingredient[1]}`}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

ListIngredients.propTypes = {
  inProgress: PropTypes.bool,
  listIngredients: PropTypes.arrayOf(),
  isChecked: PropTypes.bool,
  setIsChecked: PropTypes.func,
};

ListIngredients.defaultProps = {
  inProgress: false,
  listIngredients: [],
  isChecked: false,
  setIsChecked: () => {},
};

export default ListIngredients;
