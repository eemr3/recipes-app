import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalContext from '../../../context/GlobalContext';
import {
  requestNameFoods, requestIngredientFoods, requestFirstNameFoods,
  requestNameDrinks, requestIngredientDrinks, requestFirstNameDrinks,
} from '../../../services/api';

const MESSAGE_ALERT = 'Desculpe, não encontramos nenhuma receita para esses filtros!';

export default function Search() {
  const { pathname } = useLocation();

  const { setSearchBar } = useContext(GlobalContext);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('');

  const handleInput = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchType(value);
  };

  const getNameSearch = async () => {
    let data;
    if (pathname === '/foods') data = await requestNameFoods(search);
    if (pathname === '/drinks') data = await requestNameDrinks(search);
    if (data === null || data === undefined) {
      setSearchBar([]);
      return global.alert(MESSAGE_ALERT);
    }
    setSearchBar(data);
  };

  const getIngredientSearch = async () => {
    let data;
    if (pathname === '/foods') data = await requestIngredientFoods(search);
    if (pathname === '/drinks') data = await requestIngredientDrinks(search);
    if (data === null || data === undefined) {
      setSearchBar([]);
      return global.alert(MESSAGE_ALERT);
    }
    setSearchBar(data);
  };

  const getFirstNameSearch = async () => {
    let data;
    if (pathname === '/foods') data = await requestFirstNameFoods(search);
    if (pathname === '/drinks') data = await requestFirstNameDrinks(search);
    if (data === null || data === undefined) {
      setSearchBar([]);
      return global.alert(MESSAGE_ALERT);
    }
    setSearchBar(data);
  };

  const handleClick = (type) => {
    if (type === 'firstName' && search.length !== 1) {
      setSearch('');
      return global.alert('Sua pesquisa deve ter apenas 1 (uma) letra!');
    }
    setSearch('');
    switch (type) {
    case 'name':
      return getNameSearch();
    case 'ingredient':
      return getIngredientSearch();
    case 'firstName':
      return getFirstNameSearch();
    default:
      return null;
    }
  };

  return (
    <div className="search-bar">
      <div className="input-search">
        <input
          type="text"
          placeholder="Faça sua busca..."
          name="search"
          value={ search }
          onChange={ handleInput }
          style={ { color: 'black' } }
        />
        <button
          className="mx-2 px-5 text-white transition-colors duration-150
          border border-white rounded-lg focus:shadow-outline
          hover:text-black"
          type="button"
          onClick={ () => handleClick(searchType) }
        >
          Buscar
        </button>
      </div>
      <div className="radio-buttons">
        <label htmlFor="ingredient">
          <input
            id="ingredient"
            type="radio"
            name="type-search"
            value="ingredient"
            onChange={ handleChange }
          />
          { ' Ingrediente' }
        </label>
        <label htmlFor="name">
          <input
            id="name"
            type="radio"
            name="type-search"
            value="name"
            onChange={ handleChange }
          />
          { ' Nome' }
        </label>
        <label htmlFor="firstName">
          <input
            id="firstName"
            type="radio"
            name="type-search"
            value="firstName"
            onChange={ handleChange }
          />
          { ' Primeira Letra' }
        </label>
      </div>
    </div>
  );
}
