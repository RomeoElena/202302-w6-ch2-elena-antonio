import { render } from "@testing-library/react";
import App from "./App";

describe("Given the App component", () => {
  describe("When it is rendered", () => {
    test("Then it should", () => {
      render(<App />);
    });
  });
});
