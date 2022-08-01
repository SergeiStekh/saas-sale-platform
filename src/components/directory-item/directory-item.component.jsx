import PropTypes from "prop-types"; 
import { InnerWrapper } from "./inner-wrapper.styled";
import { StyledDirectoryItemTitle } from "./directory-item-title.styled";
import { StyledDirectoryItemText } from './directory-item-text.styled'

export default function DirectoryItemComponent({title, image , text}) {
  return (
    <InnerWrapper image={image}>
      <StyledDirectoryItemTitle>
        {title}
      </StyledDirectoryItemTitle>
      <StyledDirectoryItemText>
        {text}
      </StyledDirectoryItemText>
    </InnerWrapper>
  )
}

DirectoryItemComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
}

export { DirectoryItemComponent }
