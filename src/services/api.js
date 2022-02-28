export const requestAllFoods = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
};

export const requestAllDrinks = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error(error);
  }
};

export const requestCategoryFoods = async (domain) => {
  const URL = `https://www.${domain}.com/api/json/v1/1/list.php?c=list`;
  try {
    const respose = await fetch(URL);
    const data = await respose.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const requestNameFoods = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
};

export const requestIngredientFoods = async (ingredient) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
};

export const requestFirstNameFoods = async (firstName) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstName}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
};

export const requestNameDrinks = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error(error);
  }
};

export const requestIngredientDrinks = async (ingredient) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error(error);
  }
};

export const requestFirstNameDrinks = async (firstName) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstName}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error(error);
  }
};

export const requestCateforyByNameFoods = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
};

export const requestCateforyByNameDrinks = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error(error);
  }
};
