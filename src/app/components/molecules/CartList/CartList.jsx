import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPropsSelector} from 'reselect-immutable-helpers';
import {getProducts} from './../../../pages/PLP/selectors'
import {getCartItems} from './../../../pages/Cart/selectors'
import CartItem from './../CartItem';
import './CartList.component.scss';

const CartList = props => {

  const products = props.products
  const isCartEmpty = !props.cartItems || Object.keys(props.cartItems).length === 0
  const cartItemTiles = !isCartEmpty && Object.keys(props.cartItems).map((itemId, key) => {
    const product = products && products.length > 0 && products.filter(product => product.id === parseInt(itemId))[0]
    return <CartItem product={product} key={key} />
  })

  const getEmptyCartBlock = () => {
    return (
      <div className="c-CartList__emptyCart">
        <h3>Your cart is Empty!</h3>
        <p className="c-CartList__emptyCart__information">Please add some items from Available Products (use start button on top left)</p>
      </div>
    )
  }

  return (
    <section className='c-CartList'>
      {isCartEmpty ? getEmptyCartBlock() : cartItemTiles}
    </section>
  );
};

CartList.defaultProps = {

};

CartList.propTypes = {
  cartItems: PropTypes.object,
  products: PropTypes.array
};

const mapStateToProps = createPropsSelector({
  cartItems: getCartItems,
  products: getProducts
})

export default connect(mapStateToProps)(CartList);