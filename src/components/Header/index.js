import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

function Header({ title, isSearch }) {
  return (
    <header className="header">
      <FontAwesomeIcon icon="fa-solid fa-user" size="2x" color="#f5f5f5" />
      <h1 className="title">{ title }</h1>
      { isSearch ? (
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="2x" color="#f5f5f5" />)
        : (<div />) }
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
