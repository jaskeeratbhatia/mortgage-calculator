import React from "react";
import { fireEvent, cleanup, render } from "@testing-library/react";
import { Dashboard } from "../Dashboard";

describe("Form", () => {
  afterEach(cleanup);

  it("Mortgage amount should be rendered", async () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId("mortgageAmt")).toBeTruthy();
  });

  it("Rate should be rendered", async () => {
    const { getByTestId } = render(<Dashboard />);
    const rateInput = getByTestId("rate");
    expect(rateInput).toBeTruthy();
    expect(rateInput.value).toBe("5");
  });

  it("Amortization Period should be rendered", async () => {
    const { getByTestId } = render(<Dashboard />);
    const amortizationPeriod = getByTestId("amortizationPeriod");
    expect(amortizationPeriod).toBeTruthy();
    expect(amortizationPeriod.value).toBe("25");
  });

  it("Payment Frequency should be rendered correctly", async () => {
    const { getByTestId } = render(<Dashboard />);
    const paymentFrequencyInput = getByTestId("paymentFrequency");
    expect(paymentFrequencyInput).toBeTruthy();
    expect(paymentFrequencyInput.value).toBe("12");
  });

  it("Changing the value should change the value in select input", async () => {
    const { getByTestId } = render(<Dashboard />);
    const paymentFrequencyInput = getByTestId("paymentFrequency");
    fireEvent.change(paymentFrequencyInput, { target: { value: "24" } });
    expect(paymentFrequencyInput.value).toBe("24");
  });

  it("Term should be rendered correctly", async () => {
    const { getByTestId } = render(<Dashboard />);
    const termInput = getByTestId("term");
    expect(termInput).toBeTruthy();
    expect(termInput.value).toBe("5");
  });

  it("Changing the value should change the value in input", async () => {
    const { getByTestId } = render(<Dashboard />);
    const termInput = getByTestId("paymentFrequency");
    fireEvent.change(termInput, { target: { value: "24" } });
    expect(termInput.value).toBe("24");
  });
});
