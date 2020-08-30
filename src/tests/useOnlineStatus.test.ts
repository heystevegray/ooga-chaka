import { renderHook } from "@testing-library/react-hooks";
import useOnlineStatus from "../hooks/use-online-status";

test("useOnlineStatus should match navigator.online", () => {
  const { result } = renderHook(() => useOnlineStatus());
  expect(result.current.online).toBe(navigator.onLine);
});

test("useOnlineStatus should be defined", () => {
  const { result } = renderHook(() => useOnlineStatus());
  expect(result.current.online).toBeDefined();
});
