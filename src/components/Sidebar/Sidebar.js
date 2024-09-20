export const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-auto bg-light sticky-top">
          <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
            <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Home"
                >
                  <i class="fa-regular fa-house"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Products"
                >
                  <i className="bi-heart fs-1"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm p-3 min-vh-100"></div>
        </div>
      </div>
    </div>
  );
};
