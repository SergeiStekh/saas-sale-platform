import PropTypes, { bool } from "prop-types"
import React, { useRef } from 'react'
import { useModal } from "../../custom-hooks/useModal"
import { StyledModal } from '../../styled/elements/modal/modal.styled'
import closeModalImg from '../../assets/images/close-modal.svg'
import closeModalHover from '../../assets/images/close-modal-hover.svg'


export default function Modal({image, messages, isOpenWhenInitialized}) {
  const closeModalRef = useRef();
  const modalOverlayRef = useRef();

  const { isModalOpen, onModalCloseHandler } = useModal(closeModalRef, modalOverlayRef, isOpenWhenInitialized);

  const imageElement = image ? 
  <div className="modal__image-wrapper">
    <img src={image} alt="modal-window"/>
  </div> : null

  const text = typeof messages === 'string' ? 
  <p>{messages}</p> : 
  messages.map((messagePart, idx) => <p key={idx}>{messagePart}</p>);

  if (!isModalOpen) {
    return null
  }

  return (
    <StyledModal closeModalImg={closeModalImg} closeModalHover={closeModalHover} onClick={onModalCloseHandler} ref={modalOverlayRef}>
      <div className="modal__wrapper">
        <div ref={closeModalRef} className="modal__close"/>
        {imageElement}
        {text}
      </div>
    </StyledModal>
  )
}

Modal.propTypes = {
  image: PropTypes.string,
  messages: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string).isRequired,
    PropTypes.string
  ]),
  isOpenWhenInitialized: bool.isRequired
}
