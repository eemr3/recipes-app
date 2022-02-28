const setDataForInStorage = (data) => ({
  id: data.idMeal,
  type: 'Comida',
  nationality: data.strArea,
  category: data.strCategory,
  alcoholicOrNot: data.strAlcoholic,
  name: data.strMeal,
  image: data.strMealThumb,
});

export default setDataForInStorage;
