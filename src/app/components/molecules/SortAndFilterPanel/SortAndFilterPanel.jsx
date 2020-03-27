import React from 'react';
import './SortAndFilterPanel.component.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const SortAndFilterPanel = props => {
  return (
    <div className='c-Plp__c-SortAndFilterPanel'>
      <div className="container">
        <div className="row">
          <div className="c-Plp__c-SortAndFilterPanel__tool sort col-6">
            <p className="c-Plp__c-SortAndFilterPanel__toolContent"><FontAwesomeIcon icon={faSort} /> Sort</p>
          </div>
          <div className="c-Plp__c-SortAndFilterPanel__tool filter col-6">
            <p className="c-Plp__c-SortAndFilterPanel__toolContent"><FontAwesomeIcon icon={faFilter} /> Filter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SortAndFilterPanel.defaultProps = {

};

SortAndFilterPanel.propTypes = {

};

export default SortAndFilterPanel;