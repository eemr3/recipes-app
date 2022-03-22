const setFavoriteRecipeInStorage = (items) => localStorage
  .setItem('favoriteRecipes', JSON.stringify(items));

export default setFavoriteRecipeInStorage;
