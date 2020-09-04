import { renderHook } from "@testing-library/react-hooks";
import { useStyleSheets } from "../index";

const { result } = renderHook(() => useStyleSheets());

test("setDisableStyleSheets should be defined", () => {
  expect(result.current.setDisableStyleSheets).toBeDefined();
});

test("styleSheetCount should be defined", () => {
  expect(result.current.styleSheetCount).toBeDefined();
});

test("disableStyleSheets should be defined", () => {
  expect(result.current.disableStyleSheets).toBeDefined();
});
