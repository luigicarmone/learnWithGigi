const validateField = (errors, values, field, label, validationRule) => {
  if (!values[field]) {
    errors[field] = `Il campo ${label} è obbligatorio`;
  } else if (!validationRule?.pattern?.test(values[field])) {
    errors[field] = validationRule?.message?.it;
  }
};

export {
  validateField
}