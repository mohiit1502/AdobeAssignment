import React from 'react';
import PropTypes from 'prop-types';
import './SectionLoader.component.scss';

const SectionLoader = props => {
  return (
    <div className='c-SectionLoader'>
      <div className="c-SectionLoader__lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

SectionLoader.defaultProps = {

};

SectionLoader.propTypes = {

};

export default SectionLoader;