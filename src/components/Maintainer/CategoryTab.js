export const CategoryTab = () => {
    return (
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
          <div className="col-sm-auto col-12 mt-4 mt-sm-0">
            <div className="hstack gap-2 justify-content-sm-end p-2">
              <button type="button" className="btn btn-primary">Agregar</button>
            </div>
          </div>
          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover table-nowrap">
                <thead className="table-light">
                  <tr>
                    <th><input className="form-check-input me-1" type="checkbox" value="" /></th>
                    <th scope="col">ID</th>
                    <th scope="col">Movimiento</th>
                    <th scope="col">Categoría</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input className="form-check-input me-1" type="checkbox" value="" /></td>
                    <td>1</td>
                    <td>Egreso</td>
                    <td>Gasto variable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}