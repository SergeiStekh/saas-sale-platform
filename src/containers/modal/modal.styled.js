import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px;
  width: 50vw;
  min-height: 50vh;
  height: auto;
  background: #ffffff;
  cursor: initial;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 80vw;
  }
`