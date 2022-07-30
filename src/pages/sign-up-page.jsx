import SignUpForm from '../components/sign-up-form/sign-up-form.component';
import { StyledOneColumnLayout } from '../styled/elements/layouts/one-column-layout';

export default function SignInPage() {
  return (
    <StyledOneColumnLayout maxWidth={580}>
      <SignUpForm/>
    </StyledOneColumnLayout>
  )
}
