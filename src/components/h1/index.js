import { Wrapper } from "./wrapper.styled";
import { StyledH1 } from "./h1.styled";

const H1 = ({children}) => {
  return (
    <Wrapper>
      <StyledH1>{children}</StyledH1>
    </Wrapper>
  )
}

export { H1 }