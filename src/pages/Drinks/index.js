import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { requestAllDrinks } from '../../services/api';

const TWELVE = 12;

function Drinks() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getDrinks = async () => {
      const response = await requestAllDrinks();
      setDrinks(response.slice(0, TWELVE));
    };
    getDrinks();
  }, []);

  return (
    <div>
      <Header title="Bebidas" isSearch />
      <div>
        {drinks.length === 0 ? (<Loading />) : (
          <div
            className="grid grid-cols-2 mt-4 mb-12
          sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
          container mx-auto px-4"
          >
            {drinks.map(({ idDrink, strGlass, strDrinkThumb }) => (
              <Cards
                key={ idDrink }
                name={ strGlass }
                image={ strDrinkThumb }
                url={ `/drinks/${idDrink}` }
              />
            )) }
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
