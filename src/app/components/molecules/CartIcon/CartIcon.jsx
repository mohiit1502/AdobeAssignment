import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './CartIcon.component.scss';
import {withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { createPropsSelector } from 'reselect-immutable-helpers';

import {getCartTotalCount} from './../../../pages/Cart/selectors'

const CartIcon = props => {

  const navigateToCart = () => {
    props.history.push('/view/cart')
  }

  return (
    <div className='c-Plp__c-Header__c-CartIcon header-icon' onClick={navigateToCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="c-Plp__c-Header__c-CartIcon__badge">{props.cartTotalCount}</span>
    </div>
  );
};

CartIcon.propTypes = {
  cartTotalCount: PropTypes.number
};

const mapStateToProps = createPropsSelector({
  cartTotalCount: getCartTotalCount
})

export default connect(mapStateToProps)(withRouter(CartIcon));