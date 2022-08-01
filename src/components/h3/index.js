import { Wrapper } from "./wrapper.styled";
import { StyledH3 } from "./h3.styled";

const H3 = ({children}) => {
  return (
    <Wrapper>
      <StyledH3>{children}</StyledH3>
    </Wrapper>
  )
}

export { H3 }