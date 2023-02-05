import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form 
  method="POST" 
  action="https://script.google.com/macros/s/AKfycbwoC_JJynshpPdCbC_5QkUj3Ozh2Np-8bOGDqS-bUHU1HF7zMpaaE5wAKyG5nuCYw5w/exec"
>  <div className="form-group">
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
  );
};

export default ContactForm;
