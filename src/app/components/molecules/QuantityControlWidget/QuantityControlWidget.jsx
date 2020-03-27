import React from 'react';
import PropTypes from 'prop-types';
import './QuantityControlWidget.component.scss';

const QuantityControlWidget = ({cartTotalCount, cartItems, count, productId, removeItem, updateCart}) => {

  const updateCartHandler = (operationType) => {
    let countUpdated = count
    if (operationType === "remove") {
      countUpdated = countUpdated ? --countUpdated : 0
      countUpdated === 0 ? removeItem(productId) : cartItems[productId] = countUpdated
      cartTotalCount = --cartTotalCount
    } else {
      countUpdated = countUpdated ? ++countUpdated : 1
      cartItems[productId] = countUpdated
      cartTotalCount = ++cartTotalCount
    }
    updateCart(cartTotalCount, cartItems)
  }

  return (
    <div className='c-QuantityControlWidget'>
      <div
        className="c-QuantityControlWidget__part c-QuantityControlWidget__part--minus c-QuantityControlWidget__part--circled"
        onClick={() => updateCartHandler("remove")}
      >
        <span>-</span>
      </div>
      <div
        className="c-QuantityControlWidget__part c-QuantityControlWidget__part--squared"
      >
        <span>{count}</span>
      </div>
      <div
        className="c-QuantityControlWidget__part c-QuantityControlWidget__part--plus c-QuantityControlWidget__part--circled"
        onClick={() => updateCartHandler("add")}
      >
          <span>+</span>
      </div>
    </div>
  );
};

QuantityControlWidget.defaultProps = {

};

QuantityControlWidget.propTypes = {
  cartTotalCount: PropTypes.number,
  cartItems: PropTypes.object,
  count: PropTypes.number,
  productId: PropTypes.number,
  removeItem: PropTypes.func,
  updateCart: PropTypes.func
};

export default QuantityControlWidget;