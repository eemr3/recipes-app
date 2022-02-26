import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Search from './header-components/Search';
import NavIcons from './header-components/NavIcons';

function Header({ title, isSearch }) {
  const [enable, setEnable] = useState(false);

  return (
    <header className="header">
      <NavIcons
        title={ title }
        isSearch={ isSearch }
        enable={ enable }
        setEnable={ setEnable }
      />
      { enable && <Search /> }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isSearch: PropTypes.bool,
};

Header.defaultProps = {
  isSearch: false,
};

export default Header;
