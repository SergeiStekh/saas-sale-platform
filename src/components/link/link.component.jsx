import { StyledLink } from './link.styled'

const LinkComponent = ({ to, onClick, children }) => {
  return <StyledLink onClick={onClick} to={to}>{children}</StyledLink>
}

export { LinkComponent }