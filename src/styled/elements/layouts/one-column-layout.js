import styled from "styled-components";

export const StyledOneColumnLayout = styled.div`
  display: grid;
  max-width: ${({maxWidth}) => maxWidth ? `${maxWidth}px` : 'initial'};
  grid-template-columns: 1fr;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 30px;
  padding: 0 15px;
  margin: 0 auto;
`