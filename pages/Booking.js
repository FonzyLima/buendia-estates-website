import styles from "../styles/booking.module.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Toast from "../components/Toast";
import { Slider } from "@mui/material";

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
          setSliderValue([2500000, 8000000]);
          setName("");
          setFb("");
          setEmail("");
          setAge(null);
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
  const [name, setName] = useState("");
  const [fb, setFb] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [sched, setSched] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [sliderValue, setSliderValue] = useState([2500000, 8000000]);
  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };
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
                    required
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
                    required
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
                  <Slider
                  valueLabelDisplay="on"
                  value={sliderValue}
                  onChange={handleChange}
                  min={1000000}
                  max={10000000}
                  step={10000}
                  name="yourBudget"
                />
                </div>

                <div className={`mb-4 ${styles["form-outline"]}`}>
                  <label className="form-label" htmlFor="yourBudget">
                    Your Name
                  </label>
                  <input
                    required
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
                        required
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
                        required
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
                        required
                        type="number"
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                        name="age"
                        min="0"
                        step="1"
                        id="Age"
                        className="form-control"
                        placeholder="Age"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className={styles["form-outline"]}>
                      <input
                        required
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
                    required
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
                    required
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
