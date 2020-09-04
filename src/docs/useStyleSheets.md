# `useStyleSheets`

A React Hook that disables or enables all [CSS stylesheets](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) in your application. Ya let's be honest, this was just a fluff hook for the portfolio 🤓.

## Usage

```tsx
import React, { useState, useEffect } from "react";
import { useStyleSheets } from "ooga-chaka";

const App = () => {
  const [status, setStatus] = useState("");

  const {
    disableStyleSheets,
    setDisableStyleSheets,
    styleSheetCount,
  } = useStyleSheets();

  useEffect(() => {
    const status = disableStyleSheets ? "Disabled" : "Enabled";
    setStatus(
      `Stylesheets are ${status}. You have ${styleSheetCount} stylesheets.`
    );
  }, [disableStyleSheets, styleSheetCount]);

  return (
    <div
      style={{
        background: "#101010",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
        color: "#ffffff",
      }}
    >
      <h1>{status}</h1>
      <button onClick={() => setDisableStyleSheets(!disableStyleSheets)}>
        Disable Stylesheets
      </button>
    </div>
  );
};

export default App;
```

## Resources

- [How to disable or enable a stylesheet in JavaScript](https://guides.codechewing.com/js/disable-enable-stylesheet-javascript)
- [StyleSheetList](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheetList)
- [CSSStyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet)
- [StyleSheet.disabled](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/disabled)
