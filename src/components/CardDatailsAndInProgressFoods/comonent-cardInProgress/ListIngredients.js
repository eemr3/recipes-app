import React from 'react';
import PropTypes from 'prop-types';
import ListIngredientsInput from '../../ListIngredientsInput';

function ListIngredients({ inProgress, listIngredients }) {
  return (
    <ul className="ml-4">
      {listIngredients.map((ingredient, index) => (
        <li key={ index }>
          <ListIngredientsInput
            inProgress={ inProgress }
            idcheck={ `${index}-${ingredient[0]}` }
            nameIngrediente={ `${ingredient[0]}, ${ingredient[1]}` }
            quantityItem={ listIngredients.length }
          >
            <span
              className="ml-2 text-gray-700"
            >
              {`${ingredient[0]} - ${ingredient[1]}`}
            </span>
          </ListIngredientsInput>
        </li>
      ))}
    </ul>
  );
}

ListIngredients.propTypes = {
  inProgress: PropTypes.bool,
  listIngredients: PropTypes.arrayOf(),
};

ListIngredients.defaultProps = {
  inProgress: false,
  listIngredients: [],
};

export default ListIngredients;
