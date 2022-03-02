export const localStorageManagerIngredients = (prevState, params) => {
  const key = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const {
    id, name, type, countChecked,
  } = params;
  if (prevState) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...key,
      [type]: {
        ...key[type],
        [id]: key[type]
        && key[type][id] ? [...key[type][id], name] : [name],
      },
      recipesCount: {
        ...key.recipesCount,
        [type]: { [id]: countChecked + 1 },
      },
    }));
    // localStorage.setItem(id, countChecked + 1);
  } else {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...key,
      [type]: {
        ...key[type],
        [id]: key[type][id].filter((item) => item !== name),
      },
      recipesCount: {
        ...key.recipesCount,
        [type]: { [id]: countChecked - 1 },
      },
    }));
    // localStorage.setItem(id, countChecked - 1);
  }
};

export const getLocalStorageInProgress = (params) => {
  const { setIsChecked, route, id, nameIngrediente, setCountChecked } = params;
  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  switch (route) {
  case 'drinks':
    if (itemLST && itemLST.cocktails && itemLST.cocktails[id]) {
      setIsChecked(itemLST.cocktails[id]
        .some((item) => item.includes(nameIngrediente)));
      setCountChecked(Number(itemLST.recipesCount.cocktails[id]) || 0);
    }
    // if (itemLST && itemLST.recipesCount && itemLST.recipesCount[id]) {
    //   setCountChecked(Number(itemLST.recipesCount.cocktails[id]) || 0);
    // }
    break;
  case 'foods':
    if (itemLST && itemLST.meals && itemLST.meals[id]) {
      setIsChecked(itemLST.meals[id]
        .some((item) => item.includes(nameIngrediente)));
      setCountChecked(Number(itemLST.recipesCount.meals[id]) || 0);
    }
    // if (itemLST && itemLST.recipesCount && itemLST.recipesCount[id]) {
    //   setCountChecked(Number(itemLST.recipesCount.cocktails[id]) || 0);
    // }
    break;
  default:
    break;
  }
};
