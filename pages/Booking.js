import styles from "../styles/booking.module.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Toast from "../comps/Toast";

const Booking = () => {
  //Calls the toast component to be displayed
  const notify = React.useCallback((type, message) => {
    Toast({ type, message });
  }, []);

  const dismiss = React.useCallback(() => {
    Toast.dismiss();
  }, []);

  // Submit function to send email and clear form
  async function handleOnSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ykiu25s",
        "booking_form",
        e.target,
        "user_BRUVe3i2hOLzfQYycpRJF"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify("success", "Booking Placed");
          // clear form inputs
          setLocation("");
          setPropertyType("");
          setBudget("");
          setName("");
          setFb("");
          setEmail("");
          setAge(0);
          setGender("");
          setOccupation("");
          setSched("");
          setNotes("");
        },
        (error) => {
          console.log(error.text);
          notify("error", "Booking Failed Please Try Again");
        }
      );

  
  }

  // Initial values of form inputs
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [fb, setFb] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [sched, setSched] = useState(new Date());
  const [notes, setNotes] = useState("");

  return (
    <div>
      <div className="hero">
        <div className={styles["hero-image"]}>
          <div className={styles["hero-text"]}>
            <h1>Book A Viewing</h1>
            <p>
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid.
            </p>
          </div>

          <div className={styles.search}>
            <div className={styles["booking-content"]}>
              <h3 className="mb-4" style={{ fontWeight: "500" }}>
                Schedule A Viewing
              </h3>
              <form method="post" onSubmit={handleOnSubmit}>
                <div className={`mb-4 ${styles["form-outline"]}`}>
                  <label className="form-label" htmlFor="prefLocation">
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    name="prefLocation"
                    id="prefLocation"
                    className="form-control"
                  />
                </div>

                <div className={`mb-4 ${styles["form-outline"]}`}>
                  <label className="form-label" htmlFor="prefPropType">
                    Preferred Property Type
                  </label>
                  <input
                    type="text"
                    value={propertyType}
                    onChange={(e) => {
                      setPropertyType(e.target.value);
                    }}
                    name="prefPropType"
                    id="prefPropType"
                    className="form-control"
                  />
                </div>

                <div className={`mb-4 ${styles["form-outline"]}`}>
                  <label className="form-label" htmlFor="yourBudget">
                    Your Budget
                  </label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => {
                      setBudget(e.target.value);
                    }}
                    name="yourBudget"
                    id="yourBudget"
                    className="form-control"
                  />
                </div>

                <div className={`mb-4 ${styles["form-outline"]}`}>
                  <label className="form-label" htmlFor="yourBudget">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="yourName"
                    id="yourName"
                    className="form-control"
                  />
                </div>

                <label>Contact Details</label>

                <div className="row mb-2">
                  <div className="col">
                    <div className={styles["form-outline"]}>
                      <input
                        type="text"
                        value={fb}
                        onChange={(e) => {
                          setFb(e.target.value);
                        }}
                        name="fbdetails"
                        id="firstName"
                        className="form-control"
                        placeholder="Facebook or IG Handle"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className={styles["form-outline"]}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        name="email"
                        id="lastName"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <div className={styles["form-outline"]}>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                        name="age"
                        id="Age"
                        className="form-control"
                        placeholder="Age"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className={styles["form-outline"]}>
                      <input
                        type="text"
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        name="gender"
                        id="Gender"
                        placeholder="Gender"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className={`mb-4 ${styles["form-outline"]}`}>
                  <label className="form-label" htmlFor="Occupation">
                    Occupation
                  </label>
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => {
                      setOccupation(e.target.value);
                    }}
                    name="occupation"
                    id="Occupation"
                    className="form-control"
                  />
                </div>

                <div className={`mb-4 ${styles["form-outline"]}`}>
                  <label className="form-label" htmlFor="prefSched">
                    Preferred Schedule
                  </label>
                  <input
                    type="date"
                    value={sched}
                    onChange={(e) => {
                      setSched(e.target.value);
                    }}
                    name="prefSched"
                    id="prefSched"
                    className="form-control"
                  />
                </div>

                <div className={`mb-4 ${styles["form-outline"]}`}>
                  <label className="form-label" htmlFor="addNotes">
                    Additional Notes
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => {
                      setNotes(e.target.value);
                    }}
                    name="addNotes"
                    id="addNotes"
                    className="form-control"
                  />
                </div>

                <button
                  type="submit"
                  className={`${styles["btn-primary"]} ${styles["mb-4"]}`}
                >
                  Submit Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.newbox}></div>
    </div>
  );
};

export default Booking;
