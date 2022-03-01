const setFavoriteRecipeInSotage = (items) => localStorage
  .setItem('favoriteRecipes', JSON.stringify(items));

export default setFavoriteRecipeInSotage;
