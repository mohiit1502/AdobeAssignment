import React, {useState} from 'react';
import './Search.component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = props => {
  const [searchInitiated, setSearchInitiated] = useState(false)
  return (
    <div className='c-Plp__c-SortAndFilterPanel__c-Search header-icon' onClick={() => setSearchInitiated(true)}>
      {searchInitiated && <input type="text" className="c-Plp__c-SortAndFilterPanel__c-Search__input" placeholder="Search..." /> }
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

Search.defaultProps = {

};

Search.propTypes = {

};

export default Search;