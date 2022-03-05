export const localStorageManagerIngredients = (prevState, params) => {
  const key = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const { id, name, type, countChecked } = params;

  if (prevState) {
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify({
        ...key,
        [type]: {
          ...key[type],
          [id]: {
            ingredients: key[type] && key[type][id]
              ? [...key[type][id].ingredients, name] : [name],
            recipesCount: countChecked + 1,
          },
        },
      }),
    );
  } else {
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify({
        ...key,
        [type]: {
          ...key[type],
          [id]: {
            ingredients: key[type][id].ingredients.filter((item) => item !== name),
            recipesCount: countChecked - 1,
          },
        },
      }),
    );
  }
};

export const getLocalStorageInProgress = (params) => {
  const { setIsChecked, route, id, nameIngrediente, setCountChecked } = params;
  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  switch (route) {
  case 'drinks':
    if (itemLST && itemLST.cocktails && itemLST.cocktails[id]) {
      setIsChecked(
        itemLST.cocktails[id].ingredients.some((item) => item.includes(nameIngrediente)),
      );
      setCountChecked(Number(itemLST.cocktails[id].recipesCount) || 0);
    }
    break;
  case 'foods':
    if (itemLST && itemLST.meals && itemLST.meals[id]) {
      setIsChecked(
        itemLST.meals[id].ingredients.some((item) => item.includes(nameIngrediente)),
      );
      setCountChecked(Number(itemLST.meals[id].recipesCount) || 0);
    }
    break;
  default:
    break;
  }
};
