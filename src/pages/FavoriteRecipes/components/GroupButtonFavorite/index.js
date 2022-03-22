import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../../../context/GlobalContext';

export default function GroupButtonFavorite({ setRenderFavorites }) {
  const { favoriteStorage } = useContext(GlobalContext);

  const handleClick = (type) => {
    setRenderFavorites(favoriteStorage.filter((favorite) => favorite.type === type));
  };

  return (
    <div className="container px-1 flex gap-1 mt-4 mb-6">
      <button
        type="button"
        className="px-4 py-2 text-sm transition-colors duration-300
        rounded-full shadow-md text-violet-100 bg-orange-500
        hover:bg-orange-600 shadow-orange-400 w-28"
        onClick={ () => setRenderFavorites(favoriteStorage) }
      >
        All
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm transition-colors duration-300
        rounded-full shadow-md text-violet-100 bg-orange-500
        hover:bg-orange-600 shadow-orange-400 w-28"
        onClick={ () => handleClick('meals') }
      >
        Comidas
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm transition-colors duration-300
        rounded-full shadow-md text-violet-100 bg-orange-500
        hover:bg-orange-600 shadow-orange-400 w-28"
        onClick={ () => handleClick('drinks') }
      >
        Bebidas
      </button>
    </div>
  );
}

GroupButtonFavorite.propTypes = {
  setRenderFavorites: PropTypes.func.isRequired,
};
