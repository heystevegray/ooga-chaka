import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface StyleSheet {
  disableStyleSheets: boolean;
  setDisableStyleSheets: Dispatch<SetStateAction<boolean>>;
  styleSheetCount: number;
}

const useStyleSheets = ({ initialState = false }): StyleSheet => {
  const [disableStyleSheets, setDisableStyleSheets] = useState(initialState);

  useEffect(() => {
    try {
      [...document.styleSheets].forEach((stylesheet: CSSStyleSheet) => {
        try {
          stylesheet.disabled = disableStyleSheets;
        } catch (e) {
          console.warn(
            `usStyleSheets - Access to stylesheet ${stylesheet.href} is denied. Ignoring...`
          );
        }
      });
    } catch (error) {
      console.error(`usStyleSheets - Error parsing stylesheets 😬`);
    }
  }, [disableStyleSheets]);

  return {
    disableStyleSheets,
    styleSheetCount: document.styleSheets.length,
    setDisableStyleSheets,
  };
};

export default useStyleSheets;
