import { StyledOneColumnLayout } from '../layouts/one-column-layout.styled';
import { SignInForm } from '../containers/sign-in-form';

function SignInPage() {
  return (
    <StyledOneColumnLayout maxWidth={580}>
      <SignInForm/>
    </StyledOneColumnLayout>
  )
}

export { SignInPage }