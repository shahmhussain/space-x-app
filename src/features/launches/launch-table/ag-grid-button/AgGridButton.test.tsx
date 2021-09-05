import { render, screen } from "@testing-library/react";
import { AgGridButton } from "./AgGridButton";

describe("Ag Grid Button", () => {
  it("should render AgGridButton with text hello when hello is passed in btnText", () => {
    render(<AgGridButton btnText="hello" />);

    expect(screen.getByTestId("ag-grid-button").textContent).toContain("hello");
  });
});
