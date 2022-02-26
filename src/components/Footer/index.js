import React from 'react';
import FoodIcon from '../../images/mealIcon.svg';
import DrinkIcon from '../../images/drinkIcon.svg';
import ExploreIcon from '../../images/exploreIcon.svg';

function Footer() {
  return (
    <footer
      className="flex flex-row justify-around border-b-0 border-solid border-2
     bg-orange-500 fixed bottom-0 left-0 right-0 items-center"
    >
      <div>
        <img src={ DrinkIcon } alt="Icone Drink" />
      </div>
      <div>
        <img src={ ExploreIcon } alt="Icone Drink" />
      </div>
      <div>
        <img src={ FoodIcon } alt="Icone Foods" />
      </div>

    </footer>
  );
}

export default Footer;
