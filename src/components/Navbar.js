import { Link, useLocation } from "react-router-dom";
import React from "react";

function Navbar() {
  const location = useLocation();
  const isLoginView = location.pathname === "/login";

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid navbarStyle d-flex justify-content-between align-items-center">
        <Link className="navbar-brand navbar-link" to="/">
          <div>
            <img src="../logoWallet.jpeg" alt="logo" width="30" height="24" />
            <span className="ms-2">WalletWise</span>
          </div>
        </Link>
        {!isLoginView && (
          <>
            <div className="d-lg-none ms-auto">
              <Link type="button" className="btn btn-light" to="/login">
                Log in
              </Link>
            </div>

            <div className="d-flex">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a
                    className="nav-link navbar-link"
                    aria-current="page"
                    href="#"
                  >
                    Support
                  </a>
                  <div className="dropdown">
                    <ul className="navbar-nav">
                      <Link
                        type="button"
                        className="nav-link navbar-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        About us
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#mission-view">
                            Learn more about us
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#service-view">
                            Services
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <a className="nav-link navbar-link" href="#">
                    Sign up
                  </a>
                </div>
              </div>
              <div className="d-none d-lg-flex">
                <Link type="button" className="btn btn-light" to="/login">
                  Log in
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
