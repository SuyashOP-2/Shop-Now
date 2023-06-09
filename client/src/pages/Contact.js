import Layout from "./../components/Layout/Layout";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_db1hrvm",
        "template_acalmlp",
        e.target,
        "O2mx4ELGYiph35fRK"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
          setLoading(false);
          navigate(location.state || "/");
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred while sending email.");
          setLoading(false);
        }
      );
    e.target.reset();
  };

  return (
    <Layout title={"Contact us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-center mt-2">Contact Us</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                required
              />
            </div>
            <button type="submit" className="contact-button" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;