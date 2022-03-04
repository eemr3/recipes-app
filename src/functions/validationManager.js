const validationLocalStorage = (params, type) => {
  const { id, setLabelButton } = params;
  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  if (itemLST !== null && itemLST[type] && itemLST[type][id]
    && itemLST[type][id].recipesCount) {
    const countChecked = Number(itemLST[type][id].recipesCount) || 0;
    setLabelButton(countChecked !== 0 ? 'Continuar Receita' : 'Iniciar Receita');
  } else {
    setLabelButton('Iniciar Receita');
  }
};

export default validationLocalStorage;
