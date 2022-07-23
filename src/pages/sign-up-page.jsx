import SignUp from '../components/sign-up/sign-up.component';
import { StyledOneColumnLayout } from '../styled/elements/layouts/one-column-layout';

export default function SignInPage() {
  return (
    <StyledOneColumnLayout maxWidth={580}>
      <SignUp/>
    </StyledOneColumnLayout>
  )
}
