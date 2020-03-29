import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {dispatchFilterRange} from './../../../pages/PLP/actions';
import InputRange from 'react-input-range';
import './FilterTool.component.scss';

const FilterTool = props => {
  // var subtitle;
  const [filterRange, setFilterRange] = useState({min: 0, max: 10000})

  const submitSelection = (e) => {
    props.dispatchFilterRange(filterRange)
    props.isModal && props.closeModal(e)
  }

  return (
    <div className={`c-FilterTool${props.isModal ? " modal-content" : " c-FilterTool__content"}`}>
      <div className={props.headerClass}>
        <h5 className={props.titleClass}>{props.title}</h5>
        {props.isModal && <button type="button" className="close" onClick={props.closeModal} aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>}
      </div>
      <div className={props.bodyClass}>
        <InputRange
          maxValue={10000}
          minValue={0}
          formatLabel={value => `₹${value}`}
          value={filterRange}
          onChange={value => setFilterRange(value)} />
          {/* onChangeComplete={(e) =>submitSelection(e)} /> */}
          <p className="c-FilterModal__input-range__subtitle">Price</p>
      </div>
      <div className={props.footerClass}>
        {props.isModal && <button type="button" className="btn btn-secondary" onClick={props.closeModal}>Cancel</button>}
        <button type="button" className="btn btn-primary" onClick={submitSelection}>Apply</button>
      </div>
    </div>
  );
};

FilterTool.propTypes = {
  dispatchFilterRange: PropTypes.func
};

const mapDispatchToProps = ({
  dispatchFilterRange
})

export default connect(
  null,
  mapDispatchToProps
)(FilterTool);