import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { requestExploreDrinksByIngredientes } from '../../../services/api';
import GlobalContext from '../../../context/GlobalContext';

function CardExploreIngrentesDrinks({ name, image }) {
  const history = useHistory();
  const { setFoodAndDrinkByIngredient, setSelectCategory } = useContext(GlobalContext);
  const handleClickRedirect = async () => {
    const response = await requestExploreDrinksByIngredientes(name);
    setSelectCategory('explore');
    setFoodAndDrinkByIngredient(response);
    history.push('/drinks');
  };

  return (

    <div
      className="group relative mb-1.5 "
      onClick={ handleClickRedirect }
      aria-hidden="true"
    >
      <div
        className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1
    rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
      >
        <img
          src={ image }
          alt={ name }
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="w-full mt-4">
        <h5
          className="text-gray-700 text-center"
        >
          {name}
        </h5>
      </div>
    </div>

  );
}

CardExploreIngrentesDrinks.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

CardExploreIngrentesDrinks.defaultProps = {
  name: '',
  image: '',
};

export default CardExploreIngrentesDrinks;
