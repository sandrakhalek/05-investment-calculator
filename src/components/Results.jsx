import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ data }) {
  const resultsData = calculateInvestmentResults(data);
  const initialInvestment =
    resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (value)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((item) => {
          const totalInterest =
            item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
          const totalAmoutnInvested = item.valueEndOfYear - totalInterest;

          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmoutnInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export { Results };
