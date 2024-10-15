import { CategoryTab } from "../../components/Maintainer/CategoryTab";
import { MovemenTab } from "../../components/Maintainer/MovemenTab";
import { TransactionTab } from "../../components/Maintainer/TransactionTab";
import "../../components/Maintainer/Maintainer.css";

export const Maintainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-body p-2 mt-5">
          <ul
            className="nav nav-tabs nav-pills nav-fill"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <button
                className="nav-link nav-option-maintainer-a active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Transaction
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link nav-option-maintainer-a"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Type of Movement
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link nav-option-maintainer-a"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Category
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <TransactionTab />
            <MovemenTab />
            <CategoryTab />
          </div>
        </div>
      </div>
    </div>
  );
};
