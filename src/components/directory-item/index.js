import PropTypes from 'prop-types';
import { Wrapper } from "./wrapper.styled.js";
import { DirectoryItemComponent } from './directory-item.component';

const DirectoryItem = ({title, image, text}) => {
  return (
    <Wrapper>
      <DirectoryItemComponent 
        title={title} 
        text={text}
        image={image}
      />
    </Wrapper>
  )
}

DirectoryItem.defaultProps = {
  text: "SHOP NOW"
}

DirectoryItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
}

export { DirectoryItem }