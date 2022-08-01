import useFormWithInputs from '../../hooks/useFormWithInputs';
import { StyledForm } from './form.styled'
import { Input } from '../../components/input';
import { Button } from '../../components/button'

const FormContainer = ({ inputsData, actionOnFormSubmit, submitFormButtonText }) => {
  const { 
    inputsState,
    onInputChangeHandler,
    onBlurHandler,
    onPasteHandler,
    onFormSubmitHandler
  } = useFormWithInputs(inputsData);

  const inputElements = inputsData.map((signInInputsData, idx) => {

    const { autocomplete, type, name, title, icon } = signInInputsData;

    const { value, isValidated, validationErrorMessage } = inputsState[name];

    const onChange = onInputChangeHandler;
    const onBlur = (event) => onBlurHandler(event, name);
    const onPaste = (event) => onPasteHandler(event, name);

    const inputProps = { type, value, autoComplete: autocomplete, name, isValidated, onChange, onBlur, onPaste };

    const inputTitleProps = { title, validationErrorMessage };

    return (
      <Input 
        key={idx}
        icon={icon}
        inputProps={inputProps}
        inputTitleProps={inputTitleProps}
      />
    )
  });

  return (
    <StyledForm 
      onSubmit={(event) => onFormSubmitHandler(event, actionOnFormSubmit)}
    >
        { inputElements }
      <Button>{submitFormButtonText}</Button>
    </StyledForm>
  )
}

export { FormContainer }

