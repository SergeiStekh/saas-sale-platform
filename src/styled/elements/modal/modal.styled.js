import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30vh;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(34, 33, 33, 0.5);
  cursor: pointer;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;

  .modal__wrapper {
    position: relative;
    padding: 20px;
    width: 50vw;
    min-height: 50vh;
    height: auto;
    background: #ffffff;
    cursor: initial;
    border-radius: 8px;

    .modal__close {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 5px;
      right: 5px;
      background-image: url(${({closeModalImg}) => closeModalImg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      cursor: pointer;
      transition: all .3s linear;
    }

    .modal__close:hover {
      background-image: url(${({closeModalHover}) => closeModalHover});
    }


    .modal__image-wrapper {
      width: 100%;
      margin: 0 auto;

      img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: auto;
        border-bottom: 1px solid #000;
      }
    }

    p {
      padding-bottom: 15px;
      text-align: center;
    }

    p:first-of-type {
      padding-top: 15px;
    }

    p:last-of-type {
      padding-bottom: 0px;
    }
  }

  @media (max-width: 768px) {
      .modal__wrapper {
        width: 80vw;
      }
    }
`