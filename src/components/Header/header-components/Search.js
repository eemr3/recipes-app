import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../../context/GlobalContext';
import {
  requestNameFoods, requestIngredientFoods, requestFirstNameFoods,
} from '../../../services/api';

export default function Search() {
  const { location: { pathname } } = useHistory();

  const { setSearchBar } = useContext(GlobalContext);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('');

  const handleInput = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchType(value);
  };

  const getNameSearch = async (router) => {
    try {
      const data = await requestNameFoods(search, router);
      setSearchBar(data);
    } catch (error) {
      console.log(error.name);
      setSearchBar([error.name]);
    }
  };

  const getIngredientSearch = async (router) => {
    try {
      const data = await requestIngredientFoods(search, router);
      setSearchBar(data);
    } catch (error) {
      setSearchBar([error.name]);
    }
  };

  const getFirstNameSearch = async (router) => {
    try {
      const data = await requestFirstNameFoods(search, router);
      setSearchBar(data);
    } catch (error) {
      setSearchBar([error.name]);
    }
  };

  const handleClick = (type) => {
    if (type === 'firstName' && search.length !== 1) {
      setSearch('');
      return global.alert('Sua pesquisa deve ter apenas 1 (uma) letra!');
    }
    setSearch('');
    switch (type) {
    case 'name':
      return getNameSearch(pathname);
    case 'ingredient':
      return getIngredientSearch(pathname);
    case 'firstName':
      return getFirstNameSearch(pathname);
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
