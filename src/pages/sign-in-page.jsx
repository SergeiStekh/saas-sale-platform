import SignInForm from '../components/sign-in-form/sign-in-form.component';
import { StyledOneColumnLayout } from '../styled/elements/layouts/one-column-layout';

export default function SignInPage() {
  return (
    <StyledOneColumnLayout maxWidth={580}>
      <SignInForm/>
    </StyledOneColumnLayout>
  )
}
