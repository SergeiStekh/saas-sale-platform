export function getInputFieldValue(obj, fieldName) {
  if (!obj[fieldName]) {
    return undefined
  }
  const formFields = Object.entries(obj);
  const value = formFields.filter(field => field[0] === fieldName)[0][1]?.value;
  return value
}