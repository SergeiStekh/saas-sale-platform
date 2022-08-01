import {SignUpForm} from '../containers/sign-up-form';
import { StyledOneColumnLayout } from '../layouts/one-column-layout.styled';

function SignUpPage() {
  return (
    <StyledOneColumnLayout maxWidth={580}>
      <SignUpForm/>
    </StyledOneColumnLayout>
  )
}

export { SignUpPage }