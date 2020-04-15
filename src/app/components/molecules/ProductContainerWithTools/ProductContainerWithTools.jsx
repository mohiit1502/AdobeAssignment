import React from 'react';
import PropTypes from 'prop-types';
import SortAndFilterPanel from './../SortAndFilterPanel'
import ProductContainer from './../ProductContainer'
import FilterTool from './../FilterTool'
import SortTool from './../SortTool'
import './ProductContainerWithTools.component.scss';

const ProductContainerWithTools = ({isMobile, products}) => {
  return <section className="c-ProductContainerWithTools">
      {
        isMobile ?
          <React.Fragment>
            <SortAndFilterPanel /> 
            <ProductContainer products={products} />
          </React.Fragment> :
          <React.Fragment>
            <div className="container">
              <div className="row">
                <div className="col-2 c-ProductContainerWithTools__asideCol">
                <aside className="c-ProductContainerWithTools__c-FilterAside">
                  <FilterTool
                    headerClass="c-FilterTool__header"
                    titleClass="c-FilterTool__title"
                    bodyClass="c-FilterTool__body"
                    footerClass="c-FilterTool__footer"
                    title="Filters" />
                </aside>
                </div>
                <div className="col-10">
                  <SortTool
                    headerClass="c-SortTool__header"
                    titleClass="c-SortTool__title"
                    bodyClass="c-SortTool__body"
                    labelClass="c-SortTool__body__label"
                    title="Sort By" />
                  <ProductContainer products={products} />
                </div>
              </div>
            </div>
          </React.Fragment>
      }
  </section>
};

ProductContainerWithTools.propTypes = {
  products: PropTypes.array
};

export default ProductContainerWithTools;