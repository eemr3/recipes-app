import React, { useState, useEffect } from 'react';
import CardDone from './components/CardDone';
import Header from '../../components/Header';
import GroupButtonDone from './components/GroupButtonDone';
import { requestDetailDrink,
  requestDetailFood,
} from '../../services/api';

export default function DoneRecipes() {
  const [doneFoods, setDoneFoods] = useState([]);
  const [doneDrinks, setDoneDrinks] = useState([]);

  useEffect(() => {
    const getDoneRecipes = async () => {
      const getDoneStorage = JSON.parse(localStorage
        .getItem('inProgressRecipes')) || null;
      // const date = Object.values(getDoneStorage).map((d) => d);
      const resultStorageIDs = Object.values(getDoneStorage)
        .map((item) => Object.keys(item));

      resultStorageIDs[0].map(async (meal) => requestDetailFood(meal)
        .then((responseMeal) => setDoneFoods((prev) => [...prev, responseMeal
          .reduce((acc, {
            idMeal, strMeal, strMealThumb, strCategory, strTags,
          }) => {
            acc.id = idMeal;
            acc.title = strMeal;
            acc.image = strMealThumb;
            acc.tags = strTags !== null ? strTags.split(',') : '';
            acc.category = strCategory;
            // acc.date = date[1][idMeal].doneDate;
            return acc;
          }, {})])));
      resultStorageIDs[1].map(async (cock) => requestDetailDrink(cock)
        .then((response) => setDoneDrinks((prev) => [...prev, response
          .reduce((acc, {
            idDrink, strDrink, strDrinkThumb, strAlcoholic, strTags,
          }) => {
            acc.id = idDrink;
            acc.title = strDrink;
            acc.image = strDrinkThumb;
            acc.tags = strTags !== null ? strTags.split(',') : '';
            acc.alcolic = strAlcoholic;
            // acc.date = date[0][idDrink].doneDate;
            return acc;
          }, {})])));
    };
    getDoneRecipes();
  }, []);

  console.log(doneDrinks.concat(doneFoods));

  return (
    <div>
      <Header title="Receitas Feitas" />
      <GroupButtonDone />
      <div
        className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-3
        justify-items-center"
      >
        <CardDone />
      </div>
    </div>
  );
}
