import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FoodIcon from '../../images/mealIcon.svg';
import DrinkIcon from '../../images/drinkIcon.svg';
import ExploreIcon from '../../images/exploreIcon.svg';
import GlobalContext from '../../context/GlobalContext';

function Footer() {
  const history = useHistory();
  const { setSelectCategory } = useContext(GlobalContext);

  return (
    <footer
      className="footer"
    >
      <div>
        <img
          src={ DrinkIcon }
          alt="Icone Drink"
          onClick={ () => {
            history.push('/drinks');
            setSelectCategory('All');
          } }
          aria-hidden="true"
          width={ 30 }
        />
      </div>
      <div>
        <img
          src={ ExploreIcon }
          alt="Icone Drink"
          onClick={ () => history.push('/explore') }
          aria-hidden="true"
          width={ 30 }
        />
      </div>
      <div>
        <img
          src={ FoodIcon }
          alt="Icone Foods"
          onClick={ () => {
            history.push('/foods');
            setSelectCategory('All');
          } }
          aria-hidden="true"
          width={ 30 }
        />
      </div>

    </footer>
  );
}

export default Footer;
