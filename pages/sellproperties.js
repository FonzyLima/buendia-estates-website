import styles from '../styles/sellproperties.module.css'
const sellproperties = () => {
    return (  
        <div>
        <div className="hero">
            
            <div className={styles["hero-image"]}>
              <div className={styles["hero-text"]}>
                <h1>Sell A Property</h1>
                <p>In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
              </div>
            </div>

          <div className={styles['sell-bg']}>
            <div className={styles['sell-box']}>
              <h3 className="sellform-title">Sell A Property</h3>
              <form>
                
                <div className={`mb-4 ${styles["form-outline"]}`}>
                    <label className="form-label" htmlFor="property-type">Type</label>
                    <select required id="type" name="type" className="form-control inputbox">
                      <option value="preselling">Pre-selling</option>
                      <option value="old">Old</option>
                      <option value="new">New</option>
                    </select>
                </div>

                
                <div className={`mb-4 ${styles["form-outline"]}`}>
                    <label className="form-label" htmlFor="property-type">Property Type</label>
                    <select required id="property-type" name="property-type" className="form-control">
                      <option value="condo">Condominium</option>
                      <option value="commercial">Commercial</option>
                      <option value="house-and-lot">House and Lot</option>
                      <option value="townhouse">Townhouse</option>
                    </select>
                </div>

             
                <div className={`mb-4 ${styles["form-outline"]}`}>
                    <label className="form-label" htmlFor="selling-price">Selling Price</label>
                    <input required type="number" id="selling-price" className="form-control" />

                </div>

      
                <label>Address</label>
                <div className={`${styles['form-outline']} mb-2`}>
                  <input required type="text" id="street-address" className="form-control" placeholder="Street Address"/>
                </div>
              
                <div className="row mb-2">
                    <div className="col">
                        <div className={styles['form-outline']}>
                            <input required type="text" id="city" className="form-control" placeholder="City" />
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles['form-outline']}>
                            <input required type="text" id="region" className="form-control" placeholder="Region" />
                        </div>
                    </div>
                </div>

                <div className={`row ${styles['mb-4']}`}>
                    <div className="col">
                        <div className={styles['form-outline']}>
                            <input required type="text" id="zip-code" className="form-control" placeholder="Zip Code" />
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles['form-outline']}>
                            <input required type="text" id="maps-link" className="form-control" placeholder="Waze/Google Maps Link" />
                        </div>
                    </div>
                </div>

              
                <label className="mt-4">Property Info</label>
              
                <div className="row mb-2">
                    <div className="col">
                        <div className={styles['form-outline']}>
                            <input required type="number" id="floor-area" className="form-control" placeholder="Floor Area" />
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles['form-outline']}>
                            <input required type="number" id="lot-area" className="form-control" placeholder="Lot Area" />
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <div className={styles['form-outline']}>
                            <input required type="number" id="bedrooms" className="form-control" placeholder="Bedrooms" />
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles['form-outline']}>
                            <input required type="number" id="toilet-and-bath" className="form-control" placeholder="Toilet and Bath" />
                        </div>
                    </div>
                </div>

                <div className={`${styles['form-outline']} mb-2`}>
                  <textarea required id={styles.areaText1} className="form-control" placeholder="Other Features"></textarea>
                </div>

                <div className="row mb-2">
                  <div className="col">
                      <div className={styles['form-outline']}>
                          <input required type="number" id="property-age" className="form-control" placeholder="Property Age" />
                      </div>
                  </div>
                  <div className="col">
                      <div className={styles['form-outline']}>
                          <input required type="text" id="inclusions" className="form-control" placeholder="Inclusions" />
                      </div>
                  </div>
              </div>

              <div className={`row ${styles['mb-4']}`}>
                  <div className="col">
                      <div className={styles['form-outline']}>
                        <select required id="title" name="title" className="form-control" placeholder="Title">
                          <option value="" disabled selected>Title</option>
                          <option value="tct">TCT</option>
                          <option value="cct">CCT</option>
                          <option value="individual-name">Individual Name</option>
                          <option value="corporate">Corporate</option>
                        </select>
                      </div>
                  </div>
                  <div className="col">
                      <div className={styles['form-outline']}>
                          <input required type="text" id="title-status" className="form-control" placeholder="Title Status" />
                      </div>
                  </div>
              </div>


              <div className={`${styles['form-outline']} ${styles['mb-4']}`}>
                <label className="form-label mt-4" htmlFor="brokers-fee">Brokers Fee</label>
                <input required type="number" id="brokers-fee" className="form-control" />
              </div>

           
              <label className='mt-4'>Owners Info</label>
            
              <div className="row mb-2">
                  <div className="col">
                      <div className={styles['form-outline']}>
                          <input required type="text" id="ownerfName" className="form-control" placeholder="First Name" />
                      </div>
                  </div>
                  <div className="col">
                      <div className={styles['form-outline']}>
                          <input required type="text" id="ownerlName" className="form-control" placeholder="Last Name" />
                      </div>
                  </div>
              </div>

              <div className={`row ${styles['mb-4']}`}>
                  <div className="col">
                      <div className={styles['form-outline']}>
                          <input required type="text" id="phone-num" className="form-control" placeholder="Phone Number" />
                      </div>
                  </div>
                  <div className="col">
                      <div className={styles['form-outline']}>
                          <input required type="email" id="email" className="form-control" placeholder="Email" />
                      </div>
                  </div>
              </div>

    
               <div className={`${styles['form-outline']} ${styles['mb-4']}`}>
                <label className="form-label mt-4" htmlFor="add-notes">Additional Notes</label>
                <textarea required id={styles.areaText2} className="form-control"></textarea>
              </div>

              <div className={`${styles['form-outline']} ${styles['mb-4']}`}>
                <label htmlFor="pictures" className="form-label mt-4">Upload Pictures</label>
                <input required className="form-control" type="file" id="pictures" multiple />
              </div>

      
              <button type="submit" className={`mt-4 ${styles['btn-primary']}  ${styles['mb-4']}`}>Submit Property</button>
            </form>
            </div>
          </div>
        </div>
        </div>
    );
}
 
export default sellproperties;