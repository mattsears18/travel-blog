import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import homeStyles from './home.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={homeStyles.previousTrips}>
          <h1>Previous Trips</h1>
          <div className={homeStyles.previousTripLink}>
            <Link href="/costa_rica">
              <a>Costa Rica</a>
            </Link>
          </div>
          <div className={homeStyles.previousTripLink}>
            <Link href="/silicon_valley">
              <a>Silicon Valley</a>
            </Link>
          </div>
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
