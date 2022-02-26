import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

function Content({ children }) {
  return (
    <div className="lg:w-1/2 xl:max-w-screen-sm">
      <Logo />
      <div className="px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display
          font-semibold lg:text-left xl:text-5xl
          xl:text-bold"
        >
          Log in
        </h2>
        <div className="mt-12">
          <form>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Content;
