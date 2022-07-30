import { useState } from 'react'

export default function useModal() {
  const [modalState, setModalState] = useState({isOpen: false, messages: ""});

  const onModalClose = () => setModalState({isOpen: false, messages: ""});

  const showModal = (messages) => setModalState({isOpen: true, messages});

  return { modalState, onModalClose, showModal }
}
