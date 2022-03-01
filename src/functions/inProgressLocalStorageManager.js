const localStorageManagerIngredients = (id, name, type, prevState) => {
  const key = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];

  if (prevState) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...key,
      [type]: {
        ...key[type],
        [id]: key[type]
        && key[type][id] ? [...key[type][id], name] : [name],
      },
    }));
  } else {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...key,
      [type]: {
        ...key[type],
        [id]: key[type][id].filter((item) => item !== name),
      },
    }));
  }
};

export default localStorageManagerIngredients;
