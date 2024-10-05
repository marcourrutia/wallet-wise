import "./OverviewSuggestion.css";

export const OverviewSuggestion = () => {
  return (
    <div className="content-fluid content-fluid-overview" id="mission-view">
      <div className="row row-overview">
        <a className="col-6 justify-content-center d-flex card-hover-overview">
          <div className="card card-main-overview">
            <div>
              <img src="../basic.jpg" alt="basic" className="img-overview" />
            </div>
            <p className="card-title">Basic Financial Management (50/30/20)</p>
          </div>
        </a>
        <a className="col-6 justify-content-center d-flex card-hover-overview">
          <div className="card card-main-overview">
            <div>
              <img src="../metas.jpg" alt="metas" className="img-overview" />
            </div>
            <p className="card-title">Goal-Based Financial Management</p>
          </div>
        </a>
      </div>
    </div>
  );
};
