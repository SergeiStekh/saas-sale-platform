import { useState } from 'react'

export function useModal(closeModalRef, modalOverlayRef, isOpenWhenInitialized) {

  const [isModalOpen, setIsModalOpen] = useState(isOpenWhenInitialized);

  const onModalCloseHandler = (event) => {
    event.preventDefault();
    const { target } = event;

    if (target !== modalOverlayRef.current && target !== closeModalRef.current) {
      return
    }
    setIsModalOpen(false);
  }

  return {isModalOpen, onModalCloseHandler}
}