import React from 'react';

export default function Search() {
  return (
    <div className="search-bar">
      <div className="input-search">
        <input type="text" placeholder="Faça sua busca..." />
      </div>
      <div className="radio-buttons">
        <label htmlFor="ingredient">
          <input id="ingredient" type="radio" name="ingredient" value="ingredient" />
          { ' Ingrediente' }
        </label>
        <label htmlFor="name">
          <input id="name" type="radio" name="name" value="name" />
          { ' Nome' }
        </label>
        <label htmlFor="firstName">
          <input id="firstName" type="radio" name="firstName" value="firstName" />
          { ' Primeiro Nome' }
        </label>
      </div>
    </div>
  );
}
