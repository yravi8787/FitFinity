import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  let navigate = useNavigate();

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("active-user");
    navigate("/home");
    window.location.reload(true);
  };

  return (
    <div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
        <li className="nav-item">
          <Link
            to="/package/add"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">Add Package</b>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/admin/membership/add"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">Add Membership</b>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/admin/customer/search"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">Search Customer</b>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/trainer/register"
            className="nav-link active"
            aria-current="page"
          >
            <b className="text-color-1">Add Trainer</b>
          </Link>
        </li>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
          <li className="nav-item">
            <Link
              to=""
              className="nav-link active"
              aria-current="page"
              onClick={adminLogout}
            >
              <b className="text-color-1">Logout</b>
            </Link>
            <ToastContainer />
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default HeaderAdmin;
