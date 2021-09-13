import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Dashboard } from "../Dashboard";

describe("Dashboard", () => {
  afterEach(cleanup);

  it("renders Mortgage form child correctly", () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId("mortgage-form-container")).toBeInTheDocument();
  });
});
