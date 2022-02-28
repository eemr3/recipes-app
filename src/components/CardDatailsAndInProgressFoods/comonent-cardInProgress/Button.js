import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, disabled, onClick }) {
  return (
    <button
      className="w-full bg-orange-500 p-2 text-white"
      type="button"
      disabled={ disabled }
      onClick={ onClick }
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
};
