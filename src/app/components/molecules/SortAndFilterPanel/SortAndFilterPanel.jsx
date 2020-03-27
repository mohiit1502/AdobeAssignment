import React, {useState} from 'react';
import './SortAndFilterPanel.component.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import SortModal from '../SortModal';
import FilterModal from '../FilterModal';

const SortAndFilterPanel = props => {

  const [showSortModal, setShowSortModal] = useState(false)
  const [showFilterModal, setShowFilterModal] = useState(false)

  const handleSortModalChange = (modalState) => {
    setShowSortModal(() => modalState)
  }

  return (
    <div className='c-Plp__c-SortAndFilterPanel'>
      <div className="container">
        <div className="row">
          <div className="c-Plp__c-SortAndFilterPanel__tool sort col-6" onClick={() => setShowSortModal(true)}>
            <p className="c-Plp__c-SortAndFilterPanel__toolContent"><FontAwesomeIcon icon={faSort} /> Sort</p>
            <SortModal showModal={showSortModal} setModalState={handleSortModalChange} />
          </div>
          <div className="c-Plp__c-SortAndFilterPanel__tool filter col-6" onClick={() => setShowFilterModal(true)}>
            <p className="c-Plp__c-SortAndFilterPanel__toolContent"><FontAwesomeIcon icon={faFilter} /> Filter</p>
            <FilterModal showModal={showFilterModal} setModalState={setShowFilterModal} />
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