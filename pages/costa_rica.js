import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import homeStyles from './home.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import 'odometer/themes/odometer-theme-car.css';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

const milesTraveled = 7771.2;

const Odometer = dynamic(import('react-odometerjs'), {
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
        <h1 className={homeStyles.tripTitle}>Costa Rica Trip</h1>

        <div className={homeStyles.photoAlbum}>
          <a href="https://photos.app.goo.gl/j2MEkv9ynVoiQGwg9" target="_blank">
            {' '}
            <FontAwesomeIcon icon={faImages} /> &nbsp;Photo Album
          </a>
        </div>

        <div className={homeStyles.nextStop}>Next Stops: </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/C1j8yh2YVDHT9JPL6" target="_blank">
            Starbucks Coffee Farm
          </a>{' '}
          Sabanilla, Alajuela
        </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/HH5vyF339gQhBU2x5" target="_blank">
            Poas Volcano National Park
          </a>{' '}
          Sarchí, Alajuela
        </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/xFX2pmkG87dgza4t9" target="_blank">
            North Fields Coffee Tour
          </a>{' '}
          La Fortuna, Alajuela
        </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/ngE1eXdhA4YbGYXu7" target="_blank">
            Rainforest Chocolate Tour
          </a>{' '}
          La Fortuna, Alajuela
        </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/Aiwo8PKfVRGdGf6K9" target="_blank">
            Bogarin Trail
          </a>{' '}
          La Fortuna, Alajuela
        </div>

        <div className={homeStyles.nextStopLink}>
          📍
          <a href="https://maps.app.goo.gl/sPpZEmoBWYw6U22Z7" target="_blank">
            Arenal Volcano National Park
          </a>{' '}
          La Fortuna, Alajuela
        </div>
      </section>
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
