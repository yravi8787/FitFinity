const ContactUs = () => {
  return (
    <div className="container">
      <h2 className="text-color-1 mt-4 ">Contact us</h2>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write your query here"
        ></textarea>
      </div>
      <button type="button" className="btn btn-info mt-5">
        Submit
      </button>
    </div>
  );
};

export default ContactUs;
