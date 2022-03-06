import React from 'react';
import PropTypes from 'prop-types';

export default function CardDoneFoodsAndDrinks({
  title,
  image,
  alcolic,
  date,
  tags,
  category,
  nationality,
}) {
  return (
    <div
      className="h-36 border flex shadow-md rounded-lg"
      style={ { width: '340px' } }
    >
      <div className="w-40 h-36 mr-5 rounded-lg">
        <img
          className="w-40 h-36 rounded-bl-lg rounded-tl-lg"
          src={ image }
          alt={ title }
        />
      </div>
      <div>
        <div className="flex mt-3">
          <p className="mr-5 text-sm">
            {alcolic || `${nationality} - ${category}` }
          </p>
          <img className="w-6" src="http://localhost:3000/static/media/shareIcon.9cfa056b0879ec3fd7430f49da6a8718.svg" alt="" />
        </div>
        <div className="mt-0">
          <h3 className="text-xl">{title}</h3>
          <p className="mt-3 text-sm">
            `Feito em:
            { ' ' }
            {date }
            `
          </p>
        </div>
        <div className="mt-3 flex gap-2">
          {tags.length ? tags.map((tag, index) => (
            <span
              className="px-2  rounded-md bg-gray-200"
              key={ `${index}-${tag}` }
            >
              {tag}

            </span>

          )) : ''}
        </div>
      </div>
    </div>
  );
}

CardDoneFoodsAndDrinks.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  alcolic: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.string,
  nationality: PropTypes.string,
};

CardDoneFoodsAndDrinks.defaultProps = {
  title: '',
  image: '',
  alcolic: '',
  date: '',
  tags: [],
  category: '',
  nationality: '',
};
