import React from 'react'
import Modal from '../modal/modal'
import useModal from '../../custom-hooks/useModal'
import authWithGoogle from '../../utils/authFunctions/authWithGoogle.utils'
import logInWithEmailAndPassword from '../../utils/authFunctions/logInWithEmailAndPassword.utils'
import { getAuthErrorMessageByErrorCode } from '../../utils/getAuthErrorMessageByErrorCode'
import { generateInputData } from '../../assist-functions/generate-input-data';
import useFormWithInputs from '../../custom-hooks/useFormWithInputs';
import { googleIcon, facebookIcon, emailIcon, passwordIcon } from '../../styled/icons/icons'
import Separator from '../UIcomponents/separator.UIcomponent';
import Input from '../form/input.component'
import { StyledSignUpForm } from '../../styled/elements/form/sign-up-form.styled';
import { StyledSignIn } from '../../styled/elements/sign-in/sign-in.styled';
import { StyledButton } from '../../styled/elements/button/button.styled';

export default function SignInForm() {
  const { modalState, onModalClose, showModal } = useModal();

  const signInInputsData = [
    generateInputData({name: 'email', title: 'email', icon: emailIcon}),
    generateInputData({name: 'password', title: 'Password', icon: passwordIcon}),
  ]

  const { 
    inputsState,
    onInputChangeHandler,
    onBlurHandler,
    onPasteHandler,
    onFormSubmitHandler,
    resetFormFields
  } = useFormWithInputs(signInInputsData);

  const inputElements = signInInputsData.map((signInInputsData, idx) => {

    const { autocomplete, type, name, title, icon } = signInInputsData;

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

  const logUserWithEmailAndPassword = async () => {
    const email = inputsState["email"].value;
    const password = inputsState["password"].value;
    const result = await logInWithEmailAndPassword(email, password);
    
    const { code: errorCode } = result;
    
    if (errorCode) {
      const errorMessage = getAuthErrorMessageByErrorCode(errorCode);
      showModal(errorMessage);
      return errorMessage
    }
    resetFormFields();
  }

  return (
    <StyledSignIn>
      <h1>A already have an account</h1>
      <h2>Sign in with:</h2>
      <StyledButton onClick={authWithGoogle} icon={googleIcon}>
        Google
      </StyledButton>
      <StyledButton onClick={authWithGoogle} icon={facebookIcon}
      >Facebook
      </StyledButton>
      <Separator title={"OR"}/>
      <StyledSignUpForm onSubmit={(event) => onFormSubmitHandler(event, logUserWithEmailAndPassword)}>
        {inputElements}
        <StyledButton>Login</StyledButton>
      </StyledSignUpForm>  
      <Modal isOpen={modalState.isOpen} messages={modalState.messages} onCloseModalHandler={onModalClose}/>
    </StyledSignIn>
  )
}