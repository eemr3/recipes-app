import React from 'react';
import PropTypes from 'prop-types';

function ListIngredients({ inProgress, listIngredients }) {
  return (
    <ul className="ml-4">
      {listIngredients.map((ingredient, index) => (
        <li key={ index }>
          <label
            htmlFor={ `${index}-${ingredient}` }
          >
            {inProgress
            && <input
              type="checkbox"
              name=""
              id={ `${index}-${ingredient}` }
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
  listIngredients: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
  ])),
};

ListIngredients.defaultProps = {
  inProgress: false,
  listIngredients: [],
};

export default ListIngredients;
