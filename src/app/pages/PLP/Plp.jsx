import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {dispatchProducts} from './actions';

import Header from './../../components/molecules/Header'
import SortAndFilterPanel from './../../components/molecules/SortAndFilterPanel'
import ProductContainer from './../../components/molecules/ProductContainer'
import Footer from './../../components/molecules/Footer'

const Plp = ({dispatchProducts}) => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://api.myjson.com/bins/qzuzi')
      .then(res => res.json())
      .then(products => {
        // console.log(products)
        setProducts(products)
        dispatchProducts(products)
      })
  }, [])

  return (
      <div className="c-Plp">
        <Header />
        <SortAndFilterPanel />
        <ProductContainer products={products} />
        <Footer />
      </div>
  )
};

Plp.propTypes = {
  dispatchProducts: PropTypes.func
};

const mapDispatchToProps = ({
  dispatchProducts
})

export default connect(
  null,
  mapDispatchToProps
)(Plp);