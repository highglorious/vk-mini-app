import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useDebouncedValue = <T>(
  value: T,
  delay = 500
): [T, Dispatch<SetStateAction<T>>] => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return [debouncedValue, setDebouncedValue];
};
