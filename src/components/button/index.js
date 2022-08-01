import { Wrapper } from './wrapper.styled';
import { ButtonComponent } from './button.component';

const Button = (
  {
    icon = null, 
    onClick = () => null, 
    children
  }) => {
  return (
    <Wrapper>
      <ButtonComponent icon={icon} onClick={onClick}>{children}</ButtonComponent>
    </Wrapper>
  )
}

export { Button }