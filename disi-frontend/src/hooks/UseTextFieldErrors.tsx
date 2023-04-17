import { useCallback, useEffect, useMemo, useState } from 'react';

const useTextFieldErrors = (initialValue: string, validator: (value) => string | string[]) => {
  const [value, setValue] = useState(initialValue);
  const [errors, setErrors] = useState<string | string[]>('');

  const hasErrors = useMemo(() => errors.length > 0, [errors]);

  const validate = useCallback(() => {
    setErrors(validator(value));
  }, [value]);

  useEffect(() => {
    if (!hasErrors) return;

    validate();
  }, [hasErrors, validate]);

  return { value, setValue, errors, setErrors, validate, hasErrors };
};
export default useTextFieldErrors;
