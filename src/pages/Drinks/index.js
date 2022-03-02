import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import GroupButton from '../../components/GroupButton';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { requestAllDrinks, requestCateforyByNameDrinks } from '../../services/api';
import RecipesProvider from '../../context/RecipesProvider';

const TWELVE = 12;

function Drinks() {
  const { push } = useHistory();
  const { searchBar, selectCategory } = useContext(GlobalContext);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getDrinks = async () => {
      if (selectCategory === 'All') {
        const response = await requestAllDrinks();
        setDrinks(response.slice(0, TWELVE));
      } else {
        const response = await requestCateforyByNameDrinks(selectCategory);
        setDrinks(response.slice(0, TWELVE));
      }
    };
    getDrinks();
  }, [selectCategory]);

  useEffect(() => {
    if (searchBar.length === 1) push(`/drinks/${searchBar[0].idDrink}`);
    else if (searchBar.length > 1) {
      setDrinks(searchBar);
    }
  }, [push, searchBar]);

  return (
    <RecipesProvider>
      <div>
        <Header title="Bebidas" isSearch />
        <GroupButton route="drinks" />
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
    </RecipesProvider>
  );
}

export default Drinks;
