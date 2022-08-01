import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 21px;
    background: ${({theme}) => theme.buttons.background};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 15px 0;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .3s linear;

    &:hover,
    &:active {
      background-color: ${({theme}) => theme.buttons.hoverColor};
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