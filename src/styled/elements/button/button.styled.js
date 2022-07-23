import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2 / 3;
    width: 100%;
    min-width: 280px;
    height: 100%;
    max-height: 51px;
    font-size: 18px;
    line-height: 21px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 15px 0;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .3s linear;
    margin-bottom: 10px;

    &:hover {
      background-color: #1acd6d;
    }

    ${({icon}) => icon && `
        &::before {
        content: "";
        display: block;
        width: 36px;
        height: 36px;
        background-image: url(${icon});
        background-repeat: no-repeat;
        background-position: center;
        padding-right: 20px;
      }
    `}
`