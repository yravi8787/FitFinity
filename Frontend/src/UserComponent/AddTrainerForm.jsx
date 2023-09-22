import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const AddTrainerForm = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [trainer, setTrainer] = useState({
    name: "",
    emailId: "",
    password: "",
    contact: "",
    address: "",
    experience: "",
    age: "",
  });

  const handleUserInput = (e) => {
    setTrainer({ ...trainer, [e.target.name]: e.target.value });
  };

  const saveTrainer = () => {
    const formData = new FormData();
    formData.append("pic", selectedPhoto);
    formData.append("name", trainer.name);
    formData.append("emailId", trainer.emailId);
    formData.append("password", trainer.password);
    formData.append("contact", trainer.contact);
    formData.append("address", trainer.address);
    formData.append("experience", trainer.experience);
    formData.append("age", trainer.age);

    axios
      .post("http://localhost:8080/api/trainer/register", formData)
      .then((resp) => {
        console.log("here registyer success");
        toast.success("Registered Successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
    <div className="mt-4">
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color custom-bg"
          style={{ width: "30rem" }}
        >
          <div className="card-header text-center text-color-1 custom-bg">
            <h5 className="card-title">Register Trainer</h5>
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
                  value={trainer.name}
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
                  value={trainer.emailId}
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
                  value={trainer.contact}
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={trainer.password}
                  required
                />
              </div>

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
                  value={trainer.address}
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
                  value={trainer.age}
                  required
                />
              </div>
              <div className="col-6">
                <label for="experience" className="form-label">
                  Experience
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="experience"
                  name="experience"
                  onChange={handleUserInput}
                  value={trainer.experience}
                  required
                />
              </div>

              <div className="col-12">
                <label for="pic" className="form-label">
                  Select Trainer Photo
                </label>
                <input
                  input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="pic"
                  onChange={(e) => setSelectedPhoto(e.target.files[0])}
                />
              </div>

              <div className="col-12">
                <input
                  type="submit"
                  className="btn custom-bg-1 text-color"
                  value="Register Trainer"
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

export default AddTrainerForm;
