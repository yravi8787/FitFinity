import { Link } from "react-router-dom";

const HeaderNormal = () => {
  return (
    <div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
        <li className="nav-item">
          <Link
            to="/admin/register"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">Register Admin</b>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/login"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">Login Admin</b>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/customer/register"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">Register Customer</b>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/customer/login"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">Login Customer</b>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNormal;
