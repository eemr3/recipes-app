const setDataForInStorage = (data, pathname) => {
  if (pathname.includes('foods')) {
    return {
      id: data.idMeal,
      type: 'meals',
      nationality: data.strArea,
      category: data.strCategory,
      alcoholicOrNot: data.strAlcoholic,
      name: data.strMeal,
      image: data.strMealThumb,
    };
  }
  if (pathname.includes('drinks')) {
    return {
      id: data.idDrink,
      type: 'drinks',
      nationality: data.strArea,
      category: data.strCategory,
      alcoholicOrNot: data.strAlcoholic,
      name: data.strDrink,
      image: data.strDrinkThumb,
    };
  }
};

export default setDataForInStorage;
