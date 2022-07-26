export function generateInputData({
  value = "",
  isValidated = true,
  validationErrorMessage = "",
  autocomplete = "",
  type = "text",
  required = true,
  icon = "",
  name,
  title
}) {
  return {
    value,
    isValidated,
    validationErrorMessage,
    autocomplete,
    type,
    name,
    required,
    title,
    icon
  }
}