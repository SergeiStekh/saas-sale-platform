export function generateInputData({
  value = "",
  isValidated = true,
  validationErrorMessage = "",
  autocomplete = "",
  type = "text",
  name,
  required = true,
  title,
  icon = ""
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