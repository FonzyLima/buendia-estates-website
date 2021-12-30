import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/indiv.module.css";
import { createClient } from "contentful";
import PropertiesCard from "../../components/PropertiesCard";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "properties",
  });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "properties",
    "fields.slug": params.slug,
  });
  const sres = await client.getEntries({ content_type: "properties" });

  return {
    props: {
      propers: items[0],
      suggested: sres.items,
    },
    revalidate: 1,
  };
}
export default function PropertyDetails(props) {
  var suggestedCount = 0;
  const router = useRouter();
  return (
    <div>
      <div className={styles["property-content"]}>
        <div className={`property-container ${styles["property-body"]}`}>
          <h1> {props.propers.fields.featuredTitle}</h1>
          <p className={styles.location}>
            <i className="bx bx-map"></i>
            {props.propers.fields.featuredLocation}
          </p>

          <Carousel data-interval="false" className={styles["img-carousel"]}>
            {props.propers.fields.featuredPictures.map((fp) => (
              <Carousel.Item key={fp.fields.file.url}>
                <img
                  className={styles["image-carousel"]}
                  src={"https:" + fp.fields.file.url}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className={`row ${styles["house-specifications"]}`}>
            <div className={`col-8 ${styles["full-width"]}`}>
              <div className="mt-4 d-flex flex-row">
                <div className="p-2">
                  <p id={styles.price}>
                    ₱{" "}
                    {props.propers.fields.featuredPrice.toLocaleString(
                      undefined,
                      { maximumFractionDigits: 2 }
                    )}
                    <span className={styles["gray-desc"]}> Available </span>{" "}
                    <span className={styles["gray-desc"]}>
                      Property Type: {props.propers.fields.propertyType}
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles["house-desc"]}>
                <div className="row">
                  <div className="mb-4 col-6 ">
                    <span>
                      <svg
                        className={styles["icons"]}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35"
                        height="35"
                        viewBox="0 0 172 172"
                      >
                        <g
                          className={styles.icons}
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#254f72">
                            <path d="M28.66667,22.93333c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v40.13333h11.46667v-11.46667c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333h40.13333c3.1648,0 5.73333,2.56853 5.73333,5.73333v11.46667h11.46667v-11.46667c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333h40.13333c3.1648,0 5.73333,2.56853 5.73333,5.73333v11.46667h11.46667v-40.13333c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667zM11.37708,80.18828c-3.16203,0.04943 -5.68705,2.6496 -5.64375,5.81172v63.06667c-0.02924,2.06765 1.05709,3.99087 2.843,5.03322c1.78592,1.04236 3.99474,1.04236 5.78066,0c1.78592,-1.04236 2.87225,-2.96558 2.843,-5.03322v-5.73333h137.6v5.73333c-0.02924,2.06765 1.05709,3.99087 2.843,5.03322c1.78592,1.04236 3.99474,1.04236 5.78066,0c1.78592,-1.04236 2.87225,-2.96558 2.843,-5.03322v-63.06667c0.02122,-1.54972 -0.58581,-3.04203 -1.68279,-4.1369c-1.09698,-1.09487 -2.59045,-1.69903 -4.14013,-1.67482c-3.16203,0.04943 -5.68705,2.6496 -5.64375,5.81172h-137.6c0.02122,-1.54972 -0.58581,-3.04203 -1.68279,-4.1369c-1.09698,-1.09487 -2.59045,-1.69903 -4.14013,-1.67482z"></path>
                          </g>
                        </g>
                      </svg>{" "}
                    </span>
                    <span className={styles["spec-desc"]}>
                      {" "}
                      <span className={styles["desc-num"]}>
                        {props.propers.fields.featuredBedroom}
                      </span>{" "}
                      Bedrooms{" "}
                    </span>
                  </div>

                  <div className="mb-4 col-6 ">
                    <span>
                      <svg
                        className={styles["icons"]}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35"
                        height="35"
                        viewBox="0 0 172 172"
                      >
                        <g
                          className={styles.icons}
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#254f72">
                            <path d="M151.36,0c-7.80719,0 -14.43187,4.085 -17.9525,10.32c0.25531,-0.01344 0.49719,0 0.7525,0c2.44563,0 4.77031,0.40313 6.9875,1.075c2.49938,-2.75469 6.11406,-4.515 10.2125,-4.515c7.71313,0 13.76,6.04688 13.76,13.76v44.72h6.88v-44.72c0,-11.56969 -9.07031,-20.64 -20.64,-20.64zM134.16,17.2c-9.48687,0 -17.2,7.71313 -17.2,17.2c0,1.89469 1.53188,3.44 3.44,3.44h27.52c1.90813,0 3.44,-1.54531 3.44,-3.44c0,-9.48687 -7.71312,-17.2 -17.2,-17.2zM123.84,41.28c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM134.16,41.28c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM144.48,41.28c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM120.4,51.6c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM134.16,51.6c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM147.92,51.6c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM116.96,61.92c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM134.16,61.92c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM151.36,61.92c-1.89469,0 -3.44,1.54531 -3.44,3.44c0,1.89469 1.54531,3.44 3.44,3.44c1.89469,0 3.44,-1.54531 3.44,-3.44c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM3.44,72.24c-1.89469,0 -3.44,1.54531 -3.44,3.44v6.88c0,1.90813 1.54531,3.44 3.44,3.44h165.12c1.90813,0 3.44,-1.53187 3.44,-3.44v-6.88c0,-1.89469 -1.53187,-3.44 -3.44,-3.44zM3.44,92.88c3.92375,0 6.88,2.95625 6.88,6.88v17.2c0,17.22688 11.52938,31.76625 27.305,36.335c-0.73906,3.02344 -3.25187,4.945 -6.665,4.945c-1.23625,-0.01344 -2.39187,0.63156 -3.02344,1.70656c-0.61813,1.075 -0.61813,2.39187 0,3.46687c0.63156,1.075 1.78719,1.72 3.02344,1.70656c6.49031,0 11.87875,-4.48812 13.33,-10.535c1.27656,0.13438 2.56656,0.215 3.87,0.215h75.68c1.30344,0 2.59344,-0.08062 3.87,-0.215c1.45125,6.04688 6.83969,10.535 13.33,10.535c1.23625,0.01344 2.39188,-0.63156 3.02344,-1.70656c0.61813,-1.075 0.61813,-2.39187 0,-3.46687c-0.63156,-1.075 -1.78719,-1.72 -3.02344,-1.70656c-3.41312,0 -5.92594,-1.92156 -6.665,-4.945c15.77563,-4.56875 27.305,-19.10812 27.305,-36.335v-17.2c0,-3.92375 2.95625,-6.88 6.88,-6.88z"></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className={styles["spec-desc"]}>
                      {" "}
                      <span className={styles["desc-num"]}>
                        {props.propers.fields.featuredBathroom}
                      </span>{" "}
                      Bathrooms{" "}
                    </span>
                  </div>

                  <div className="col-6 ">
                    <span>
                      <svg
                        className={styles["icons"]}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35"
                        height="35"
                        viewBox="0 0 172 172"
                      >
                        <g
                          className={styles.icons}
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#254f72">
                            <path d="M157.1736,37.75973c-2.24173,-2.24173 -20.6916,-20.6916 -22.93333,-22.93333c-4.47773,-4.47773 -11.73613,-4.47773 -16.21387,0c-0.26373,0.26373 -1.9092,1.9092 -4.54653,4.54653l10.9736,10.9736c2.24173,2.24173 2.24173,5.8652 0,8.10693c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987l-10.9736,-10.9736c-2.7176,2.7176 -5.7792,5.7792 -9.09307,9.09307l5.24027,5.24027c2.24173,2.24173 2.24173,5.8652 0,8.10693c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987l-5.24027,-5.24027c-2.93547,2.93547 -5.97987,5.97987 -9.09307,9.09307l10.9736,10.9736c2.24173,2.24173 2.24173,5.8652 0,8.10693c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987l-10.9736,-10.9736c-3.02147,3.02147 -6.06587,6.06587 -9.09307,9.09307l5.24027,5.24027c2.24173,2.24173 2.24173,5.8652 0,8.10693c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987l-5.24027,-5.24027c-3.1132,3.1132 -6.1576,6.1576 -9.09307,9.09307l10.9736,10.9736c2.24173,2.24173 2.24173,5.8652 0,8.10693c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987l-10.9736,-10.9736c-3.31387,3.31387 -6.37547,6.37547 -9.09307,9.09307l5.24027,5.24027c2.24173,2.24173 2.24173,5.8652 0,8.10693c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987l-5.24027,-5.24027c-2.63733,2.63733 -4.2828,4.2828 -4.54653,4.54653c-4.47773,4.47773 -4.47773,11.73613 0,16.21387c2.24173,2.24173 20.6916,20.6916 22.93333,22.93333c4.47773,4.47773 11.73613,4.47773 16.21387,0c2.24173,-2.24173 100.95827,-100.95827 103.2,-103.2c4.47773,-4.47773 4.47773,-11.73613 0,-16.21387z"></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className={styles["spec-desc"]}>
                      {" "}
                      <span className={styles["desc-num"]}>
                        {props.propers.fields.floorArea}
                      </span>{" "}
                      Floor Area{" "}
                    </span>
                  </div>

                  <div className="col-6 ">
                    <span>
                      <svg
                        className={styles["icons"]}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="35"
                        height="35"
                        viewBox="0 0 172 172"
                      >
                        <g
                          className={styles.icons}
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          strokeMiterlimit="10"
                          strokeDasharray=""
                          strokeDashoffset="0"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#254f72">
                            <path d="M123.84,13.76h-75.68c-18.99912,0 -34.4,15.40088 -34.4,34.4v75.68c0,18.99912 15.40088,34.4 34.4,34.4h75.68c18.99912,0 34.4,-15.40088 34.4,-34.4v-75.68c0,-18.99912 -15.40088,-34.4 -34.4,-34.4zM134.16,48.16c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44v13.76c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44zM116.96,48.16c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44v6.88c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44zM99.76,48.16c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44v13.76c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44zM82.56,48.16c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44v6.88c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44zM65.36,48.16c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44v13.76c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44zM48.16,48.16c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44v6.88c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44zM30.96,48.16c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44v13.76c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44zM34.4,123.84c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44v-13.76c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44zM34.4,92.88c-3.8012,0 -6.88,-3.0788 -6.88,-6.88c0,-3.8012 3.0788,-6.88 6.88,-6.88c3.8012,0 6.88,3.0788 6.88,6.88c0,3.8012 -3.0788,6.88 -6.88,6.88zM48.16,123.84c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44v-6.88c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44zM51.6,89.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44c0,-1.89888 1.53768,-3.44 3.44,-3.44h1.72c1.90232,0 3.44,1.54112 3.44,3.44c0,1.89888 -1.53768,3.44 -3.44,3.44zM61.92,123.84c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44v-13.76c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44zM63.64,86c0,-1.89888 1.53768,-3.44 3.44,-3.44h3.44c1.90232,0 3.44,1.54112 3.44,3.44c0,1.89888 -1.53768,3.44 -3.44,3.44h-3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44zM75.68,123.84c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44v-6.88c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44zM89.44,123.84c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44v-13.76c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44zM87.72,89.44h-3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44c0,-1.89888 1.53768,-3.44 3.44,-3.44h3.44c1.90232,0 3.44,1.54112 3.44,3.44c0,1.89888 -1.53768,3.44 -3.44,3.44zM103.2,123.84c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44v-6.88c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44zM104.92,89.44h-3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44c0,-1.89888 1.53768,-3.44 3.44,-3.44h3.44c1.90232,0 3.44,1.54112 3.44,3.44c0,1.89888 -1.53768,3.44 -3.44,3.44zM116.96,123.84c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44v-13.76c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44zM120.4,89.44h-1.72c-1.90232,0 -3.44,-1.54112 -3.44,-3.44c0,-1.89888 1.53768,-3.44 3.44,-3.44h1.72c1.90232,0 3.44,1.54112 3.44,3.44c0,1.89888 -1.53768,3.44 -3.44,3.44zM130.72,123.84c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44v-6.88c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44zM144.48,123.84c0,1.89888 -1.53768,3.44 -3.44,3.44c-1.90232,0 -3.44,-1.54112 -3.44,-3.44v-13.76c0,-1.89888 1.53768,-3.44 3.44,-3.44c1.90232,0 3.44,1.54112 3.44,3.44zM137.6,92.88c-3.8012,0 -6.88,-3.0788 -6.88,-6.88c0,-3.8012 3.0788,-6.88 6.88,-6.88c3.8012,0 6.88,3.0788 6.88,6.88c0,3.8012 -3.0788,6.88 -6.88,6.88z"></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className={styles["spec-desc"]}>
                      {" "}
                      <span className={styles["desc-num"]}>
                        {props.propers.fields.lotArea} m
                      </span>{" "}
                      Lot Area{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-4 ${styles["full-width"]}`}>
              <div className={`mt-4 ${styles["shadow-sm"]} ${styles.box}`}>
                <h4 id={styles.interestedTitle}>Interested?</h4>
                <p id={styles.descBooking}>
                  {" "}
                  Our listings are in high demand, so don’t wait until your
                  chance is over.{" "}
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/Booking");
                  }}
                  className={styles.btnBookViewing}
                >
                  Book A Viewing
                </button>
              </div>
            </div>
          </div>
          <div className={"mt-4 " + styles["house-details"]}>
            <div className="mb-4 Description">
              <h4> Description</h4>
              <p> {props.propers.fields.featuredDesc}</p>
            </div>
            <div className="row">
              <div className="mb-4 HomeFeatures">
                <h4>Home Features</h4>
                <ul>
                  {props.propers.fields.homeFeatures.map((hf) => (
                    <li key={hf}>{hf}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 NeighborhoodFeatures">
                <h4>Neighborhood Features</h4>
                <ul>
                  {props.propers.fields.neighFeatures.map((nf) => (
                    <li key={nf}>{nf}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 NearbyEtablishments">
                <h4>Nearby Establishments</h4>
                <ul>
                  {props.propers.fields.nearbyEstablishments.map((ne) => (
                    <li key={ne}>{ne}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.suggestedProperties}>
            <h4 className="mb-8"> Suggested Properties</h4>

            <div className="properties-box">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {props.suggested
                  .sort(() => Math.random() - 0.5)
                  .map((sugge) => {
                    if (
                      sugge.fields.featuredTitle !=
                        props.propers.fields.featuredTitle &&
                      suggestedCount < 3
                    ) {
                      suggestedCount++;
                      return (
                        <PropertiesCard key={sugge.sys.id} propers={sugge} />
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
