import React from 'react';

export default function GroupButtonFavorite() {
  return (
    <div className="container px-1 flex gap-1 mt-4 mb-6">
      <button
        type="button"
        className="px-4 py-2 text-sm transition-colors duration-300
        rounded-full shadow-md text-violet-100 bg-orange-500
        hover:bg-orange-600 shadow-orange-400 w-28"
      >
        All
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm transition-colors duration-300
        rounded-full shadow-md text-violet-100 bg-orange-500
        hover:bg-orange-600 shadow-orange-400 w-28"
      >
        Comidas
      </button>
      <button
        type="button"
        className="px-4 py-2 text-sm transition-colors duration-300
        rounded-full shadow-md text-violet-100 bg-orange-500
        hover:bg-orange-600 shadow-orange-400 w-28"
      >
        Bebidas
      </button>
    </div>
  );
}
