import { Wrapper } from "./wrapper.styled";
import { StyledH2 } from "./h2.styled";

const H2 = ({children}) => {
  return (
    <Wrapper>
      <StyledH2>{children}</StyledH2>
    </Wrapper>
  )
}

export { H2 }