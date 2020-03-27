import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPropsSelector} from 'reselect-immutable-helpers';
import {getProducts} from './../../../pages/PLP/selectors'
import {getCartItems, getCartTotalCount} from './../../../pages/Cart/selectors'
import {updateCart} from './../../../pages/Cart/actions'
import CartItem from './../CartItem';
import './CartList.component.scss';

const CartList = ({cartItems, products, isCartEmpty, cartTotalCount, updateCart}) => {

  const removeItem = (productId) => {
    const quantity = cartItems && cartItems[productId]
    cartItems && delete cartItems[productId]
    let updatedTotalCount = cartTotalCount - quantity
    updateCart(updatedTotalCount, cartItems)
  }

  const cartItemTiles = !isCartEmpty && Object.keys(cartItems).map((itemId, key) => {
    const product = products && products.length > 0 && products.filter(product => product.id === parseInt(itemId))[0]
    return (
      <CartItem 
        product={product}
        count={cartItems[itemId]}
        cartItems={cartItems}
        cartTotalCount={cartTotalCount}
        updateCart={updateCart}
        removeItem={removeItem}
        key={key}
      />
    )
  })

  return (
    <section className='c-CartList'>
      {cartItemTiles}
    </section>
  );
};

CartList.defaultProps = {

};

CartList.propTypes = {
  cartItems: PropTypes.object,
  cartTotalCount: PropTypes.number,
  isCartEmpty: PropTypes.bool,
  products: PropTypes.array,
  updateCart: PropTypes.func
};

const mapStateToProps = createPropsSelector({
  cartItems: getCartItems,
  cartTotalCount: getCartTotalCount,
  products: getProducts
})

const mapDispatchToProps = ({
  updateCart
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);