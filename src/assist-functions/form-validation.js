export class FormValidator {
  constructor() {
    this.validationRules = [
      {
        field: 'name',
        validationErrorMessage: 'length should be minimum 3 symbols, strings only',
        regExp: /^[A-Za-z]+$/,
        minLength: 3
      },
      {
        field: 'email',
        validationErrorMessage: 'should follow this pattern: xxx@xx.xx',
        regExp: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
        minLength: 5
      },
      {
        field: 'password',
        validationErrorMessage: "length should be minimum 6 symbols",
        minLength: 6
      },
      {
        field: 'confirmedPassword',
        validationErrorMessage: 'should be equal to password',
        isEqual: 'password'
      }
    ]
  }

  validateForm = (inputsState) => {
    const inputs = Object.keys(inputsState);
    const validationResults = {};
    inputs.forEach(inputName => {
      validationResults[inputName] = this.validateField(inputsState, inputName, inputsState[inputName]);
    });
    return validationResults
  }

  isAllFieldsValidated = (inputsState) => {
    const validatedFields = Object.keys(inputsState).map(field => {
      return inputsState[field].isValidated;
    });
    return validatedFields.every(item => item === true);
  }

  validateField = (inputsState, fieldName, fieldValue) => {
    console.log(fieldValue)
    const isRules = this.validationRules.filter(rule => rule.field === fieldName);
    const rules = isRules.length > 0 ? isRules[0] : undefined;
    
    if (!rules) {
      return fieldValue
    }
    const rulesKeys = Object.keys(rules);
    
    rulesKeys.forEach(rule => {
      if (rule === 'field' || rule === 'validationErrorMessage') {
        return
      }
      if (rule === 'regExp') {
        const validationErrorMessage = rules.validationErrorMessage;
        const isValidated = rules[rule].test(fieldValue.value);
        if (!isValidated) {
          fieldValue.isValidated = false;
          fieldValue.validationErrorMessage = validationErrorMessage;
        }
      }
      if (rule === 'minLength') {
        const validationErrorMessage = rules.validationErrorMessage;
        const isValidated = fieldValue.value.length >= rules[rule];
        if (!isValidated) {
          fieldValue.isValidated = false;
          fieldValue.validationErrorMessage = validationErrorMessage;
        }
      }
      if (rule === 'isEqual') {
        const validationErrorMessage = rules.validationErrorMessage;
        const shouldBeEqualTo = rules[rule];
        const isComparingFieldFilled = inputsState.hasOwnProperty(shouldBeEqualTo);
        if (!isComparingFieldFilled) {
          fieldValue.isValidated = false;
          fieldValue.validationErrorMessage = validationErrorMessage; 
        }
        if (isComparingFieldFilled) {
          const isValuesEqual = fieldValue.value === inputsState[shouldBeEqualTo].value;
          if (!isValuesEqual) {
            fieldValue.isValidated = false;
            fieldValue.validationErrorMessage = validationErrorMessage; 
          }
        }
      }
    });
    console.log(fieldValue)
    const validateIfRequired = this.validateRequiredField(fieldValue);

    return validateIfRequired
  }

  validateRequiredField = (fieldValue) => {
    const immutableFieldCopy = {...fieldValue};
    const { required, value } = immutableFieldCopy;
    console.log(required, value)
    if (required && value === '') {
      immutableFieldCopy.isValidated = false;
      immutableFieldCopy.validationErrorMessage = `This field can'\t be empty`;
    }
    return immutableFieldCopy
  }
}

const formValidator = new FormValidator();

export { formValidator }