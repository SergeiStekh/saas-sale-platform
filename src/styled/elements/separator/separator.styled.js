import styled from "styled-components";

export const StyledSeparator = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  .line {
    border-bottom: 1px solid black;
    flex-grow: 1;
  }

  .word {
    padding: 0 10px;
  }
`