const localStorageManagerIngredients = (id, name) => {
  localStorage.setItem('inProgressRecipes', JSON.stringify({
    cocktails: {
      [id]: [name],
    },
    meals: {
      [id]: [name],
    },
  }));
};

export default localStorageManagerIngredients;
