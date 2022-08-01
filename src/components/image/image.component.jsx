import { StyledImage } from "./image.styled"

const ImageComponent = ({src, alt}) => {
  return (
    <StyledImage src={src} alt={alt}/>
  )
}

export { ImageComponent }