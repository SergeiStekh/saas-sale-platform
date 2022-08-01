import PropTypes from 'prop-types';
import { Wrapper } from './wrapper.styled';
import { ImageComponent } from './image.component';

const Image = ({src, alt}) => {
  return (
    <Wrapper>
      <ImageComponent src={src} alt={alt}/>
    </Wrapper>
  )
}

Image.defaultProps = {
  alt: ""
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export { Image }