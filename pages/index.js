import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import FProperties from "../components/FProperties";
import Testimonies from "../components/Testimonies";
import "bootstrap/dist/css/bootstrap.min.css";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_KEY,
  });

  const fres = await client.getEntries({ content_type: "properties" });
  const tres = await client.getEntries({ content_type: "testimonies" });

  return {
    props: {
      properties: fres.items,
      testimonies: tres.items,
    },
    revalidate: 1,
  };
}

export default function Home(props) {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles["hero-image"]}>
          <div className={styles["hero-text"]}>
            <h1>
              Buendia Estates 2022 <br /> Lorem Ipsum amet, consectetur adipiscing elit
            </h1>
            <p>
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid.
            </p>
          </div>

          <div className={styles.search}>
            <form action="">
              <select id="location" name="location">
                <option value="location1">Location</option>
              </select>
              <div className={styles["search-divider1"]}></div>
              <select id="propertytype" name="propertytype">
                <option value="propertytype1">Property Type</option>
              </select>
              <div className={styles["search-divider2"]}></div>
              <select id="price" name="price">
                <option value="price1">Price</option>
              </select>
              <div className={styles["search-divider3"]}></div>
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
      </div>

      <div className={styles.featured}>
        <div className={styles["featured-title"]}>Featured Properties</div>
        <div className={styles["featured-box"]}>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {props.properties.map(
              (propers) =>
                propers.fields.isFeatured && (
                  <FProperties key={propers.sys.id} propers={propers} />
                )
            )}
            
          </div>
        </div>
      </div>

      <div className={styles["sell-property"]}>
        <div className={styles["sell-box"]}>
          <div className={styles["sell-title"]}>Sell your property</div>
          <div className={styles["sell-paragraph"]}>
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
            involuta aperiri, altera occulta quaedam et voluptatem accusantium
            doloremque.
          </div>
          <a href="#">
            <div className={styles["sell-learnmore"]}>
              <p>Learn more</p>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </a>
        </div>
      </div>

      <div className={styles["client-test"]}>
        <div className={styles["client-title"]}>What our clients think</div>
        <div className={styles["client-box"]}>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {props.testimonies.map((tests) => (
              <Testimonies key={tests.sys.id} tests={tests} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
