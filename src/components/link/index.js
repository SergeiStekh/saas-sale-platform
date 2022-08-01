import { LinkComponent } from './link.component'
import { Wrapper } from './wrapper.styled'

const Link = ({ to, onClick, children }) => {
  return (
    <Wrapper>
      <LinkComponent onClick={onClick} to={to}>{children}</LinkComponent>
    </Wrapper>
  )
}

export { Link }