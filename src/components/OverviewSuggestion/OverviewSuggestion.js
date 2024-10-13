import "./OverviewSuggestion.css";
import { Link, useParams } from "react-router-dom";


export const OverviewSuggestion = () => {
  const { accountId } = useParams();
  console.log(accountId);

  return (
    <div className="content-fluid content-fluid-overview" id="mission-view">
      <div className="row row-overview">
        <a className="col-6 justify-content-center d-flex card-hover-overview">
        <Link to={"/detailflow/BasicFinancial/"+accountId} >
          <div className="card card-main-overview">
            <div>
              <img src="../basic.jpg" alt="basic" className="img-overview" />
            </div>
            <p className="card-title">Basic Financial Management (50/30/20)</p>
          </div>
          </Link>
        </a>
        <Link className="col-6 justify-content-center d-flex card-hover-overview" to={`/detailflow/${accountId}/goalbase`}>
          <div className="card card-main-overview">
            <div>
              <img src="../metas.jpg" alt="metas" className="img-overview" />
            </div>
            <p className="card-title">Goal-Based Financial Management</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
