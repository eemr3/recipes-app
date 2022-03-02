import React from 'react';
import PropTypes from 'prop-types';
import ListIngredientsInput from '../../ListIngredientsInput';

function ListIngredients({ inProgress, listIngredients }) {
  return (
    <ul className="ml-4">
      {listIngredients.map((ingredient, index) => (
        <li key={ index }>
          <label
            htmlFor={ `${index}-${ingredient[0]}` }
          >
            {inProgress
              && <ListIngredientsInput
                idcheck={ `${index}-${ingredient[0]}` }
                nameIngrediente={ `${ingredient[0]}, ${ingredient[1]}` }
                quantityItem={ listIngredients.length }
              />}
            <span
              className="ml-2 text-gray-700"
            >
              {`${ingredient[0]} ${ingredient[1]
                !== undefined ? `- ${ingredient[1]}` : ''}`}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

ListIngredients.propTypes = {
  inProgress: PropTypes.bool,
  listIngredients: PropTypes.arrayOf(PropTypes.arrayOf([])),
};

ListIngredients.defaultProps = {
  inProgress: false,
  listIngredients: [],
};
export default ListIngredients;
