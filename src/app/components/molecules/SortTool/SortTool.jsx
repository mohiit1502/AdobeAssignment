import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {dispatchSortSelection} from './../../../pages/PLP/actions'
import './SortTool.component.scss';

const SortTool = props => {

  const [sortType, setSortType] = useState('')
  const [selectionError, setSelectionError] = useState('')

  const submitSelection = (e) => {
    if (!sortType) {
      setSelectionError(true)
      return
    }
    props.dispatchSortSelection(sortType)
    props.isModal && props.closeModal(e)
    setSelectionError(false)
  }

  return (
    <div className={`c-SortTool${props.isModal ? " modal-content" : " c-SortTool__content"}`}>
      <div className={props.headerClass}>
        <h5 className={props.titleClass} id="exampleModalLiveLabel">{props.title}</h5>
        {props.isModal && <button type="button" className="close" onClick={props.closeModal} aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>}
      </div>
      <div className={props.bodyClass}>
        {selectionError && <span className="error">Please Select One of the options below.</span>}
        <div className="container">
          <div className="radio">
            <label className={sortType === "priceHtoL" && props.labelClass}>
              <input type="radio" name="survey" checked={sortType === "priceHtoL"}
                onChange={() => {
                  setSortType("priceHtoL");
                  !props.isModal && props.dispatchSortSelection("priceHtoL");
                  setSelectionError(false);
                }} />Price -- High Low
            </label>
          </div>
          <div className="radio">
            <label className={sortType === "priceLtoH" && props.labelClass}>
              <input type="radio" name="survey" checked={sortType === "priceLtoH"}
                onChange={() => {
                  setSortType("priceLtoH");
                  !props.isModal && props.dispatchSortSelection("priceLtoH");
                  setSelectionError(false);
                }} />Price -- Low High
            </label>
          </div>
          <div className="radio disabled">
            <label className={sortType === "discount" && props.labelClass}>
              <input type="radio" name="survey" checked={sortType === "discount"}
                onChange={() => {
                  setSortType("discount");
                  !props.isModal && props.dispatchSortSelection("discount");
                  setSelectionError(false);
                }} />Discount
            </label>
          </div>
        </div>
      </div>
      {props.isModal && <div className={props.footerClass}>
        <button type="button" className="btn btn-secondary" onClick={props.closeModal}>Cancel</button>
        <button type="button" className="btn btn-primary" onClick={submitSelection}>Apply</button>
      </div>}
    </div>
  );
};

SortTool.propTypes = {
  dispatchSortSelection: PropTypes.func
};

const mapDispatchToProps = ({
  dispatchSortSelection
})

export default connect(
  null,
  mapDispatchToProps
)(SortTool);
