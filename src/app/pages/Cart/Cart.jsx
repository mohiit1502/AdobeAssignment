import React from 'react';
import './Cart.module.scss';

import Header from './../../components/molecules/Header'
import CartList from './../../components/molecules/CartList'
import CartSummary from './../../components/molecules/CartSummary'
import Footer from './../../components/molecules/Footer'

const Cart = props => {
  return (
    <div className="c-Cart">
      <Header inCart={true} />
      <main className="container c-Cart__mainContent">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8">
            <CartList />
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <CartSummary />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

Cart.defaultProps = {

};

Cart.propTypes = {

};

export default Cart;