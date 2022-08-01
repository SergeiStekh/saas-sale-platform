import PropTypes from "prop-types";
import { useRef } from 'react';
import { Wrapper } from './wrapper.styled';
import { StyledModal } from './modal.styled';
import { Image } from "../../components/image";
import { Text } from "../../components/text";
import { StyledModalCloseBtn } from './modal-close-btn.styled'
import closeModalImg from '../../assets/images/close-modal.svg';
import closeModalHoverImg from '../../assets/images/close-modal-hover.svg';


function ModalContainer({image, messages, isOpen, onCloseModalHandler}) {
  const closeModalRef = useRef();
  const modalOverlayRef = useRef();

  const onCloseModal = (event) => {
    event.preventDefault();
    const { target } = event;
    
    if (target !== modalOverlayRef.current && target !== closeModalRef.current) {
      return
    }
    onCloseModalHandler();
  }

  return (
    <Wrapper 
      ref={modalOverlayRef}
      onClick={onCloseModal}>
      <StyledModal  
        onClick={onCloseModal} 
      >
        <StyledModalCloseBtn 
          ref={closeModalRef}
          closeModalImg={closeModalImg}
          closeModalHoverImg={closeModalHoverImg}
          onClick={onCloseModal} 
        />
        {image ? 
          <Image 
            src={image} 
            alt='modal image'
          />
          : null
        }
          <Text>{messages}</Text>
      </StyledModal>
    </Wrapper>
  )
}

ModalContainer.propTypes = {
  image: PropTypes.string,
  messages: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string).isRequired,
    PropTypes.string.isRequired
  ]),
  isOpen: PropTypes.bool.isRequired,
  onCloseModalHandler: PropTypes.func.isRequired
}

ModalContainer.defaultProps = {
  image: "", 
  messages: "",
  isOpen: false,
  onCloseModalHandler: () => null
}

export { ModalContainer }