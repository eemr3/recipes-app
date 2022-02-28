const setFavoriteRecipeInSotage = (items) => {
  console.log(items);
  return localStorage
    .setItem('favorite', JSON.stringify([{
      id: items.id,
      type: items.type,
      nationality: items.nationality ? items.nationality : '',
      category: items.category ? items.category : '',
      alcoholicOrNot: items.alcoholicOrNot ? items.alcoholicOrNot : '',
      name: items.name,
      image: items.image,
    }]));
};

export default setFavoriteRecipeInSotage;
