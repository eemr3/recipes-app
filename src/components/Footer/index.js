import React from 'react';
import { useHistory } from 'react-router-dom';
import FoodIcon from '../../images/mealIcon.svg';
import DrinkIcon from '../../images/drinkIcon.svg';
import ExploreIcon from '../../images/exploreIcon.svg';

function Footer() {
  const history = useHistory();

  return (
    <footer
      className="footer"
    >
      <div>
        <img
          src={ DrinkIcon }
          alt="Icone Drink"
          onClick={ () => history.push('/drinks') }
          aria-hidden="true"
          width={ 40 }
        />
      </div>
      <div>
        <img
          src={ ExploreIcon }
          alt="Icone Drink"
          onClick={ () => history.push('/explore') }
          aria-hidden="true"
          width={ 40 }
        />
      </div>
      <div>
        <img
          src={ FoodIcon }
          alt="Icone Foods"
          onClick={ () => history.push('/foods') }
          aria-hidden="true"
          width={ 40 }
        />
      </div>

    </footer>
  );
}

export default Footer;
