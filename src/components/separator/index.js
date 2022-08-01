import { Wrapper } from './wrapper.styled'
import { SeparatorComponent } from './separator.component'
const Separator = ({title}) => {
  return (
    <Wrapper>
      <SeparatorComponent title={title}/>
    </Wrapper>
  )
}

export { Separator }