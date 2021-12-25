import React, { useState } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleOnSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ykiu25s",
        "contact_form",
        e.target,
        "user_BRUVe3i2hOLzfQYycpRJF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // clear form inputs
    setFname("");
    setLname("");
    setEmail("");
    setMessage("");
  }
  return (
    <div>
      <div className="contact-us" id="contact-us">
        <div className="contact-title">Contact Us</div>
        <div className="contact-section">
          <div className="contact-form">
            <form method="post" onSubmit={handleOnSubmit}>
              <div className="contact-name">
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  id="fname"
                  name="fname"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  id="lname"
                  name="lname"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="contact-info">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="contact-submit">
                <input type="submit" value="Send a message" />
              </div>
            </form>
          </div>
          <div className="contact-links">
            <div className="link-email">
              <i className="far fa-envelope"></i>
              <br />
              lourdene_buendia@yahoo.com
            </div>
            <div className="link-num">
              <i className="fas fa-phone"></i>
              <br />
              +639477994314
              <br />
              +639176380810
            </div>
            <div className="link-fb">
              <i className="fab fa-facebook-f"></i>
              <br />
              fb.com/lourdenebuendia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
