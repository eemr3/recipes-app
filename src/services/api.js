export const requestAllFoods = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals;
};

export const requestNameFoods = async (name, router) => {
  let URL = '';
  if (router === '/foods') {
    URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  } else if (router === '/drinks') {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  }
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals;
};

export const requestIngredientFoods = async (ingredient, router) => {
  let URL = '';
  if (router === '/foods') {
    URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  } else if (router === '/drinks') {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  }
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals;
};

export const requestFirstNameFoods = async (firstName, router) => {
  let URL = '';
  if (router === '/foods') {
    URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstName}`;
  } else if (router === '/drinks') {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstName}`;
  }
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals;
};
