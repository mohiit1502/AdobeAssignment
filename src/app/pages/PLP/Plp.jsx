import React from 'react';
import PropTypes from 'prop-types';
import styles from './Plp.module.scss';

import Header from './../../components/molecules/Header'
import SortAndFilterPanel from './../../components/molecules/SortAndFilterPanel'
import ProductContainer from './../../components/molecules/ProductContainer'
import Footer from './../../components/molecules/Footer'

const Plp = props => {
  return (
    <div className={styles.root}>
      <Header />
      <SortAndFilterPanel />
      <ProductContainer />
      <Footer />
    </div>
  );
};

Plp.defaultProps = {

};

Plp.propTypes = {

};

export default Plp;