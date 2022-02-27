import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavIcons({ title, isSearch, enable, setEnable }) {
  return (
    <div className="nav-icons">
      <Link to="/foods">
        <FontAwesomeIcon icon="fa-solid fa-user" size="2x" color="#f5f5f5" />
      </Link>
      <h1 className="title">{ title }</h1>
      <button type="button" onClick={ () => setEnable(!enable) }>
        { isSearch ? (
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            size="2x"
            color="#f5f5f5"
          />)
          : (<div />) }
      </button>
    </div>
  );
}

NavIcons.propTypes = {
  title: PropTypes.string.isRequired,
  isSearch: PropTypes.bool,
  enable: PropTypes.bool.isRequired,
  setEnable: PropTypes.func.isRequired,
};

NavIcons.defaultProps = {
  isSearch: false,
};
