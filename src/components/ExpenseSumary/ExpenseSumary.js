import "./ExpenseSumary.css";

export const ExpenseSumary = ({ totalIncome, totalExpense }) => {
  const formattedIncome = totalIncome.toLocaleString("es-CL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedExpense = totalExpense.toLocaleString("es-CL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className="container mt-4 mb-4">
      <div className="div-sumary">
        <div className="span-sumary">
          <span>Expense Sumary</span>
        </div>

        <form className="row g-3 form-sumary">
          <div className="col-md-6 div-field-sumary">
            <div className="d-flex align-items-end">
              <label
                htmlFor="input-ingreso"
                className="form-label me-3 label-sumary"
              >
                Total Income
              </label>
            </div>
            <input
              type="text"
              className="input-sumary"
              id="input-ingreso"
              disabled
              value={formattedIncome}
            />
          </div>

          <div className="col-md-6 div-field-sumary">
            <label
              htmlFor="input-gasto"
              className="form-label me-3 label-sumary"
            >
              Total Expenses
            </label>
            <input
              type="text"
              className="input-sumary"
              id="input-gasto"
              disabled
              value={formattedExpense}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
