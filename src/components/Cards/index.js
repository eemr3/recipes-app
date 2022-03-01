import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const STYLE = 'bg-slate-50 rounded-lg drop-shadow-md';

function Cards({ name, image, url, category }) {
  return (
    <Link to={ url }>
      <div className={ `roup relative mb-1.5 ${category.length > 0 && STYLE}` }>
        <div
          className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1
    rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
        >
          <img
            src={ image }
            alt={ name }
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        { category.length > 0 && (
          <div className="mt-1 w-full">
            <h5
              className="text-gray-400 text-left px-1"
            >
              {category}
            </h5>
          </div>)}
        <div className={ `w-full ${category.length === 0 && 'mt-4'}` }>
          <h5
            className={ `text-gray-700 ${category.length > 0
              ? 'text-left text-lg px-1' : 'text-center'}` }
          >
            {name}
          </h5>
        </div>
      </div>
    </Link>
  );
}

Cards.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  category: PropTypes.string,
};

Cards.defaultProps = {
  name: '',
  image: '',
  url: '',
  category: '',
};

export default Cards;
