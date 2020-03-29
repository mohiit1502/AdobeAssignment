import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import SortTool from '../SortTool';
import './SortModal.component.scss';

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

const SortModal = ({closeModal, modalIsOpen}) => {


  function afterOpenModal() {
    // subtitle.style.color = '#000';
    // subtitle.style.fontWeight = '700';
  }

  return (
    <Modal
      overlayClassName="c-SortModal modal fade show"
      closeTimeoutMS={300}
      className="modal-dialog"
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <SortTool
        headerClass="modal-header"
        titleClass="modal-title"
        bodyClass="modal-body"
        footerClass="modal-footer"
        title="Sort Options"
        closeModal={closeModal}
        isModal={true} />
    </Modal>
  );
};

SortModal.defaultProps = {

};

SortModal.propTypes = {
  closeModal: PropTypes.func,
  dispatchSortSelection: PropTypes.func,
  modalIsOpen: PropTypes.bool
};

export default SortModal;