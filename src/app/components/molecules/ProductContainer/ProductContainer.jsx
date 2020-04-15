import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPropsSelector} from 'reselect-immutable-helpers';
import {dispatchProducts, dispatchSearchString} from './../../../pages/PLP/actions'
import {getFilterRange, getSortSelection, getSearchString} from './../../../pages/PLP/selectors'
import ProductTile from './../ProductTile'
import PageLoader from '../PageLoader/PageLoader';
import './ProductContainer.component.scss'

const ProductContainer = props => {

  const fr = props.filterRange
  const sb = props.sortBy
  const ss = props.searchString

  const [filterNoMatch, setFilterNoMatch] = useState(false)

  const getEmptyPlpBlock = () => {
    return (
      <div className="c-Cart__emptyPlp">
        <h3>No Products match the search criteria!</h3>
        <p className="c-Cart__emptyPlp__information">Please modify Search or filter criteria, and try again.</p>          
      </div>
    )
  }
    
  let productsWithDiscountedPrice = props.products 
    && props.products.length !== 0
    && props.products.map(product => {
      const price = product.price.display
      const discount = product.discount && price * (product.discount/100)
      product.discountAmount = Math.ceil(discount)
      product.discountedPrice = Math.ceil(price - product.discountAmount)
      return product
    })
  if (productsWithDiscountedPrice) {
    if (sb) {
      switch(sb) {
        case "priceHtoL":
          productsWithDiscountedPrice.sort((prod1, prod2) => prod2.discountedPrice - prod1.discountedPrice);
          break;
        case "priceLtoH":
          productsWithDiscountedPrice.sort((prod1, prod2) => prod1.discountedPrice - prod2.discountedPrice);
          break;
        case "discount":
          productsWithDiscountedPrice.sort((prod1, prod2) => prod2.discount - prod1.discount);
          break;
        default:
          break;
      }
    }
  
    let productsWithDiscountedPriceFiltered = [...productsWithDiscountedPrice]
    const noOfProducts = productsWithDiscountedPrice.length
    if (fr) {
      productsWithDiscountedPriceFiltered = productsWithDiscountedPrice.filter(prod => prod.discountedPrice > fr.min && prod.discountedPrice < fr.max);
      productsWithDiscountedPrice = productsWithDiscountedPriceFiltered
    }

    if (ss && ss !== "") {
      productsWithDiscountedPriceFiltered = productsWithDiscountedPrice.filter(prod => {
        return (prod.name.toLowerCase().includes(ss.toLowerCase())
        || prod.category.toLowerCase().includes(ss.toLowerCase())
        || prod.img_url.toLowerCase().includes(ss.toLowerCase()));
      });
    }
    if (noOfProducts > 0 && productsWithDiscountedPriceFiltered.length === 0) {
      !filterNoMatch && setFilterNoMatch(true)
    } else {
      filterNoMatch && setFilterNoMatch(false)
    }
    productsWithDiscountedPrice = productsWithDiscountedPriceFiltered
  }

  const productTiles = productsWithDiscountedPrice && productsWithDiscountedPrice.map((product, key) =>{
    return <ProductTile product={product} key={key} />
  })
  props.dispatchProducts(productsWithDiscountedPrice)

  const clearSearch = () => {
    props.dispatchSearchString("")
  }

  return <main className='c-Plp__c-ProductContainer'>
      {
        filterNoMatch ? getEmptyPlpBlock() : props.products && props.products.length !== 0 ?
          <div className="container">
            {
              ss && ss !== "" &&
                <div className="row">
                  <div className="col-12 c-Plp__c-ProductContainer__infoContainer">
                    <span className="c-Plp__c-ProductContainer__information">Showing Results for the search - "{ss}"</span>
                    <p><button type="button" className="c-Plp__c-ProductContainer__btnClearSearch" onClick={clearSearch}>Clear Search</button></p>
                  </div>
                </div>
            }
            <div className="row c-Plp__c-ProductContainer__row">
              {productTiles}
            </div>
          </div> : <PageLoader />
        }
    </main>
};

ProductContainer.defaultProps = {
  products: []
};

ProductContainer.propTypes = {
  products: PropTypes.array,
  sortBy: PropTypes.string
};

const mapStateToProps = createPropsSelector({
  filterRange: getFilterRange,
  searchString: getSearchString,
  sortBy: getSortSelection
})

const mapDispatchToProps = ({
  dispatchProducts, dispatchSearchString
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);