import PropTypes from 'prop-types'
import { Wrapper } from "./wrapper.styled";
import { LogoComponent } from "./logo.component";

const Logo = ( { image } ) => {
  return (
    <Wrapper>
      <LogoComponent image={image}/>
    </Wrapper>
  )
}

export { Logo }

Logo.propTypes = {
  image: PropTypes.string.isRequired
}