import React, { useState } from "react";
import './style.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [response, setResponse] = useState({
    status: "",
    message: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwoC_JJynshpPdCbC_5QkUj3Ozh2Np-8bOGDqS-bUHU1HF7zMpaaE5wAKyG5nuCYw5w/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        mode: "no-cors",
        body: new URLSearchParams(formData).toString()
      });
      if (response) {
        setResponse({
          status: "success",
          message: "Form Submitted Successfully"
        });
      } else {
        setResponse({
          status: "error",
          message: "Submisssion Failed, Try Again"
        });
      }
    } catch (error) {
      setResponse({
        status: "error",
        message: error.toString()
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="Mail"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="Message"
            rows="4"
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
      {response.status === "success" && (
        <div className="alert alert-success">{response.message}</div>
      )}
      {response.status === "error" && (
        <div className="alert alert-danger">{response.message}</div>
      )}
    </div>
  );
};

export default ContactForm;