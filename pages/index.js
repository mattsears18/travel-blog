import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "./home.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import dynamic from "next/dynamic";
import Script from "next/script";
import "odometer/themes/odometer-theme-car.css";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

const milesTraveled = 7771.2;

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});

export default function Home({ allPostsData }) {
  const [odometerValue, setOdometerValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOdometerValue(milesTraveled);
    }, 500);
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1 className={homeStyles.tripTitle}>Current Trip: Costa Rica</h1>
        {/* <h1 className={homeStyles.odometer}>
          <Odometer value={odometerValue} />
        </h1>
        <div className={homeStyles.odometerCaption}>Miles Traveled</div> */}

        <div className={homeStyles.photoAlbum}>
          <a href="https://photos.app.goo.gl/j2MEkv9ynVoiQGwg9" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faImages} /> &nbsp;Photo Album
          </a>
        </div>

        <div className={homeStyles.nextStop}>Next Stops: </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/C1j8yh2YVDHT9JPL6" target="_blank">
            Starbucks Coffee Farm
          </a>{" "}
          Sabanilla, Alajuela
        </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/HH5vyF339gQhBU2x5" target="_blank">
            Poas Volcano National Park
          </a>{" "}
          Sarchí, Alajuela
        </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/xFX2pmkG87dgza4t9" target="_blank">
            North Fields Coffee Tour
          </a>{" "}
          La Fortuna, Alajuela
        </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/ngE1eXdhA4YbGYXu7" target="_blank">
            Rainforest Chocolate Tour
          </a>{" "}
          La Fortuna, Alajuela
        </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/Aiwo8PKfVRGdGf6K9" target="_blank">
            Bogarin Trail
          </a>{" "}
          La Fortuna, Alajuela
        </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/sPpZEmoBWYw6U22Z7" target="_blank">
            Arenal Volcano National Park
          </a>{" "}
          La Fortuna, Alajuela
        </div>

        {/* <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://goo.gl/maps/qdwsq5tS9L2B3sTh8" target="_blank">
            Home{' '}
          </a>{' '}
          Richmond, KY
        </div> */}
      </section>
      <section>
        {/* <p>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1M-1xpzTzQqTfQgN_zMA1Pow4Wka0zNQ&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </p>
        <p>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1alu0kdhB5qnwNK8_HfT9WiiE4lHQEbg&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </p>
        <p>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1jDDJB3SNTblt0NMDFDV_bLYwB6ueYWQ&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </p>
        <p>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1yvUZ-9wBUgMF3DlIzKDTe-JyzWseAI8&hl=en&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </p>
        <p>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=164l6sSvw9FDWyXDxlObEG1dqVc_225U&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </p> */}
      </section>

      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, location, miles }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <div>Location: 📍 {location}</div>
              <div>Miles Traveled: {miles}</div>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
