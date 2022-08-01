import PropTypes from "prop-types"
import { StyledLogoImage } from './logo-image.styled'
import { StyledLink } from '../link/link.styled'

function LogoComponent( { image } ) {
  return (
    <StyledLink to="/">
      <StyledLogoImage src={image} alt="logo image"/>
    </StyledLink>
  )
}

LogoComponent.propTypes = {
  image: PropTypes.string.isRequired
}

export { LogoComponent }