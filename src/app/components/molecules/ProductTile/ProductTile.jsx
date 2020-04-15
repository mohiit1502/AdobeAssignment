import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPropsSelector} from 'reselect-immutable-helpers';
import {CSSTransition} from 'react-transition-group';

import {updateCart} from './../../../pages/Cart/actions'
import {getCartTotalCount, getCartItems} from './../../../pages/Cart/selectors'

import Button from './../../atoms/Button'
import ItemPrice from '../ItemPrice/ItemPrice';

import './ProductTile.component.scss';
import dummyImage from './../../../static/images/dummyImage.jpeg';

const ProductTile = props => {

  const [rerender, setRerender] = useState(false)
  const product = props.product
  const addToCartButtonClass = "btn btn__addToCart"

  const updateCart = (productId) => {
    let cartTotalCount = props.cartTotalCount
    const cartItems = props.cartItems
    let count = cartItems && cartItems[productId] ? cartItems[productId] : 0
    cartItems[productId] = ++count
    props.updateCart(++cartTotalCount, cartItems)
  }

  fetch(product.img_url)
    .then((res) => {
      if (res.status !== 200) {
        product.img_url = dummyImage
        setRerender(true)
      } else {
        res.arrayBuffer().then((buffer) => {
          var base64Flag = 'data:image/jpeg;base64,';
          var imageStr = arrayBufferToBase64(buffer);
          product.img_url = base64Flag + imageStr
          setRerender(true)
        })
      }
    })
    .catch((err) => product.img_url = './dummyImage.jpeg')

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
  
    bytes.forEach((b) => binary += String.fromCharCode(b));
  
    return window.btoa(binary);
  };

  return (
    // <CSSTransition
    //   in={true}
    //   timeout={350}
    //   classNames="display"
    //   unmountOnExit
    // >
      <article
        className='c-Plp__c-ProductContainer__c-ProductTile c-Plp__c-ProductContainer__c-ProductTile--shadow col-6 col-md-4 col-lg-2'
        id={`product_${product.id}`}>
        <figure>
          <img className="c-Plp__c-ProductContainer__c-ProductTile__image" src={product.img_url} alt={product.name} style={{width: "100%"}} />
          {product.name && <figcaption className="c-Plp__c-ProductContainer__c-ProductTile__name">{product.name}</figcaption>}
        </figure>
        {/* <div className="c-Plp__c-ProductContainer__c-ProductTile__price__container">
          {product.discountedPrice && <span className="c-Plp__c-ProductContainer__c-ProductTile__price">&#x20B9;{product.discountedPrice}</span>}
          {
            hasDiscount &&
            (
              <React.Fragment>
                <span className="c-Plp__c-ProductContainer__c-ProductTile__price--strikethrough">{product.price}</span>
                <span className="c-Plp__c-ProductContainer__c-ProductTile__discount">{product.discount}% off</span>
              </React.Fragment>
            )
          }
        </div> */}
        <ItemPrice product={product} />
        <Button
          classes={addToCartButtonClass}
          buttonValue="add-to-cart"
          buttonType="button"
          buttonName="addToCartButton"
          buttonText="Add To Cart"
          onClickHandler={() => updateCart(product.id)} />
      </article>
    // </CSSTransition>
  );
};

ProductTile.propTypes = {
  updateCart: PropTypes.func,
  cartTotalCount: PropTypes.number,
  cartItems: PropTypes.object
};

const mapStateToProps = createPropsSelector({
  cartTotalCount: getCartTotalCount,
  cartItems: getCartItems
})

const mapDispatchToProps = ({
  updateCart
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTile);