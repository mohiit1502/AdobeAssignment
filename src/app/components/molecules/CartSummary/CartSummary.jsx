import React from 'react';
import PropTypes from 'prop-types';
import './CartSummary.component.scss';

const CartSummary = ({cartItems, products}) => {

  const totalData = cartItems && Object.keys(cartItems).reduce((priceAccumulator, productId) => {
    const matchedProducts = products.filter(product => product.id === productId)
    const price = matchedProducts && matchedProducts.length > 0 && matchedProducts[0].price.display
    const discount = matchedProducts && matchedProducts.length > 0 && matchedProducts[0].discountAmount
    priceAccumulator.totalPrice = priceAccumulator.totalPrice + (price * cartItems[productId])
    priceAccumulator.discount = priceAccumulator.discount + (discount * cartItems[productId])
    return priceAccumulator
  }, {totalPrice: 0, discount: 0})

  return (
    <section className='c-CartSummary'>
      <div className="c-CartSummary__inner">
        <div className="container">
          <header className="c-CartSummary__headerRow row">
            <div className="col-12">
              <p className="c-CartSummary__headerContent">PRICE DETAILS</p>
            </div>
          </header>
          <section className="c-CartSummary__details">
            <div className="c-CartSummary__price row">
              <div className="col-6"><p>Total Price</p></div>
              <div className="col-1"><p>:</p></div>
              <div className="col-5"><p className="float-right">&#x20B9;{totalData.totalPrice}</p></div>
            </div>
            <div className="c-CartSummary__discount row">
              <div className="col-6"><p>Discount</p></div>
              <div className="col-1"><p>:</p></div>
              <div className="col-5"><p className="float-right">&#x20B9;{totalData.discount}</p></div>
            </div>
          </section>
          <div className="c-CartSummary__total row">
            <div className="col-7">Total Payable</div>
            <div className="col-5"><p className="float-right">&#x20B9;{totalData.totalPrice - totalData.discount}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartSummary.defaultProps = {

};

CartSummary.propTypes = {
  cartItems: PropTypes.object,
  products: PropTypes.array
};

export default CartSummary;