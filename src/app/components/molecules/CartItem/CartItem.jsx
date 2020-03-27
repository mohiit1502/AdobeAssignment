import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.component.scss';
import SectionLoader from '../SectionLoader/SectionLoader';
import ItemPrice from '../ItemPrice/ItemPrice';

const CartItem = ({product}) => {

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
          </div>
        </div>
      </div>
    </article> : <SectionLoader />
};

CartItem.defaultProps = {

};

CartItem.propTypes = {
  product: PropTypes.object
};

export default CartItem;