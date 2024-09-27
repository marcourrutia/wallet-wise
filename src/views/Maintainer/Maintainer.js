import { CategoryTab } from "../../components/Maintainer/CategoryTab";
import { MovemenTab } from "../../components/Maintainer/MovemenTab";
import { TransactionTab } from "../../components/Maintainer/TransactionTab";

export const Maintainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-body p-2">
          <ul className="nav nav-pills nav-fill" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Tipo movimiento
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Categoría
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Transacciones
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <MovemenTab />
            <CategoryTab />
            <TransactionTab />
          </div>
        </div>
      </div>
    </div>
  );
};
