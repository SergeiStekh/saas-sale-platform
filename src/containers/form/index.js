import { Wrapper } from './wrapper.styled'
import { FormContainer } from './form.container'

const Form = ({ inputsData, actionOnFormSubmit, submitFormButtonText }) => {
  return (
    <Wrapper>
      <FormContainer 
        inputsData={inputsData} 
        actionOnFormSubmit={actionOnFormSubmit}
        submitFormButtonText={submitFormButtonText}
      />
    </Wrapper>
  )
}

export { Form }