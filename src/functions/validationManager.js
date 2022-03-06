/* eslint-disable sonarjs/cognitive-complexity */
import { requestDetailDrink, requestDetailFood } from '../services/api';

const validationLocalStorage = (params, type) => {
  const { id, setLabelButton } = params;
  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  if (itemLST !== null && itemLST[type] && itemLST[type][id]
    && itemLST[type][id].recipesCount) {
    const countChecked = Number(itemLST[type][id].recipesCount) || 0;
    setLabelButton(countChecked !== 0 ? 'Continuar Receita' : 'Iniciar Receita');
  } else {
    setLabelButton('Iniciar Receita');
  }
};

export const validationLocalStorageDone = (id, type, callback) => {
  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  if (itemLST !== null && itemLST[type] && itemLST[type][id]
    && itemLST[type][id].recipesDone) {
    const countChecked = itemLST[type][id].recipesDone || false;
    callback(countChecked);
  } else {
    callback(false);
  }
};

export const validationgetDoneRecipes = (
  params = '', paramsD = '', getDoneStorage,
) => {
  const {
    resultStorageIDsFoods,
    setDoneFoods,
  } = params;
  const { setDoneDrinks, resultStorageIDs } = paramsD;

  if (resultStorageIDsFoods) {
    resultStorageIDsFoods.map(async (meal) => requestDetailFood(meal)
      .then((responseMeal) => setDoneFoods((prev) => [...prev, responseMeal
        .reduce((acc, {
          idMeal, strMeal, strMealThumb, strCategory, strTags, strArea,
        }) => {
          acc.id = idMeal;
          acc.title = strMeal;
          acc.image = strMealThumb;
          acc.tags = strTags !== null ? strTags.split(',') : '';
          acc.category = strCategory;
          acc.nationality = strArea;
          acc.date = getDoneStorage.meals[idMeal].doneDate;
          return acc;
        }, {})])));
  }
  if (resultStorageIDs) {
    resultStorageIDs.map(async (cock) => requestDetailDrink(cock)
      .then((response) => setDoneDrinks((prev) => [...prev, response
        .reduce((acc, {
          idDrink, strDrink, strDrinkThumb, strAlcoholic, strTags,
        }) => {
          acc.id = idDrink;
          acc.title = strDrink;
          acc.image = strDrinkThumb;
          acc.tags = strTags !== null ? strTags.split(',') : '';
          acc.alcolic = strAlcoholic;
          acc.date = getDoneStorage.cocktails[idDrink].doneDate;
          return acc;
        }, {})])));
  }
};

export default validationLocalStorage;
