import "./ExpenseSumary.css";

export const ExpenseSumary = () => {
  return (
    <div className="container mt-4 mb-4">
      <div className="div-sumary">
        <div className="span-sumary">
          <span>Expense Sumary</span>
        </div>

        <form className="row g-3 form-sumary">
          <div className="col-md-6 div-field-sumary">
            <div className="d-flex align-items-end">
              <label htmlFor="input-ingreso" className="form-label me-3">
                Total Income
              </label>
            </div>
            <input type="number" className="input-sumary" id="input-ingreso" disabled/>
          </div>

          <div className="col-md-6 div-field-sumary">
            <label
              htmlFor="input-gasto"
              className="form-label me-3 label-sumary"
            >
              Total Expenses
            </label>
            <input type="number" className="input-sumary" id="input-gasto" disabled/>
          </div>
        </form>
      </div>
    </div>
  );
};
