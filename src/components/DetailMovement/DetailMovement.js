import "./DetailMovement.css";

export const DetailMovement = () => {
  return (
    <div className="container mt-4 mb-4">
      <div className="style-movement">
        <table className="table table-head">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
        </table>
        <table className="table table-body-transaction">
          <thead>
            <tr>
              <th scope="col">Name of categori</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
