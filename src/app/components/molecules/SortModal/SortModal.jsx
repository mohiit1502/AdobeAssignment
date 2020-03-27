import React from 'react';
import PropTypes from 'prop-types';
import './SortModal.component.scss';
import Modal from '../common/Modal/Modal';

const SortModal = ({showModal, setModalState}) => {
  return (
    <div className='c-SortModal'>
      <Modal 
        showModal={showModal}
        setModalStateHandler={setModalState} />
    </div>
  );
};

SortModal.defaultProps = {

};

SortModal.propTypes = {
  showModal: PropTypes.bool,
  setModalState: PropTypes.func
};

export default SortModal;