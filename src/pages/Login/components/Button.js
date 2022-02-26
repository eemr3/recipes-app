import React from 'react';
import PropTypes from 'prop-types';

function Button({ handleClickLogin, validateForm }) {
  return (
    <div className="mt-10">
      <button
        onClick={ handleClickLogin }
        disabled={ !validateForm() }
        type="button"
        className="bg-orange-600 text-gray-100 p-4 w-full rounded-full tracking-wide
              font-semibold font-display focus:outline-none focus:shadow-outline
              hover:bg-orange-700
              shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Log In
      </button>
    </div>
  );
}

Button.propTypes = {
  handleClickLogin: PropTypes.func.isRequired,
  validateForm: PropTypes.func.isRequired,
};
export default Button;
