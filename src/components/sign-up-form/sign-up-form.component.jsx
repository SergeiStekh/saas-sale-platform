import React from 'react'
import Modal from '../modal/modal'
import useModal from '../../custom-hooks/useModal'
import { getAuthErrorMessageByErrorCode } from '../../utils/getAuthErrorMessageByErrorCode'
import useFormWithInputs from '../../custom-hooks/useFormWithInputs';
import { generateInputData } from '../../assist-functions/generate-input-data';
import authWithEmailAndPassword from '../../utils/authFunctions/authWithEmailAndPassword.utils'
import authWithGoogle from '../../utils/authFunctions/authWithGoogle.utils'
import { StyledSignUpForm } from '../../styled/elements/form/sign-up-form.styled'
import { StyledSignUp } from '../../styled/elements/sign-in/sign-up.styled';
import { StyledButton } from '../../styled/elements/button/button.styled';
import Separator from '../UIcomponents/separator.UIcomponent';
import Input from '../form/input.component'
import { googleIcon, emailIcon, passwordIcon, nameIcon, confirmIcon } from '../../styled/icons/icons'

export default function SignUpForm() {
  const { modalState, onModalClose, showModal } = useModal();

  const signUpInputsData = [
    generateInputData({autocomplete: "username", name: "name", title: "Name", icon: nameIcon}),
    generateInputData({name: "email", title: "Email", icon: emailIcon}),
    generateInputData({name: "password", title: "Password", icon: passwordIcon}),
    generateInputData({name: "confirmedPassword", title: "Confirm password", icon: confirmIcon})
  ]

  const { 
    inputsState, 
    onInputChangeHandler, 
    onBlurHandler,
    onPasteHandler,
    onFormSubmitHandler,
    resetFormFields
  } = useFormWithInputs(signUpInputsData);

  const inputElements = signUpInputsData.map((signUpInputsData, idx) => {
    const { autocomplete, type, name, title, icon } = signUpInputsData;

    const { value, isValidated, validationErrorMessage } = inputsState[name];

    const onChange = onInputChangeHandler;
    const onBlur = (event) => onBlurHandler(event, name);
    const onPaste = (event) => onPasteHandler(event, name);

    const inputElementProps = { type, value, autoComplete: autocomplete, name, onChange, onBlur, onPaste };

    const inputTitleProps = { title, validationErrorMessage };

    const styledInputProps = { icon, isValidated, validationErrorMessage };

    return (
      <Input 
        key={idx}
        inputElementProps={inputElementProps}
        inputTitleProps={inputTitleProps}
        styledInputProps={styledInputProps}
      />
    )
  });

  const registerUserWithEmailAndPassword = async () => {
    const name = inputsState["name"].value;
    const email = inputsState["email"].value;
    const password = inputsState["password"].value;

    const user = await authWithEmailAndPassword(name, email, password);

    const { code: errorCode } = user;
    
    if (errorCode) {
      const errorMessage = getAuthErrorMessageByErrorCode(errorCode);
      showModal(errorMessage);
      return errorMessage
    }
    resetFormFields();
  }

  return (
    <StyledSignUp>
      <h1>I don't have an account</h1>
      <h2>Sign up with:</h2>
      <StyledButton 
        onClick={authWithGoogle}
        icon={googleIcon}
      >
        Google
      </StyledButton>
      <Separator title={"OR"}/>
      <StyledSignUpForm onSubmit={(event) => onFormSubmitHandler(event, registerUserWithEmailAndPassword)}>
        {inputElements}
        <StyledButton>Sign up</StyledButton>
      </StyledSignUpForm>
      <Modal isOpen={modalState.isOpen} messages={modalState.messages} onCloseModalHandler={onModalClose}/>
    </StyledSignUp>
  )
}
