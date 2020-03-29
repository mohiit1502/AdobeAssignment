import React, {useState} from 'react';
import './SortAndFilterPanel.component.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import SortModal from '../SortModal';
import FilterModal from '../FilterModal';

const SortAndFilterPanel = props => {

  const [sortModalIsOpen,setSortIsOpen] = useState(false);
  const [filterModalIsOpen,setFilterIsOpen] = useState(false);
  
  function closeModal(type, e){
    e.stopPropagation();
    type === "sort" ? setSortIsOpen(false) : setFilterIsOpen(false);
  }

  return (
    <div className='c-Plp__c-SortAndFilterPanel'>
      <div className="container">
        <div className="row">
          <div className="c-Plp__c-SortAndFilterPanel__tool sort col-6" onClick={() => setSortIsOpen(true)}>
            <p className="c-Plp__c-SortAndFilterPanel__toolContent"><FontAwesomeIcon icon={faSort} /> Sort</p>
            <SortModal closeModal={(e) => closeModal("sort", e)} modalIsOpen={sortModalIsOpen} />
          </div>
          <div className="c-Plp__c-SortAndFilterPanel__tool filter col-6" onClick={() => setFilterIsOpen(true)}>
            <p className="c-Plp__c-SortAndFilterPanel__toolContent"><FontAwesomeIcon icon={faFilter} /> Filter</p>
            <FilterModal closeModal={(e) => closeModal("filter", e)} modalIsOpen={filterModalIsOpen}/>
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