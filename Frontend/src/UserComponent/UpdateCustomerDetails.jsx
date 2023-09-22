import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateCustomerDetails = () => {
  var customerDetail = JSON.parse(sessionStorage.getItem("active-customer"));

  const navigate = useNavigate();

  let customerFetched = {
    ...customerDetail,
  };

  useEffect(() => {
    setCustomer(customerFetched);
  }, []);

  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    dob: "",
    contact: "",
    address: "",
    weight: "",
    age: "",
    sex: "",
    membershipId: "",
    pic: "",
  });

  const handleUserInput = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const saveTrainer = () => {
    const formData = new FormData();
    formData.append("id", customer.id);
    formData.append("name", customer.name);
    formData.append("emailId", customer.emailId);
    formData.append("contact", customer.contact);
    formData.append("address", customer.address);
    formData.append("weight", customer.weight);
    formData.append("age", customer.age);
    formData.append("clientId", customer.clientId);
    formData.append("sex", customer.sex);

    axios
      .post("http://localhost:8080/api/customer/update", formData)
      .then((resp) => {
        sessionStorage.setItem("active-customer", JSON.stringify(resp));
        console.log("here register success");
        toast.success("Registered Successfully!!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/customer/profile/");
      })
      .catch((error) => {
        console.log("here registyer failed");
        console.log("Error", error);
        toast.error("Failed to Register Trainer!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <div className="mt-4 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color custom-bg"
          style={{ width: "30rem" }}
        >
          <div className="card-header text-center text-color-1 custom-bg">
            <h5 className="card-title">Update Customer Details</h5>
          </div>
          <div className="card-body">
            <form className="row g-3 text-color-1" onSubmit={saveTrainer}>
              <div className="col-md-6">
                <label for="name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleUserInput}
                  value={customer.name}
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="emailId" className="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={customer.emailId}
                  required
                />
              </div>

              <div className="col-md-6">
                <label for="contact" className="form-label">
                  Contact No
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  name="contact"
                  onChange={handleUserInput}
                  value={customer.contact}
                  required
                />
              </div>
              <div className="col-md-6"></div>

              <div className="col-12">
                <label for="address" className="form-label">
                  Address
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  onChange={handleUserInput}
                  value={customer.address}
                  required
                />
              </div>
              <div className="col-6">
                <label for="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  onChange={handleUserInput}
                  value={customer.age}
                  required
                />
              </div>
              <div className="col-6">
                <label for="weight" className="form-label">
                  Weight
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  name="weight"
                  onChange={handleUserInput}
                  value={customer.weight}
                  required
                />
              </div>

              <div className="col-12">
                <input
                  type="submit"
                  className="btn custom-bg-1 text-color"
                  value="Update Customer Details"
                />
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomerDetails;
