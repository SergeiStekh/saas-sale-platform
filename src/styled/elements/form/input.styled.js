import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;   
  padding-bottom: 15px;

  input {
    position: relative;
    width: 100%;
    min-width: 280px;
    height: 100%;
    max-height: 51px;
    font-size: 18px;
    line-height: 21px;
    background: ${({isValidated}) => isValidated ? "#F2F2F2" : "#f5b8b8"};
    border-radius: 15px;
    padding: 0 50px;
    padding-top: 18px;
    padding-bottom: 10px;
    outline: none;
    border: none;
    transition: all .3s linear;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }
  
  p {
    position: absolute;
    left: 50px;
    top: 6px;
    z-index: 8;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }

  div {
    display: block;
    grid-column: 2 / 3;
    position: absolute;
    z-index: 1;
    width: 36px;
    height: 36px;
    top: 6px;
    left: 7px;
    background-image: url(${({icon}) => icon});
    background-size: cover;
    background-repeat: no-repeat;
  }
`