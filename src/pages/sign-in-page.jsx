import SignIn from '../components/sign-in/sign-in.component';
import { StyledOneColumnLayout } from '../styled/elements/layouts/one-column-layout';

export default function SignInPage() {
  return (
    <StyledOneColumnLayout maxWidth={580}>
      <SignIn/>
    </StyledOneColumnLayout>
  )
}
