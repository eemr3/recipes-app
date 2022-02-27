import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../../context/GlobalContext';
import {
  requestNameFoods, requestIngredientFoods, requestFirstNameFoods,
} from '../../../services/api';

const TWELVE = 12;

export default function Search() {
  const { location: { pathname } } = useHistory();

  const {
    setNameSearch,
    setIngredientSearch,
    setFirstSearch,
  } = useContext(GlobalContext);
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
      setNameSearch(data.slice(0, TWELVE));
    } catch (error) {
      console.error(error);
    }
  };

  const getIngredientSearch = async (router) => {
    try {
      const data = await requestIngredientFoods(search, router);
      setIngredientSearch(data.slice(0, TWELVE));
    } catch (error) {
      console.error(error);
    }
  };

  const getFirstNameSearch = async (router) => {
    try {
      const data = await requestFirstNameFoods(search, router);
      setFirstSearch(data.slice(0, TWELVE));
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (type) => {
    switch (type) {
    case 'name':
      return getNameSearch(pathname);
    case 'ingredient':
      return getIngredientSearch(pathname);
    case 'firstName':
      return getFirstNameSearch(pathname);
    default:
      return '';
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
          { ' Primeiro Nome' }
        </label>
      </div>
    </div>
  );
}
