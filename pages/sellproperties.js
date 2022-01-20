import styles from "../styles/sellproperties.module.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Toast from "../components/Toast";

const Sellproperties = () => {
  //Calls the toast component to be displayed
  const notify = React.useCallback((type, message) => {
    Toast({ type, message });
  }, []);

  const dismiss = React.useCallback(() => {
    Toast.dismiss();
  }, []);
  //Function to reset form
  const resetForm = () => {
    document.getElementById("sellForm").reset();
  };
  async function handleOnSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ykiu25s",
        "sell_properties",
        e.target,
        "user_BRUVe3i2hOLzfQYycpRJF"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify("success", "Message Sent");
          // clear form inputs
          resetForm();
        },
        (error) => {
          console.log(error.text);
          notify("error", "Message Failed to Send, Please Try Again");
        }
      );
  }

  return (
    <div>
      <div className="hero">
        <div className={styles["hero-image"]}>
          <div className={styles["hero-text"]}>
            <h1>Sell A Property</h1>
            <p>
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid.
            </p>
          </div>
        </div>

        <div className={styles["sell-bg"]}>
          <div className={styles["sell-box"]}>
            <h3 className="sellform-title">Sell A Property</h3>
            <form id="sellForm" method="post" onSubmit={handleOnSubmit}>
              <div className={`mb-4 ${styles["form-outline"]}`}>
                <label className="form-label" htmlFor="property-type">
                  Type
                </label>
                <select
                  required
                  id="type"
                  name="type"
                  className="form-control inputbox"
                >
                  <option value="preselling">Pre-selling</option>
                  <option value="old">Old</option>
                  <option value="new">New</option>
                </select>
              </div>

              <div className={`mb-4 ${styles["form-outline"]}`}>
                <label className="form-label" htmlFor="property-type">
                  Property Type
                </label>
                <select
                  required
                  id="property-type"
                  name="propertyType"
                  className="form-control"
                >
                  <option value="condo">Condominium</option>
                  <option value="commercial">Commercial</option>
                  <option value="house-and-lot">House and Lot</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>

              <div className={`mb-4 ${styles["form-outline"]}`}>
                <label className="form-label" htmlFor="selling-price">
                  Selling Price
                </label>
                <input
                  required
                  type="number"
                  id="selling-price"
                  name="sellingPrice"
                  min="0"
                  className="form-control"
                />
              </div>

              <label>Address</label>
              <div className={`${styles["form-outline"]} mb-2`}>
                <input
                  required
                  type="text"
                  id="street-address"
                  name="streetAddress"
                  className="form-control"
                  placeholder="Street Address"
                />
              </div>

              <div className="row mb-2">
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="text"
                      id="city"
                      name="city"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="text"
                      id="region"
                      name="region"
                      className="form-control"
                      placeholder="Region"
                    />
                  </div>
                </div>
              </div>

              <div className={`row ${styles["mb-4"]}`}>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="number"
                      min="0"
                      id="zip-code"
                      name="zipCode"
                      className="form-control"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="url"
                      id="maps-link"
                      name="mapsLink"
                      className="form-control"
                      placeholder="Waze/Google Maps Link"
                    />
                  </div>
                </div>
              </div>

              <label className="mt-4">Property Info</label>

              <div className="row mb-2">
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="number"
                      min="0"
                      id="floor-area"
                      name="floorArea"
                      className="form-control"
                      placeholder="Floor Area"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="number"
                      min="0"
                      id="lot-area"
                      name="lotArea"
                      className="form-control"
                      placeholder="Lot Area"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="number"
                      min="0"
                      id="bedrooms"
                      name="bedrooms"
                      className="form-control"
                      placeholder="Bedrooms"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="number"
                      min="0"
                      id="toilet-and-bath"
                      name="toilet"
                      className="form-control"
                      placeholder="Toilet and Bath"
                    />
                  </div>
                </div>
              </div>

              <div className={`${styles["form-outline"]} mb-2`}>
                <textarea
                  required
                  id={styles.areaText1}
                  name="features"
                  className="form-control"
                  placeholder="Other Features"
                ></textarea>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="number"
                      min="0"
                      id="property-age"
                      name="propAge"
                      className="form-control"
                      placeholder="Property Age"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="text"
                      id="inclusions"
                      name="inclusions"
                      className="form-control"
                      placeholder="Inclusions"
                    />
                  </div>
                </div>
              </div>

              <div className={`row ${styles["mb-4"]}`}>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <select
                      required
                      id="title"
                      name="title"
                      className="form-control"
                      placeholder="Title"
                    >
                      <option value="" disabled selected>
                        Title
                      </option>
                      <option value="tct">TCT</option>
                      <option value="cct">CCT</option>
                      <option value="individual-name">Individual Name</option>
                      <option value="corporate">Corporate</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="text"
                      id="title-status"
                      name="titleStatus"
                      className="form-control"
                      placeholder="Title Status"
                    />
                  </div>
                </div>
              </div>

              <div className={`${styles["form-outline"]} ${styles["mb-4"]}`}>
                <label className="form-label mt-4" htmlFor="brokers-fee">
                  Brokers Fee
                </label>
                <input
                  required
                  type="number"
                  min="0"
                  id="brokers-fee"
                  name="brokersFee"
                  className="form-control"
                />
              </div>

              <label className="mt-4">Owners Info</label>

              <div className="row mb-2">
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="text"
                      id="ownerfName"
                      name="ownerFName"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="text"
                      id="ownerlName"
                      name="ownerLName"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>

              <div className={`row ${styles["mb-4"]}`}>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="tel"
                      placeholder="Phone Number ex. +639162477077"
                      pattern="[+]{1}[0-9]{2}[0-9]{10}"
                      id="phone-num"
                      name="phoneNum"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className={styles["form-outline"]}>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>

              <div className={`${styles["form-outline"]} ${styles["mb-4"]}`}>
                <label className="form-label mt-4" htmlFor="add-notes">
                  Additional Notes
                </label>
                <textarea
                  required
                  id={styles.areaText2}
                  name="addNotes"
                  className="form-control"
                ></textarea>
              </div>

              <div className={`${styles["form-outline"]} ${styles["mb-4"]}`}>
                <label htmlFor="pictures" className="form-label mt-4">
                  Upload Pictures
                </label>
                <input
                  required
                  className="form-control"
                  type="file"
                  name="pictures"
                  id="pictures"
                  multiple
                />
              </div>

              <button
                type="submit"
                className={`mt-4 ${styles["btn-primary"]}  ${styles["mb-4"]}`}
              >
                Submit Property
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellproperties;
