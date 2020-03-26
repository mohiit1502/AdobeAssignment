import React from 'react';
import PropTypes from 'prop-types';

import Search from './../Search'
import CartIcon from './../CartIcon'

const Header = props => {
  return (
    <header className='c-Header'>
      <Search />
      <CartIcon />
    </header>
  );
};

Header.defaultProps = {

};

Header.propTypes = {

};

export default Header;