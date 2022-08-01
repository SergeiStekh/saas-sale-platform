import styled from "styled-components";

export const StyledInput = styled.input`
  position: relative;
  width: 100%;
  min-width: 280px;
  height: 100%;
  max-height: 51px;
  font-size: 18px;
  line-height: 21px;
  border: ${({isValidated}) => isValidated ? '1px solid #F2F2F2' : '1px solid #f5b8b8'};
  border-radius: 15px;
  padding: 0 50px;
  padding-top: 18px;
  padding-bottom: 10px;
  outline: none;
  transition: all .3s linear;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`