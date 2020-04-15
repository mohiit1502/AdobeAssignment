import React from 'react';
import {connect} from 'react-redux';
import {createPropsSelector} from 'reselect-immutable-helpers';
import {withRouter} from 'react-router-dom';
import {getProducts} from './../PLP/selectors';
import {getCartItems, getCartTotalCount} from './selectors'
import {updateCart} from './actions'
import './Cart.module.scss';

import Button from './../../components/atoms/Button'
import Header from './../../components/molecules/Header'
import CartList from './../../components/molecules/CartList'
import CartSummary from './../../components/molecules/CartSummary'
import Footer from './../../components/molecules/Footer'

const Cart = ({cartItems, cartTotalCount, history, products, updateCart}) => {

  const isCartEmpty = !cartItems || Object.keys(cartItems).length === 0
  
  const navigateToPlp = () => {
    history.push('/view/plp')
  }
  const getEmptyCartBlock = () => {
    return (
      <div className="c-Cart__emptyCart">
        <h3>Your cart is Empty!</h3>
        <p className="c-Cart__emptyCart__information">Please add some items from Available Products.</p>
        <Button
          buttonType="button"
          classes="btn btn__continueShopping"
          onClickHandler={navigateToPlp}
          buttonText="Continue Shopping"
        />
          
      </div>
    )
  }

  return (
    <div className="c-Cart">
      <Header inCart={true} />
      <main className="container c-Cart__mainContent">
        {
          isCartEmpty ? getEmptyCartBlock() : 
            (
              <div className="row">
                <div className="col-12 col-md-8 col-lg-8">
                  <CartList
                    cartItems={cartItems}
                    cartTotalCount={cartTotalCount}
                    products={products}
                    updateCart={updateCart} />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <CartSummary
                    cartItems={cartItems}
                    products={products} />
                </div>
              </div>
            )
        }
      </main>
      <Footer />
    </div>
  );
};

Cart.defaultProps = {

};

Cart.propTypes = {

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
)(withRouter(Cart));