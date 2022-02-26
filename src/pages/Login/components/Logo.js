import React from 'react';
import LogoFoodie from '../../../images/LogoFoodie.svg';

function Logo() {
  return (
    <div
      className="py-8 lg:bg-white lg:py-12 flex justify-center
   lg:justify-start lg:px-12"
    >
      <div className="w-40 lg:w-full flex justify-center">
        <img src={ LogoFoodie } alt="" />
      </div>
    </div>
  );
}

export default Logo;
