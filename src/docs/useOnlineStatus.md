# `useOnlineStatus`

A React Hook that subscribes to `window` [online](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event) and [offline](https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event) events.

## Usage

```tsx
import React, { useState, useEffect } from "react";
import { useOnlineStatus } from "ooga-chaka";

const App = () => {
  const [status, setStatus] = useState("");
  const { online } = useOnlineStatus();

  useEffect(() => {
    const onlineStatus = online ? "online 😎!" : "offline 😭...";
    setStatus(`You are ${onlineStatus}`);
  }, [online]);

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
      }}
    >
      <h1>{status}</h1>
      <p>Toggle your internet connection to see the network status change.</p>
    </div>
  );
};

export default App;
```

## Resources

- [Window: online event](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event)
- [Window: offline event](https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event)
- [Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine)
