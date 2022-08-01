import { ModalContainer } from './modal.container'

const Modal = ({image, messages, isOpen, onCloseModalHandler}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer 
      image={image} 
      messages={messages} 
      isOpen={isOpen} 
      onCloseModalHandler={onCloseModalHandler}
      />
  )
}

export { Modal }