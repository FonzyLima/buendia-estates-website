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
    const loadPage = 2;
    const [sort, setSort] = useState("date-added");
    const [hilo, setHiLo] = useState("highest");
    const [properties, setProps] = useState(props.properties);
    const [propType, setPropType] = useState("");
    const [location, setLocation] = useState("");
    const [page, setPage] = useState(loadPage);

    const fLocations = [...new Set(props.properties.map(p => p.fields.featuredLocation))];
    const fPropertyType = [...new Set(props.properties.map(p => p.fields.propertyType))];

    function searchProp(){
      if(propType == "" && location == ""){
        setProps(props.properties);
      }
      else if(propType != "" && location == ""){
        setProps(props.properties.filter(a => a.fields.propertyType == propType).map(p => p));
      }
      else if(propType == "" && location != ""){
        setProps(props.properties.filter(a => a.fields.featuredLocation == location).map(p => p));
      }
      else{
        setProps(props.properties.filter(a => a.fields.propertyType == propType && a.fields.featuredLocation == location).map(p => p));
      }
      
      setPage(loadPage);
      
        
    }

    function addPage(){
      if((page + loadPage) > properties.length)
        setPage(properties.length)
      else
        setPage(page + loadPage);
    }

    function resetPage(){
      if(loadPage > properties.length)
        setPage(properties.length);
      else
        setPage(loadPage);
    }

    return (  
        <div>
            <div className={styles.hero}>
      
            <div className={styles['hero-image']}>
              <div className={styles['hero-text']}>
                <h1>Property Search</h1>
                <p>In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
              </div>

       
              <div className={styles.search}>
                <form onSubmit={searchProp}>
                  <select id="location" name="location" onChange={(event) => {setLocation(event.target.value);}}>
                  <option value="" selected disabled>Location</option>
                  <option value="">Any</option>
                  {fLocations
                    .sort((a,b) => a > b ? 1:-1)
                    .map(propers => (
                        <option key={propers} value={propers}>{propers}</option>
                    ))}
                    
                  </select>
                  <div className={styles['search-divider1']}></div>
                  <select id="propertytype" name="propertytype" onChange={(event) => {setPropType(event.target.value);}}>
                    <option value="" selected disabled>Property Type</option>
                    <option value="">Any</option>
                    {fPropertyType
                    .sort((a,b) => a > b ? 1:-1)
                    .map(propers => (
                        <option key={propers} value={propers}>{propers}</option>
                    ))}
                  </select>
                  <div className={styles['search-divider2']}></div>
                  <select id="price" name="price">
                    <option value="price1">Price</option>
                  </select>
                  <div className={styles['search-divider3']}></div>
                  <input type="button" onClick={searchProp} value="Search"/>
                </form>
              </div>
            </div>
          </div>

          <div className={styles.properties}>
            <div className={styles['properties-container']}>
              <div className={styles.sort}>
                <form action="">
                  <select id="sort-by" name="sort-by" onChange={(event) => {setSort(event.target.value); resetPage()}}>
                    <option value="price">Sort by Price</option>
                    <option value="availability">Sort by Availability</option>
                    <option value="date-added" selected>Sort by Date Added</option>
                    <option value="floor-area">Sort by Floor Area</option>
                    <option value="lot-area">Sort by Lot Area</option>
                  </select>
                  <div className={styles['sort-divider']}></div>
                    { (sort == "date-added") ?
                      (
                        <select id="low-high-first" name="low-high-first" onChange={(event) => {setHiLo(event.target.value); resetPage()}}>
                        <option value="highest" selected>Latest First</option>
                        <option value="lowest">Oldest First</option>
                        </select>
                      )
                      :
                      ( (sort == "availability") ?
                      (
                        <select id="low-high-first" name="low-high-first" onChange={(event) => {setHiLo(event.target.value); resetPage()}}>
                        <option value="highest" selected>Available First</option>
                        <option value="lowest">Sold First</option>
                        </select>
                      )
                      :
                      (
                        <select id="low-high-first" name="low-high-first" onChange={(event) => {setHiLo(event.target.value); resetPage()}}>
                        <option value="highest" selected>Highest First</option>
                        <option value="lowest">Lowest First</option>
                        </select>
                      )
                      )
                    }

                </form>
              </div>
              
              <div className={styles['properties-box']}>
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {( (sort == "date-added" && hilo == "highest") &&
                          (properties
                            .sort((a,b) =>  b.sys.createdAt > a.sys.createdAt ? 1:-1)
                            .slice(0, page)
                            .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "date-added" && hilo == "lowest") &&
                          (properties
                            .sort((a,b) => a.sys.createdAt > b.sys.createdAt ? 1:-1)
                            .slice(0, page)
                            .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "price" && hilo == "highest") &&
                          (properties
                          .sort((a,b) => b.fields.featuredPrice - a.fields.featuredPrice)
                          .slice(0, page)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "price" && hilo == "lowest") &&
                          (properties
                          .sort((a,b) => a.fields.featuredPrice - b.fields.featuredPrice)
                          .slice(0, page)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "floor-area" && hilo == "highest") &&
                          (properties
                          .sort((a,b) => b.fields.floorArea - a.fields.floorArea)
                          .slice(0, page)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "floor-area" && hilo == "lowest") &&
                          (properties
                          .sort((a,b) => a.fields.floorArea - b.fields.floorArea)
                          .slice(0, page)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "lot-area" && hilo == "highest") &&
                          (properties
                          .sort((a,b) => b.fields.lotArea - a.fields.lotArea)
                          .slice(0, page)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "lot-area" && hilo == "lowest") &&
                          (properties
                          .sort((a,b) => a.fields.lotArea - b.fields.lotArea)
                          .slice(0, page)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "availability" && hilo == "highest") &&
                          (properties
                          .filter((a) => a.fields.isAvailable)
                          .sort((a,b) =>  b.sys.createdAt > a.sys.createdAt ? 1:-1)
                          .slice(0, page)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    {( (sort == "availability" && hilo == "lowest") &&
                          (properties
                          .filter((a) => !a.fields.isAvailable)
                          .sort((a,b) =>  b.sys.createdAt > a.sys.createdAt ? 1:-1)
                          .slice(0, page)
                          .map(propers => (
                            <PropertiesCard key={propers.sys.id} propers={propers}/>
                          ))) )
                    }

                    
                  
                </div>
                {
                  (page < properties.length) &&
                  (
                  <>
                  <div className="load-more">
                  <input type="button" onClick={() => {addPage()}} value="Load More"/>
                  </div>
                  </>
                  )
                  
                }
                <div className="load-more">
                  <p>Showing {(page < properties.length) ? page : properties.length} of {properties.length} properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
 
export default Properties;