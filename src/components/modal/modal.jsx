import PropTypes from "prop-types"
import React, { useRef } from 'react'
import { StyledModal } from '../../styled/elements/modal/modal.styled'
import closeModalImg from '../../assets/images/close-modal.svg'
import closeModalHover from '../../assets/images/close-modal-hover.svg'


export default function Modal({image = "", messages = "", isOpen, onCloseModalHandler = () => {}}) {
  const closeModalRef = useRef();
  const modalOverlayRef = useRef();

  const imageElement = image ? 
  <div className="modal__image-wrapper">
    <img src={image} alt="modal-window"/>
  </div> : null

  const text = typeof messages === 'string' ? 
  <p>{messages}</p> : 
  messages.map((paragraph, idx) => <p key={idx}>{paragraph}</p>);

  if (!isOpen) {
    return null
  }

  const onCloseModal = (event) => {
    event.preventDefault();
    const { target } = event;

    if (target !== modalOverlayRef.current && target !== closeModalRef.current) {
      return
    }
    onCloseModalHandler();
  }

  return (
    <StyledModal closeModalImg={closeModalImg} closeModalHover={closeModalHover} onClick={onCloseModal} ref={modalOverlayRef}>
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
  isOpen: PropTypes.bool.isRequired,
  onCloseModalHandler: PropTypes.func.isRequired
}
