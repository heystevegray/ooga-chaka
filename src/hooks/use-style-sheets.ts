import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface StyleSheet {
  disableStyleSheets: boolean;
  setDisableStyleSheets: Dispatch<SetStateAction<boolean>>;
  styleSheetCount: number;
}

const useStyleSheets = (initialState = false): StyleSheet => {
  const [disableStyleSheets, setDisableStyleSheets] = useState(initialState);

  useEffect(() => {
    try {
      for (let i = 0; i < document.styleSheets.length; i++) {
        const styleSheet: Partial<CSSStyleSheet> = document.styleSheets[i];

        try {
          styleSheet.disabled = disableStyleSheets;
        } catch (e) {
          console.warn(
            `useStyleSheets - Access to stylesheet ${styleSheet.href} is denied. Ignoring...`
          );
        }
      }
    } catch (error) {
      console.error(`useStyleSheets - Error parsing stylesheets 😬`);
    }
  }, [disableStyleSheets]);

  return {
    disableStyleSheets,
    styleSheetCount: document.styleSheets.length,
    setDisableStyleSheets,
  };
};

export default useStyleSheets;
