import { useState } from 'react'
import { formValidator } from '../assist-functions/form-validation'

export default function useFormWithInputs(initialStateArray) {
  if (!initialStateArray) {
    throw new Error("Please pass the initial state to useInitialState custom hook to prevent errors during validation");
  }

  const generateInitialState = () => {
    const initialInputsState = {};

    if (initialStateArray) {
      initialStateArray.forEach(input => {
        const { name, value, type, required, title, isValidated, validationErrorMessage } = input;
        initialInputsState[name] = {
          value,
          type,
          required,
          title,
          isValidated,
          validationErrorMessage
        }
      }) 
    }
    return initialInputsState
  }

  const [inputsState, setInputsState] = useState(generateInitialState());

  const onInputChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setInputsState((prevState) => {
      return {
        ...prevState,
        [name]: {
          ...prevState[name],
          value,
          isValidated: true,
          validationErrorMessage: ""
        }
      }
    });
  }

  const resetFormFields = () => {
    setInputsState(generateInitialState(initialStateArray));
  }

  const onBlurHandler = (event, fieldName) => {
    event.preventDefault();

    const fieldStateAfterValidation = formValidator.validateField(inputsState, fieldName, inputsState[fieldName]);
    setInputsState((prevState) => {
      return {
        ...prevState,
        fieldStateAfterValidation
      }
    });
  }

  const onPasteHandler = (event) => {
    const { name, value } = event.target;
    
    setInputsState((prevState) => {
      return {
        ...prevState,
        [name]: {
          ...prevState[name],
          value,
          isValidated: true,
          validationErrorMessage: ""
        }
      }
    });
  }

  const onFormSubmitHandler = async (event, actionOnFormSubmit) => {
    event.preventDefault();
    if (!actionOnFormSubmit) {
      throw new Error("Please provide to onFormSubmitHandler in useFormWithInputs customHook, to handle behavior after form submit. If not handled, form will not work as expected.")
    }
    const stateAfterValidation = formValidator.validateForm(inputsState);
    const isAllFieldsValidated = formValidator.isAllFieldsValidated(stateAfterValidation);
    setInputsState(stateAfterValidation);
    if (isAllFieldsValidated) {
      actionOnFormSubmit();
    }
  }

  return {
    inputsState,
    onInputChangeHandler,
    onBlurHandler,
    onPasteHandler,
    onFormSubmitHandler,
    resetFormFields
  }
}

