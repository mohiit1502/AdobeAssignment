import React from 'react';
import PropTypes from 'prop-types';
import './ItemPrice.component.scss';

const ItemPrice = ({product}) => {

  const hasDiscount = !!product.discount && product.discount !== 0

  return (
    <div className='c-ItemPrice'>
      {product.discountedPrice && <span className="c-Plp__c-ProductContainer__c-ProductTile__price">&#x20B9;{product.discountedPrice}</span>}
      {
        hasDiscount &&
        (
          <React.Fragment>
            <span className="c-ItemPrice__price--strikethrough"> {product.price}</span>
            <span className="c-ItemPrice__discount">{product.discount}% off</span>
          </React.Fragment>
        )
      }
    </div>
  );
};

ItemPrice.defaultProps = {
  product: PropTypes.object
};

ItemPrice.propTypes = {

};

export default ItemPrice;