import React from 'react'
import { H1 } from '../../components/h1'
import { H2 } from '../../components/h2'
import { Form } from '../form'
import { Modal } from '../modal'
import useModal from '../../hooks/useModal'
import authWithGoogle from '../../utils/authFunctions/authWithGoogle.utils'
import logInWithEmailAndPassword from '../../utils/authFunctions/logInWithEmailAndPassword.utils'
import { getAuthErrorMessageByErrorCode } from '../../utils/getAuthErrorMessageByErrorCode'
import { generateInputData } from '../../assist-functions/generate-input-data';
import { googleIcon, emailIcon, passwordIcon } from '../../styles/icons/icons'
import { Separator } from '../../components/separator';
import { Button } from '../../components/button'

function SignInFormComponent() {
  const { modalState, onModalClose, showModal } = useModal();

  const signInInputsData = [
    generateInputData({name: 'email', title: 'email', icon: emailIcon}),
    generateInputData({name: 'password', title: 'Password', icon: passwordIcon}),
  ]

  const logUserWithGoogle = async () => {
    await authWithGoogle();
  }

  const logUserWithEmailAndPassword = async (inputsState) => {
    const email = inputsState["email"].value;
    const password = inputsState["password"].value;
    const user = await logInWithEmailAndPassword(email, password);
    
    const { code: errorCode } = user;
    
    if (errorCode) {
      const errorMessage = getAuthErrorMessageByErrorCode(errorCode);
      showModal(errorMessage);
      return false
    }
    return true
  }

  return (
    <>
      <H1>A already have an account</H1>
      <H2>Sign in with:</H2>
      <Button 
        onClick={logUserWithGoogle} 
        icon={googleIcon}
      >
        Google
      </Button>
      <Separator title={"OR"}/>
      <Form 
        inputsData={signInInputsData}
        actionOnFormSubmit={logUserWithEmailAndPassword}
        submitFormButtonText='Login'
      />
      <Modal isOpen={modalState.isOpen} messages={modalState.messages} onCloseModalHandler={onModalClose}/>
    </>
  )
}

export { SignInFormComponent }