import React from 'react';
import PropTypes from 'prop-types';

export default function GroupButtonDone({ handleClick }) {
  return (
    <div className="container px-1 flex gap-1 mt-4 mb-6">
      <button
        type="button"
        className="px-4 py-2 text-sm transition-colors duration-300
        rounded-full shadow-md text-violet-100 bg-orange-500
        hover:bg-orange-600 shadow-orange-400 w-28"
        onClick={ () => handleClick('all') }
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

GroupButtonDone.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
