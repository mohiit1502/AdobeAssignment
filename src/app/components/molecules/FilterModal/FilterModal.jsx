import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import FilterTool from './../FilterTool';
import './FilterModal.component.scss';
import 'react-input-range/lib/css/index.css';

const customStyles = {
  content: {
    top: '20%',
    width: '93%',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'rgb(255, 255, 255)',
    overflow: 'auto',
    borderRadius: '4px'
  }
};

const FilterModal = ({closeModal, modalIsOpen}) => {

  function afterOpenModal() {
    // subtitle.style.color = '#000';
    // subtitle.style.fontWeight = '700';
  }


  return (
    <Modal
      overlayClassName="c-FilterModal modal fade show"
      closeTimeoutMS={300}
      className="modal-dialog"
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <FilterTool
        headerClass="modal-header"
        titleClass="modal-title"
        bodyClass="modal-body"
        footerClass="modal-footer"
        title="Filter Options"
        closeModal={closeModal}
        isModal={true} />
    </Modal>
  );
};

FilterModal.defaultProps = {

};

FilterModal.propTypes = {
  closeModal: PropTypes.func,
  dispatchFilterSelection: PropTypes.func,
  modalIsOpen: PropTypes.bool
};

export default FilterModal;
