import React, {useState} from 'react';
import PropertiesCard from '../../components/PropertiesCard';
import styles from '../../styles/properties.module.css';
import {createClient } from "contentful";


export async function getStaticProps(){
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE,
      accessToken: process.env.CONTENTFUL_KEY,
    })
  
    const pres = await client.getEntries({content_type: 'properties'});

    return {
      props: {
        properties: pres.items,
        
      },
      revalidate: 1
    }
  }
  
const Properties = (props) => {

    const [sort, setSort] = useState("date-added");
    const [hilo, setHiLo] = useState("highest");

    return (  
        <div>
            <div className={styles.hero}>
      
            <div className={styles['hero-image']}>
              <div className={styles['hero-text']}>
                <h1>Property Search</h1>
                <p>In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
              </div>

       
              <div className={styles.search}>
                <form action="">
                  <select id="location" name="location">
                  <option value="location" selected disabled>Location</option>
                  {props.properties
                    .sort((a,b) => a.fields.featuredLocation > b.fields.featuredLocation ? 1:-1)
                    .map(propers => (
                        <option value={propers.fields.featuredLocation}>{propers.fields.featuredLocation}</option>
                    ))}
                    
                  </select>
                  <div className={styles['search-divider1']}></div>
                  <select id="propertytype" name="propertytype">
                    <option value="propertytype1" selected disabled>Property Type</option>
                    {props.properties
                    .sort((a,b) => a.fields.propertyType > b.fields.propertyType ? 1:-1)
                    .map(propers => (
                        <option value={propers.fields.propertyType}>{propers.fields.propertyType}</option>
                    ))}
                  </select>
                  <div className={styles['search-divider2']}></div>
                  <select id="price" name="price">
                    <option value="price1">Price</option>
                  </select>
                  <div className={styles['search-divider3']}></div>
                  <input type="submit" value="Search" />
                </form>
              </div>
            </div>
          </div>

          <div className={styles.properties}>
            <div className={styles['properties-container']}>
              <div className={styles.sort}>
                <form action="">
                  <select id="sort-by" name="sort-by" onChange={(event) => {setSort(event.target.value)}}>
                    <option value="price">Sort by Price</option>
                    <option value="availability">Sort by Availability</option>
                    <option value="date-added" selected>Sort by Date Added</option>
                    <option value="floor-area">Sort by Floor Area</option>
                    <option value="lot-area">Sort by Lot Area</option>
                  </select>
                  <div className={styles['sort-divider']}></div>
                  <select id="low-high-first" name="low-high-first" onChange={(event) => {setHiLo(event.target.value)}}>
                    <option value="highest">Highest First</option>
                    <option value="lowest">Lowest First</option>
                  </select>
                </form>
              </div>
              
              <div className={styles['properties-box']}>
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {( (sort == "date-added" && hilo == "highest") &&
                          (props.properties
                            .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "date-added" && hilo == "lowest") &&
                          (props.properties
                            .reverse()
                            .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "price" && hilo == "highest") &&
                          (props.properties
                          .sort((a,b) => b.fields.featuredPrice - a.fields.featuredPrice)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "price" && hilo == "lowest") &&
                          (props.properties
                          .sort((a,b) => a.fields.featuredPrice - b.fields.featuredPrice)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "floor-area" && hilo == "highest") &&
                          (props.properties
                          .sort((a,b) => b.fields.floorArea - a.fields.floorArea)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "floor-area" && hilo == "lowest") &&
                          (props.properties
                          .sort((a,b) => a.fields.floorArea - b.fields.floorArea)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "lot-area" && hilo == "highest") &&
                          (props.properties
                          .sort((a,b) => b.fields.lotArea - a.fields.lotArea)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "lot-area" && hilo == "lowest") &&
                          (props.properties
                          .sort((a,b) => a.fields.lotArea - b.fields.lotArea)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
 
export default Properties;