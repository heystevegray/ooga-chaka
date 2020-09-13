import { renderHook } from "@testing-library/react-hooks";
import { useRandomBetween } from "../index";

test("useRandomBetween should be defined", () => {
  const { result } = renderHook(() => useRandomBetween());
  expect(result).toBeDefined();
});

test("useRandomBetween with no arguments should be between 0 or 1", () => {
  const { result } = renderHook(() => useRandomBetween());
  expect(result.current === 0 || result.current === 1).toBe(true);
});

test("useRandomBetween should be between min and max", () => {
  const min = 5;
  const max = 10;
  const { result } = renderHook(() => useRandomBetween(false, min, max));
  const { result: floored } = renderHook(() =>
    useRandomBetween(true, min, max)
  );
  expect(result.current >= min && result.current <= max).toBe(true);
  expect(floored.current >= min && floored.current <= max).toBe(true);
});

test("useRandomBetween should use floor", () => {
  const { result } = renderHook(() => useRandomBetween(true));
  expect(Number.isInteger(result.current)).toBe(true);
});
