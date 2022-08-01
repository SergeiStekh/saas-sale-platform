import PropTypes from 'prop-types'
import { StyledText } from './text.styled';

const TextComponent = ({children}) => {
  return (
    <StyledText>{children}</StyledText>
  )
}

export { TextComponent };

TextComponent.propTypes = {
  children: PropTypes.string
}