import React, { useState, useEffect } from 'react';
import CardDone from './components/CardDone';
import Header from '../../components/Header';
import GroupButtonDone from './components/GroupButtonDone';
import { validationgetDoneRecipes } from '../../functions/validationManager';

export default function DoneRecipes() {
  const [doneFoods, setDoneFoods] = useState([]);
  const [doneDrinks, setDoneDrinks] = useState([]);

  useEffect(() => {
    const getDoneStorage = JSON.parse(localStorage
      .getItem('inProgressRecipes')) || {};

    if (getDoneStorage.meals) {
      const resultStorageIDsFoods = Object.keys(getDoneStorage.meals);

      const paramsFood = {
        resultStorageIDsFoods,
        setDoneFoods,
      };
      validationgetDoneRecipes(paramsFood, '', getDoneStorage);
    }
    if (getDoneStorage.cocktails) {
      const resultStorageIDs = Object.keys(getDoneStorage.cocktails);

      const paramsD = {
        resultStorageIDs,
        setDoneDrinks,
      };
      validationgetDoneRecipes('', paramsD, getDoneStorage);
    }
  }, []);

  return (
    <div>
      <Header title="Receitas Feitas" />
      <GroupButtonDone />
      <div
        className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-3
        justify-items-center"
      >
        {doneFoods.concat(doneDrinks).map(({
          id,
          title,
          image,
          alcolic,
          tags,
          date,
          category,
          nationality,
        }) => (
          <CardDone
            key={ `${id}-${title}` }
            title={ title }
            image={ image }
            alcolic={ alcolic }
            tags={ tags }
            date={ date }
            category={ category }
            nationality={ nationality }
          />
        ))}
      </div>
    </div>
  );
}
