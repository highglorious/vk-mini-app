import { useEffect, useRef } from "react";

export const useRefCursorAfterWord = <T extends HTMLTextAreaElement>(
  disabled: boolean
) => {
  const ref = useRef<T>(null);

  const elem = ref.current;
  useEffect(() => {
    if (!disabled) {
      if (elem) {
        const space = elem.value.indexOf(" ");
        const comma = elem.value.indexOf(",");
        elem.focus();
        if (space === -1 && comma !== -1) {
          elem.setSelectionRange(comma, comma);
        } else if (space !== -1 && comma === -1) {
          elem.setSelectionRange(space, space);
        } else if (space > comma) {
          elem.setSelectionRange(comma, comma);
        } else {
          elem.setSelectionRange(space, space);
        }
      }
    }
  });
  return ref;
};
