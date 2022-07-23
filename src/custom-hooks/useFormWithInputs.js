import { useState, useEffect } from 'react'

export default function useFormWithInputs() {
  const [inputState, setInputState] = useState({})

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setInputState((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  useEffect(() => {
    console.log(inputState)
  }, [inputState])

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("signUp")
  }

  return {
    inputState,
    handleInputChange,
    onFormSubmit
  }
}

