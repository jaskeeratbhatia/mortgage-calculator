export const tooltipText = {
  TERM: "The number of term years.",
  PAYMENT_FREQUENCY:
    "By choosing an accelerated payment frequency, you can reduce your amortization period and save thousands of dollars in interest in the long run.",
  RATE: "Annual interest rate for this mortgage.",
  AMORTIZATION:
    "The number of years and months over which you will repay this loan. The most common amortization period is 25 years.",
  MORTGAGE: "The amount you expect to borrow from your financial institution.",
};

export const paymentFrequencyOptions = [
  {
    key: "weekly",
    label: "Weekly",
    value: 52,
  },
  {
    key: "biweekly",
    label: "Bi-Weekly (every 2 weeks)",
    value: 26,
  },
  {
    key: "monthly",
    label: "Monthly (12x per year)",
    value: 12,
  },
  {
    key: "semimonthly",
    label: "Semi-monthly (24x per year)",
    value: 24,
  },
];

export const getTermOptions = () => {
  let termOptionsArray = [];
  for (let i = 1; i <= 30; i++) {
    termOptionsArray.push({
      label: `${i}`,
      value: i,
    });
  }
  return termOptionsArray;
};

export const summaryCategories = {
  NUMBER_OF_PAYMENTS: "Number of Payments",
  MORTGAGE_PAYMENT: "Mortgage Payment",
  PRINCIPAL_PAYMENTS: "Principal Payments",
  INTEREST_PAYMENTS: "Interest Payments",
  TOTAL_COST: "Total Cost",
};
