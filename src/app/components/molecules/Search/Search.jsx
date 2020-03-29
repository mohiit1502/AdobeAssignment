import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {dispatchSearchString} from './../../../pages/PLP/actions'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './Search.component.scss';

const Search = ({dispatchSearchString, inCart, history}) => {
  var  timerId;
  const [searchInitiated, setSearchInitiated] = useState(false)

  const startSearch = (searchStringUpdated) => {
    dispatchSearchString(searchStringUpdated)
    inCart && history.push('/view/plp')
  }
  
  const debouncedStartSearch = (func, delay, searchStringUpdated) => {
    clearTimeout(timerId)
    timerId  =  setTimeout(() => func(searchStringUpdated), delay)
  }

  const onChangeHandler = (e) => {
    debouncedStartSearch(startSearch, 500, e.target.value)
  }

  return (
    <div className={`c-Plp__c-Header__c-Search header-icon${searchInitiated ? " c-Plp__c-Header__c-Search--searchInitiated" : ""}`}>
      <input type="text"
        className={`c-Plp__c-Header__c-Search__input${searchInitiated ? " c-Plp__c-Header__c-Search__input--visible" : ""}`}
        placeholder="Search" onChange={onChangeHandler} />
      <FontAwesomeIcon className="c-Plp__c-Header__c-Search__searchIcon" icon={faSearch} onClick={() => setSearchInitiated(!searchInitiated)} />
    </div>
  );
};

Search.propTypes = {
  dispatchSearchString: PropTypes.func,
  inCart: PropTypes.bool
};

const mapDispatchToProps = ({
  dispatchSearchString
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Search));