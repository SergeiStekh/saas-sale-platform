import styled from "styled-components";

const Wrapper = styled.ul` 
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;

  &:nth-of-type(5n + 4) {
    min-width: 49%;
    height: 380px;
  }

  &:nth-of-type(5n + 5) {
    min-width: 49%;
    height: 380px;
  }
`

export { Wrapper }