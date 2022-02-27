import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Cards({ name, image, url }) {
  return (
    <Link to={ url }>
      <div className="group relative">
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
        <div className="mt-4 flex justify-center">
          <h5
            className="text-gray-700"
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
};

Cards.defaultProps = {
  name: '',
  image: '',
  url: '',
};

export default Cards;
