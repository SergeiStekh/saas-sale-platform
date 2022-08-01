import { useState } from 'react'

export default function useModal() {
  const [modalState, setModalState] = useState({isOpen: false, messages: "", image: null});

  const onModalClose = () => setModalState({isOpen: false, messages: "", image: null});

  const showModal = (messages, image) => setModalState({isOpen: true, messages, image});

  return { modalState, onModalClose, showModal }
}
