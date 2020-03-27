import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.component.scss';
import SectionLoader from '../SectionLoader/SectionLoader';
import ItemPrice from '../ItemPrice/ItemPrice';
import QuantityControlWidget from '../QuantityControlWidget/QuantityControlWidget';

const CartItem = ({count, cartTotalCount, cartItems, product, removeItem, updateCart}) => {

  return product ?
    <article className='c-Cart__c-CartList__c-CartItem'>
      <div className="container">
        <div className="row">
          <div className="c-Cart__c-CartList__c-CartItem__inner col-4 col-md-3 col-lg-3">
            <img className="c-Cart__c-CartList__c-CartItem__image" src={product.img_url} alt={product.name} style={{width: "100%"}} />
          </div>
          <div className="c-Cart__c-CartList__c-CartItem__inner col-8 col-md-9 col-lg-9">
            {product.name && <p className="c-Cart__c-CartList__c-CartItem__name">{product.name}</p>}
            <ItemPrice product={product} />
            <QuantityControlWidget count={count} productId={product.id} cartTotalCount={cartTotalCount}
              cartItems={cartItems} updateCart={updateCart} removeItem={removeItem} />
            <p className="c-Cart__c-CartList__c-CartItem__buttonItemRemove" onClick={() => removeItem(product.id)}>REMOVE</p>
          </div>
        </div>
      </div>
    </article> : <SectionLoader />
};

CartItem.defaultProps = {

};

CartItem.propTypes = {
  count: PropTypes.number,
  cartTotalCount: PropTypes.number,
  cartItems: PropTypes.object,
  product: PropTypes.object,
  removeItem: PropTypes.func,
  updateCart: PropTypes.func
};

export default CartItem;