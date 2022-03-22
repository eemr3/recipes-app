import React from 'react';
import PropTypes from 'prop-types';
import ShareIcon from '../../../../images/shareIcon.svg';
import ButtonFavorite from '../../../../components/ButtonFavorite';

export default function CardFavorites({ categoty, nationality, name, image, id }) {
  return (
    <div
      className="h-36 border flex shadow-md rounded-lg m-3"
      style={ { width: '340px' } }
    >
      <div className="w-40 h-36 mr-5 rounded-lg">
        <img
          className="w-40 h-36 rounded-bl-lg rounded-tl-lg"
          src={ image }
          alt={ name }
        />
      </div>
      <div className="flex flex-col w-2/4">
        <div className="flex flex-col">
          <div className="items-start">
            <span className="px-2">{ categoty }</span>
            <span className="px-2">{ nationality }</span>
          </div>
          <div>
            <p className="text-xl">{ name }</p>
          </div>
        </div>
        <div className="flex justify-center gap-3 mr-2">
          <img
            src={ ShareIcon }
            alt="Icon Share"
            onClick={ () => {} }
            aria-hidden="true"
            className="w-7"
          />
          <ButtonFavorite
            favoriteId={ id }
            favorite
          />
        </div>
      </div>
    </div>
  );
}

CardFavorites.propTypes = {
  categoty: PropTypes.string,
  nationality: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
};

CardFavorites.defaultProps = {
  categoty: '',
  nationality: '',
  name: '',
  image: '',
  id: '',
};
