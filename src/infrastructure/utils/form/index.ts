import React from 'react';
import { useTranslate } from "@tolgee/react";

function useFieldValidator() {
  const { t } = useTranslate();
  const validateField = (errors, values, field, label, validationRule) => {
    if (!values[field]) {
      errors[field] = t('tr_required', { label: label.toLowerCase() });
    } else if (!validationRule?.pattern?.test(values[field])) {
      errors[field] = validationRule?.message?.it;
    }
  };

  return validateField;
}

export default useFieldValidator;
