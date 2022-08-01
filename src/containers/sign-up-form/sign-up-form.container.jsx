import React from 'react'
import { H1 } from '../../components/h1'
import { H2 } from '../../components/h2'
import { Form } from '../form'
import { Modal } from '../modal'
import useModal from '../../hooks/useModal'
import { getAuthErrorMessageByErrorCode } from '../../utils/getAuthErrorMessageByErrorCode'
import { generateInputData } from '../../assist-functions/generate-input-data';
import authWithEmailAndPassword from '../../utils/authFunctions/authWithEmailAndPassword.utils'
import authWithGoogle from '../../utils/authFunctions/authWithGoogle.utils'
import { StyledButton } from '../../components/button/button.styled';
import { Separator } from '../../components/separator';
import { googleIcon, emailIcon, passwordIcon, nameIcon, confirmIcon } from '../../styles/icons/icons'

function SignUpFormComponent() {
  const { modalState, onModalClose, showModal } = useModal();

  const signUpInputsData = [
    generateInputData({autocomplete: "username", name: "name", title: "Name", icon: nameIcon}),
    generateInputData({name: "email", title: "Email", icon: emailIcon}),
    generateInputData({name: "password", title: "Password", icon: passwordIcon}),
    generateInputData({name: "confirmedPassword", title: "Confirm password", icon: confirmIcon})
  ]

  const registerUserWithEmailAndPassword = async (inputsState) => {
    const name = inputsState["name"].value;
    const email = inputsState["email"].value;
    const password = inputsState["password"].value;

    const user = await authWithEmailAndPassword(name, email, password);

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
      <H1>I don't have an account</H1>
      <H2>Sign up with:</H2>
      <StyledButton 
        onClick={authWithGoogle}
        icon={googleIcon}
      >
        Google
      </StyledButton>
      <Separator title={"OR"}/>
      <Form 
        inputsData={signUpInputsData}
        actionOnFormSubmit={registerUserWithEmailAndPassword}
        submitFormButtonText='Sign up'
      />
      <Modal isOpen={modalState.isOpen} messages={modalState.messages} onCloseModalHandler={onModalClose}/>
    </>
  )
}

export { SignUpFormComponent }