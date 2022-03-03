const validationLocalStorage = (params, type) => {
  const { id, setLabelButton } = params;
  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  if (itemLST !== null && itemLST.recipesCount && itemLST.recipesCount[type]) {
    const storage = Number(itemLST.recipesCount[type][id]) || 0;
    const countChecked = itemLST !== null && storage;
    setLabelButton(countChecked !== 0 ? 'Continuar Receita' : 'Iniciar Receita');
  } else {
    setLabelButton('Iniciar Receita');
  }
};

export default validationLocalStorage;
