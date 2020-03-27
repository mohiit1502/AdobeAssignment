import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {dispatchProducts} from './../../../pages/PLP/actions'
import ProductTile from './../ProductTile'
import PageLoader from '../PageLoader/PageLoader';

const ProductContainer = props => {

  const productsWithDiscountedPrice = props.products 
    && props.products.length !== 0
    && props.products.map(product => {
      const discount =  product.discount && product.price * (product.discount/100)
      product.discountedPrice = Math.ceil(product.price - discount)
      return product
    })

  const productTiles = productsWithDiscountedPrice && productsWithDiscountedPrice.map((product, key) =>{
    return <ProductTile product={product} key={key} />
  })
  props.dispatchProducts(productsWithDiscountedPrice)

  return props.products && props.products.length !== 0 ?
    <main className='c-Plp__c-ProductContainer'>
      <div className="container">
        <div className="row">
          {productTiles}
        </div>
      </div>
    </main> : <PageLoader />
};

ProductContainer.defaultProps = {
  products: []
};

ProductContainer.propTypes = {
  products: PropTypes.array
};

const mapDispatchToProps = ({
  dispatchProducts
})

export default connect(
  null,
  mapDispatchToProps
)(ProductContainer);