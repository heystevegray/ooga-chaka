import { useState, useEffect } from "react";

interface OnlineStatus {
  online: boolean;
}

const useOnlineStatus = (): OnlineStatus => {
  const [isOnline, setIsOnline] = useState(navigator?.onLine || false);
  const handleOnline = (): void => setIsOnline(true);
  const handleOffline = (): void => setIsOnline(false);

  useEffect(() => {
    // Subscribe to network events.
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      // Unsubscribe to network events.
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return {
    online: isOnline,
  };
};

export default useOnlineStatus;
