import React from 'react';
import PropTypes from 'prop-types';
import './Modal.component.scss';
import Button from './../../../atoms/Button'

const Modal = ({modalBody, modalButtons, modalTitle, showModal, setModalStateHandler}) => {

  const modalButtonRenders = modalButtons && modalButtons.map(modalButton => {
    return (
      <Button
        buttonType="button"
        classes={`btn ${modalButton.classes}`}
        buttonText={modalButton.text}
        onClickHandler={modalButton.onClickHandler}
      />
    )
  })

  const closeModal = () => {
    setModalStateHandler(false)
  }

  return (
    <div className={`c-Modal modal fade ${showModal && 'show'}`} style={{"display": `${showModal ? "block" : "none"}`}} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            {modalButtonRenders}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {

};

Modal.propTypes = {
  modalBody: PropTypes.object,
  modalContent: PropTypes.array,
  modalTitle: PropTypes.string,
  showModal: PropTypes.bool,
  setModalStateHandler: PropTypes.func
};

export default Modal;