import styled from "styled-components";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${({image}) => (image)});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`

export { InnerWrapper }