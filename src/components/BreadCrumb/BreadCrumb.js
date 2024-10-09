import { useParams, useLocation } from "react-router-dom";
import "./BreadCrumb.css";

export const BreadCrumb = () => {
  const { accountId } = useParams();
  const location = useLocation();
  const isGoalBaseView = location.pathname.endsWith("/goalbase");

  return (
    <div>
      <nav
        style={{ "--bs-breadcrumb-divider": "'>'" }}
        aria-label="breadcrumb"
        className="breadcrumb-nav"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item ">
            <a href="/home">Home</a>
          </li>
          <li className="breadcrumb-item active breadcrumb-item-better">
            <a href={`/detailflow/${accountId}`}>Detail Flow</a>
          </li>
          {isGoalBaseView && (
            <li
              className="breadcrumb-item active breadcrumb-item-better"
              aria-current="page"
            >
              Goal Base
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};
