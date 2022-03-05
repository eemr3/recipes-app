import Copy from 'clipboard-copy';

const getListIngredients = (recipe, callback) => {
  const listIngredientsAndMeasure = [];
  const ingredientKeys = Object.keys(recipe)
    .filter((item) => item.includes('strIngredient'));
  const measureKeys = Object.keys(recipe)
    .filter((item) => item.includes('strMeasure'));
  const ingredients = ingredientKeys.map((key) => recipe[key])
    .filter((recip) => recip !== '' && recip !== null);
  const measure = measureKeys.map((key) => recipe[key])
    .filter((recip) => recip !== '' && recip !== null);
  for (let index = 0; index < ingredients.length; index += 1) {
    listIngredientsAndMeasure.push([ingredients[index], measure[index]]);
  }
  callback(listIngredientsAndMeasure);
};

const setLocalStorage = (type, id) => {
  const key = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  console.log(key);
  localStorage.setItem(
    'inProgressRecipes',
    JSON.stringify({
      ...key,
      [type]: {
        ...key[type],
        [id]: {
          ...key[type][id],
          recipesDone: true,
        },
      },
    }),
  );
};

export const handleClickDone = (id, type) => {
  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  if (itemLST !== null && itemLST[type] && itemLST[type][id]) {
    setLocalStorage(type, id);
  }
};

export const handleClickShare = (inProgress, notify) => {
  let url = window.location.href;
  if (inProgress) {
    url = url.replace('/in-progress', '');
    Copy(url);
  } else {
    Copy(url);
  }
  notify();
};

export default getListIngredients;
