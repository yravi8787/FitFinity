import { Link } from "react-router-dom";
import Logo from "../images/gym_logo.png";
const Footer = () => {
  return (
    <div className="container">
      <footer className="text-center text-lg-start text-white">
        <div className="container-fluid p-4 pb-0">
          <section className="">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <img src={Logo} alt="gym" className="footer-logo" />
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-color-3">Fit-Finity</h5>

                <p>
                  Being a 24/7 gym is one of our best amenities because we can
                  offer our members unrestricted freedom of access from sun up
                  to sun down and everywhere in between. You no longer have to
                  worry about cramming in gym time before we close!
                </p>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-flex justify-content-center flex-column align-items-center">
                <h5 className="text-uppercase text-color-4">About us</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      BMI Calculator
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      All Package
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Trainers
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-flex justify-content-center flex-column align-items-center">
                <h5 className="text-uppercase text-color-4">Authentication</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Register Admin
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Login Admin
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Register Customer
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Login Customer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="mb-4" />

          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <Link to="/customer/register" className="active">
                <button
                  type="button"
                  className="btn btn-outline-light btn-rounded"
                >
                  Sign up!
                </button>
              </Link>
            </p>
          </section>

          <hr className="mb-4" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
