import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
  loading: () => 0,
});

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="stylesheet" href="odometer-theme-car.css" />
      </Head>
      {/* <section>
        <Odometer value={234} theme={'car'} />
      </section> */}
      <section>
        <p>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=164l6sSvw9FDWyXDxlObEG1dqVc_225U&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </p>
      </section>
      <section>
        <Script
          src="https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js"
          async
        ></Script>
        <div
          class="pa-gallery-player-widget"
          width="100%"
          height="480"
          style={{ width: '100%', height: '480px' }}
          // style="width:100%; height:480px; display:none;"
          data-link="https://photos.app.goo.gl/sdf6tAxt6Wk383E9A"
          data-title="Silicon Valley Trip"
          data-description="28 new items added to shared album"
        >
          <object data="https://lh3.googleusercontent.com/7qt0JPB8UDhvjblQ8LzziLxd6-144NZi3tyHTQUN6vzdSnzEYCYn0-vcky5PX69OlRXX6WzJDITvKZ2MaE4B4zK6zQdAWtYwf8w-MhHekhMe4DqJcX2mmJnsQHumxYS51Qe70y50uMU=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/e11n2boHaWQ5OldkNBc7y976FMBRUbRNBkcPtNRGLDk1EQBQyzXJsEtNVDfVZeGOKoGnn9KyGGITMwz8GTL0J2yIvrxArZY-UOy4egf-wO0tfOjdANZO4di1sEMAeeA6vsW5cZeGIfg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/BcIUwNP6lO6_cPTAbzVppRDotINu_FYA-dlhOmtwPil52TdOqFHe7IbIhJJaoZnfqErxwfgDNR9KLxo3BjRrlDK_MbOnWZMxCOq2-SvHHq5nFQsOslWvjI52AYG9CkxF0ZQVpOEG0DE=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/gjUre1IgbbplFThJas3sE35MzOglGGThfzsQs8zcvlAnlKMjFJtkvWX9FJgZuGhaLBC0pUkwFuVK8X_mzIeO4Gwt48hcj8EBIEPGbMkWSuo2JnAaufcgYWGiTtG5jfYVzwKYHOhL18M=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/u2cbflbrB8y6utv6lj9mXsaJQSdtmc7tJlG15OVHKV55V4lzrEZA_ttDcArqn6M7jHfPg8e34Wpzz2GSi0XeeqnqpR6TLAAU-WtVF3qLPPdF8DvURhlvAUTzxQRGh5rnKRn4ryMPEWE=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/tmBrTINW7KTiRnKjuInpJ-kkfwVx7kW0xa2cjZHuFOWfsDt7CRNyOPcQAFGcZ43errLDfDCuukudTxinYAGTmlMSOvPvOf77LcjsmvWy7yqKEdybiRAixgJ_EhTZNZdbN0I8nWFKsuo=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/7vBrVhyKMAp8gQEfEep1W6GZJ7AA9oYU1zeD9RgRH6EkWCgR00SQxGxNQZcH3RvfKMPmdtcEXneLjgid-qckRcaAGdDlHpNN6KCueFvhCkh0JiXc6erdGZYU6E7iLQ-AS9WgmLt6W9c=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/ivEqdUp2VWuaw_p7L3yZFvYvo4B2zwLFHn2gG5zQfmqNfGWNTC7XXC8pem1o03r50FiL6R-wd9g398BqKkaGBjumh8sFrkvRKnheKy3r41BEMkJDavYAk0j2o0-YtYgeipXiXz8uOWk=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/_qbSUiBjJ289n9qJfMwJ_GhcGKMXGkNqcx6aWdDO3t55XPehlDGvvET2ydK-Zh9fAE4SJeG_G5iLrlWJMaqQPsf49dvavxGbepGAfZk-izw6bC7uiyyBP3SmAnWvPfGnW5A4440j624=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/R88jgq5S19GCZzvOOLQDTqxxxgCOnhAVxGQGEtu7YvAd7x0tQxTdlvo4H86AVXtqNjVYGmDap4-8DlOMkfHbgb4P1OIFkDkBPly60nIB8A3TJZiMVg_JrZpkV0saDoOBR7_F1Z_f47A=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/m2RciQW32DPAPIak42P3obYy9_U9KycoANraj506sPMqjWPPx7t5szqH230UEZ9hwUbMjcLNOftgqYqGtwWIZADizvNA3bB1dHjbu2jJKzKh1R3yacTPMHSRp2NtGBQi8hPdw7EPBxE=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/fzoRR69wvYdYkwRusPOxXnbpjaBHmnTr-muiS01utJA1b-cl4OZI3M5cE_Bpcq3nveclDmhZUUKbVrXDGeCvy-R5ApRyNzbk9hoN5f_8UH86ozY407rqpscgmwTWE_Z6TZj24nEaR58=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/Pv8xdh0K5IxtwN5c7URoBZjb0RQzalmVges7Mbz8yKeyiJk7xp0xU0fkRKf_dAs8o6fsLMw5A1u9lwbmbEhadODdzJHLaqTIT-XiBxLHWm2w3UFi8GxRS7PPBSOSTcfWLQEVt27wt8w=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/4IuskDE_CWS1Br3D30stoLuzoQXgWvZVrEHo1EwWbWDokbPtbWry1GTRkNxXHlz6kBMA5CzGZ3qnN_e_Da1XnEUdJGEkQaSpw4X27DaHSZdNK1wt9fhTaCXHysqzBm6ygJfzpB8u0II=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/9zIoaPHqaISQKQdYxcUr9dJjoOMT6oCgPMqGArM9wMhvpJ1dTBEM0AnospvLV1tbmVrtByXwCzheyNcRj1oa7PPKBPqcdfp5uv5Rib89rHTzPK0q4zAOql6rcxY_ZhtmXZckGifR0X8=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/L6fEnAmrEGm0CjWOIWeIfeIuLySnsJBjeZWVeEWKfpTE5dYjmT2SKU65TnvtYK_kcwoDGVsrVYix9xYMUi2nVTeIe0jxNeNkhl1qFYBrGCHBCGSUSoNYYYiSuiVxg1-5Pn6ZJVnxOC8=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/HXltsIr4Lw-8ObrfUDGopMti4Zj6VSL9QPgYtbJxRhrEbHulliWDStz2q1hAbXXBCbncMi4ab5wMtXb_z5bYtaDzILTBky8h38oc7uTJ6CIvXypZc481k0Yg36Nx98K_ni5OzpuM3ZM=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/H__da_fNBrKjcmyn6H7VTZAL0_zsGMtFdfBjLaE0m0z7x1DLVd3b0miQoxHfBJR6eLFcHUJgPBGfHiVqD7zy5xk7DypF1nnonV8ivdZVs1m7AXi4Kfj05ioaUSYp7zy3hf8K3R5RQus=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/S4bgv435cibGTR24p6GcWUZHb4df_tzcvLn22Gyl5QRBuU5CZylncKA5LXpia_2i5ht7ZBYJYJmyI-VWglqIGRraBXG3GmJleuodTkMedyGnXEcbZOjQYlCkFvpBij-NFH_Ly-26jqM=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/XiWjaU79JF4Lb0hG5OTQz3FdJkEH8CoTpDEyDuXpUbVH0L6hZNIdEmJOcC_editrkNCkqubR_4Ol1aeqvYcpCCq8E5vyfYztc6v4vq3XFwI3_bfO-qUoFn9svbyXJ-Ah3ol62uasC3g=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/ygl5CQKNQMD_A-ZtWRjj6TrxwxSfPapoSFHz3GBpkjoGvNBdvLIQRUbb8fWVo0c2YFK1Y7a3i07u_px_10MwghIIpQPPIFuG0pG8KubajKNHx54o2ib6gF6Z_v7mhOGMrxBtYZJKQ5I=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/tF7XwNz9E4xPDlVAjDTz2yYXRRMmvZ_qs37wYPpjIq1Vnf4prisfa4taPLaRTfkd6J4JiBtcXLHCbOpCO268vyTYLi8xCAd06e5-THGE-efvFBxa9CNbgqTkTp2AgO-pezNJU0E_wwU=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/bc3yTigItSmyxDCbXml68hqFVVwUfJ-2oCEf3MXWg5zpXWJ86bYdXdSIZSce6Bh97jmb_-rOcLDkmB3R-EkgZ7LdMDE_OGjbTWluqX6o1b7fpNkR0fVibPhzGcPQUoXJuFj1XZqb7R0=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/yjRdlSshvayZHO9fNtoog0Q4dXx82SKhH6hsaWc8bC3IcMw6nWaIyWzS0BjBSHjZ7ZKMnotZCLO4cicKnHytJeGE_GONDYIMFcVHJEkCFwaX84OSKDwUIl6oVCsb4uVOpWvB6Q2mVq8=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/emE7jDq0qSN7hK84aeF99kZnZDZWOQqqSNhTG6aKRyk42F2706siq90cE9GPiK1jZAahWlNY7s2a4G6OKCC8mpuVeweONrDlQQ05_J2-gxtrsucTmFxmhx7-CZmljc2XuPHjqq2HSrc=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/ec8vWGAJzWXuAxvxcu7ff18OANj30SbtSRc5NQiMZHfeLkBvGYP1bsyEMIxwX0XiiRh2jFyDihKBQ9tO8sTFikpiahEy4_231YMdiJH-yR8IGOl9kDCjzVokeYJ1PsM6Cc2PgTwcPhc=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/OTp5E49AKfoaHpsjEIZ9AjO8BR4obfUpNurQq7KT9pSAcxOOfOWlpP6FD5hP7dOnDK8ygKXbwlVNOqy2lrYKaDQCsCZDGrCCQU3gg7_dStpMqfcFPforS64C95aYMXqdBMH93-lKJXw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/JP6VfIoeWTMZvWURILUhq1SyL1e-D_J4d0bmoDBDY22VdAOzEzww436QcJ4TZ3zDQFoiZ_NsKyX8FhraTfedHqQqgVLQcwrTo3ysXEVRxjgb262vfd2gdsTPHH7ov9JVyqWnnCkENo8=w1920-h1080"></object>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
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
