import React from "react";
import { fireEvent, cleanup, render } from "@testing-library/react";
import { Dashboard } from "../Dashboard";

describe("Summary Table", () => {
  afterEach(cleanup);

  it("Summary table should not be rendered in case of any error", () => {
    const { queryByTestId, getByTestId } = render(<Dashboard />);
    const mortgageAmt = getByTestId("mortgageAmt");
    const rateInput = getByTestId("rate");
    const amortizatoinPeriodInput = getByTestId("amortizationPeriod");
    const paymentFrequencyInput = getByTestId("paymentFrequency");
    const termInput = getByTestId("term");
    fireEvent.change(mortgageAmt, { target: { value: "1000000" } });
    fireEvent.change(rateInput, { target: { value: "105" } });
    fireEvent.change(amortizatoinPeriodInput, { target: { value: "25" } });
    fireEvent.change(paymentFrequencyInput, { target: { value: "12" } });
    fireEvent.change(termInput, { target: { value: "5" } });
    fireEvent.blur(mortgageAmt);
    expect(queryByTestId("summary-table")).not.toBeTruthy();
  });
});
