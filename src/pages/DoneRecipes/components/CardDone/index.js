import React from 'react';

export default function CardDoneAndFavoriteDrinks() {
  return (
    <div
      className="h-36 border flex shadow-md rounded-lg"
      style={ { width: '340px' } }
    >
      <div className="w-40 h-36 mr-5 rounded-lg">
        <img className="w-40 h-36 rounded-bl-lg rounded-tl-lg" src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" alt="" />
      </div>
      <div>
        <div className="flex mt-3">
          <p className="mr-5 text-sm">British - Dessert</p>
          <img className="w-6" src="http://localhost:3000/static/media/shareIcon.9cfa056b0879ec3fd7430f49da6a8718.svg" alt="" />
        </div>
        <div className="mt-0">
          <h3 className="text-xl">Chelsea Buns</h3>
          <p className="mt-3 text-sm">Done in: 20/10/2019 </p>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="px-2  rounded-md bg-gray-200">bun</span>
          <span className="px-2  rounded-md bg-gray-200">baking</span>
        </div>
      </div>
    </div>
  );
}
