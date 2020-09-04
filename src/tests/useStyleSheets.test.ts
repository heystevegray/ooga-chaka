import { renderHook } from "@testing-library/react-hooks";
import { useStyleSheets } from "../index";

const { result } = renderHook(() => useStyleSheets());

test("disableStyleSheets should be defined", () => {
  expect(result.current.disableStyleSheets).toBeDefined();
});

test("setDisableStyleSheets should be defined", () => {
  expect(result.current.setDisableStyleSheets).toBeDefined();
});

test("styleSheetCount should be defined", () => {
  expect(result.current.styleSheetCount).toBeDefined();
});
