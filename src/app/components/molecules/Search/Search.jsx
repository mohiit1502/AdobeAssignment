import React, {useState} from 'react';
import './Search.component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import InputField from './../../atoms/InputField'

const Search = props => {
  const [iconClicked, setIconClicked] = useState(false)
  return (
    <div className='c-Plp__c-SortAndFilterPanel__c-Search header-icon' onClick={() => setIconClicked(!iconClicked)}>
      {iconClicked && <InputField /> }
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

Search.defaultProps = {

};

Search.propTypes = {

};

export default Search;