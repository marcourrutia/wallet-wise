import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./BreadCrumb.css";

export const BreadCrumb = () => {
  const { accountId } = useParams();
  const location = useLocation();
  const isGoalBaseView = location.pathname.endsWith("/goalbase");
  const navigate = useNavigate();

  return (
    <div>
      <nav
        style={{ "--bs-breadcrumb-divider": "'>'" }}
        aria-label="breadcrumb"
        className="breadcrumb-nav"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item ">
            <span
              className="span-bread-crumb"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </span>
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
