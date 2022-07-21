import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
  background-color: ${({theme}) => theme.colors.header};
  overflow: hidden;
`