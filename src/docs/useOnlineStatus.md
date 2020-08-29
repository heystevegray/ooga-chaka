### `useOnlineStatus`

A React Hook that subscribes to `window` [online](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event) and [offline](https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event) events.

#### Usage

```tsx
import { useOnlineStatus } from "ooga-chaka";

const App = () => {
  const [status, setStatus] = useState("");
  const { online } = useOnlineStatus();

  useEffect(() => {
    const onlineStatus = online ? "online 😎!" : "offline 😭...";
    setStatus(`You are currently ${onlineStatus}`);
  }, [online]);

  return (
    <div>
      <h1>{status}</h1>
      <p>Toggle your internet connection to see the network status change.</p>
    </div>
  );
};
```

#### Resources

- [Window: online event](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event)
- [Window: offline event](https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event)
- [Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine)
