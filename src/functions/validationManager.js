const validationLocalStorage = (id, type, callback) => {
  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  if (itemLST !== null && itemLST.recipesCount && itemLST.recipesCount[type]) {
    const storage = Number(itemLST.recipesCount[type][id]) || 0;
    const countChecked = itemLST !== null && storage;
    callback(countChecked !== 0 ? 'Continuar Receita' : 'Iniciar Receita');
  } else {
    callback('Iniciar Receita');
  }
};

export default validationLocalStorage;
