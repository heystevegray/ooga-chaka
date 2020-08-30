import { renderHook } from "@testing-library/react-hooks";
import useOnlineStatus from "../hooks/use-online-status";

test("should useOnlineStatus", () => {
  const { result } = renderHook(() => useOnlineStatus());
  expect(result.current.online).toBe(navigator.onLine);
});

test("useOnlineStatus should be defined", () => {
  const { result } = renderHook(() => useOnlineStatus());
  expect(result.current.online).toBe(navigator.onLine);
});
