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

const milesTraveled = 942.4;

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
        <h1 className={homeStyles.odometer}>
          <Odometer value={odometerValue} />
        </h1>
        <div className={homeStyles.odometerCaption}>Miles Traveled</div>
        <div className={homeStyles.nextStop}>Next Stops: </div>
        <div className={homeStyles.nextStopLink}>
          📍{" "}
          <a href="https://g.co/kgs/5L1Vho" target="_blank">
            World's Only Corn Palace
          </a>{" "}
          Mitchell, SD
        </div>
        <div className={homeStyles.nextStopLink}>
          📍{" "}
          <a href="https://g.co/kgs/AjQ5PS" target="_blank">
            Minuteman Missle Center{" "}
          </a>{" "}
          Philip, SD
        </div>
        <div className={homeStyles.nextStopLink}>
          📍{" "}
          <a href="https://g.co/kgs/PL1dVG" target="_blank">
            Badland's National Park
          </a>{" "}
          SD
        </div>
        <div className={homeStyles.nextStopLink}>
          📍{" "}
          <a href="https://g.co/kgs/PLez3k" target="_blank">
            Mount Rushmore
          </a>{" "}
          Keystone, SD
        </div>

        <div className={homeStyles.nextStopLink}>
          📍{" "}
          <a href="https://g.co/kgs/JAQshr" target="_blank">
            Wind Cave National Park
          </a>{" "}
          Custer Co, SD
        </div>
        <div className={homeStyles.nextStopLink}>
          📍{" "}
          <a href="https://g.co/kgs/vRzxov" target="_blank">
            Devil's Tower
          </a>{" "}
          Crook Co, WY
        </div>
      </section>
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
          className="pa-gallery-player-widget"
          width="100%"
          height="480"
          style={{ width: "100%", height: "480px" }}
          // style="width:100%; height:480px; display:none;"
          data-link="https://photos.app.goo.gl/sdf6tAxt6Wk383E9A"
          data-title="Silicon Valley Trip"
          data-description="67 new items added to shared album"
        >
          <object data="https://lh3.googleusercontent.com/YW3ate6RHmuEjjOyJILfG61xgBIPt4W8jLC8ydulGj3sPSAL-gg1I8jzimMxMAMp41V976x6mkRkf9mDkEpMNcb4-KuXYu4WyOyKIKVKHygooNWfeMG9mVGDdKBxPQae9yUcowJ-h9s=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/iiRIJQ7kNLyi8g5gLnsUp88lltzxSYbQ3-d5Yj984d58m7pSPc6dq8DKcKblamK1fBMrl3ikZXSq2qwGqwOuuYAbLuiUxFmACPJ-DRcAFaO1RhVBDNJK0kuF03pRZGiKRI__5FSsfdg=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/ZXklRMFBcRSiOErp43YB7XcF9YRAAFBbbd8zdmauwLt82ckmeJpFPrFyZkp9xCLKRkJJue0QdpqOtVKyPNUxBmRwLTLMhX9YE0vZ1xya4qc0ZLjw6y1ssbe1AEHayk8_XTnjzlH2AQU=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/G3QBlgO7-9F1VlinUxjcQshCiqYH2NWFX3tpj6kYWFHOOOejPjDxHT2WXbnH2LUxTIvFxjsxn_W8aQLk-lBABIXwaJe0NDO14c_FIOiXxMtSlAnA2jILdSCSe7b6MIGfwZeBWhVEZy8=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/Xzg0AmFF9VDAM9H2E059WOKZKempStxf9vMGyBczIRLiRFWJcgCnAZHUxVzYNGml7rXePVRuVYIJNIDil0kKI7Xbj45BBK7WZbAMFQ4mbcuvrPJngbwKl1NKRnWodZvxP8Q0-FhKZ7c=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/dq8englWXvp4F04FN3YP6v7UzuEzT-2L-v-0BsL9uJB4-aSmW7VV7qDT9-IoFOUK7NFXt_tToefmcurKsiJT3_Z1L8IJgp3TaY-64Vs8KDxND7dWpXXZCDc6Di22zsSPZaJxYOQ2SC4=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/5PzosHFE0Oj9hijwiJCQ9obOnpkywcvfgPhFzSKfzydNbEJ6XSn3uVe_DAWQYJ3LCnlxEQ0y-PFKpya0ObxcOAspQ2dkYcRZ9RyBS8LwRTIvmXwdEjClsT5Zmw8U7D8Rd2fElNtvSi4=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/VuUHqvFNRueFYnM_3rfEiuyF8VVHrSQwhPr81bdxNIVsMcKE9-ijjZcsh4j5U_J-qyq7egQc05QG0WP3STyQ4Gq687WKnRpy9tekUleZwRBjqYVCDzC8PzE6t1LbE3GahXuJrbiJFek=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/rvUbHBxQscFopcFHeBLX8b5T9CJDMuhRqJmkZDd3HUbNJ7zklTACvdcLeu94UEsjFp-eJhwlH_XZH_8rwy6CAOFHebm6DcFTbW8UZaJKKk4-j1hgi5aqJlZus2jUGrinJGbJp7mpKWc=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/JN7SkEs_M9AS5BWhJKoqcQYOaTAetQj192-BqxkUhPnGLppHkIe5Mh-E6DcKfEucsBc5nCNYch_kd9X1tLC_j_k-Gtp2ajQ2ny7uanCyfjwhrSrlSOaqY9U2KHPqYd2285d0b1CM-N4=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/VAmYfKxazGRlRYfpf0vS38cIavHZAYBOFqWQv2V7WvksEOlNE87NGJLaWMQoop__skmXM8q7Ta_ERF3SVpsacOPM-oCNwm_OUNjRApQ-JEsjoSfqaOVPSp3Ya3oYzym1_C_YGyK-ZC0=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/0WkustSGXcjvggWAsWAT0e0Un1TEVEqslIWah8kjD95sFPQ3eqIM0PlPvCyAEVOvpyLlToXC-ZG6U57z1biXLVVFvuhZUzkfYl6JLpiianIHubU9itpY4Om3sVpWwbrTBe4qiXn9PTk=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/hxvPwe-fw38IAzcliHR7vOUC8YttFsXz22m266BEmvbxlEGkdnXf5wtTSGK4DE5arfawGn9xCYLQ0nmR-PylekUEvFCZvZBFDvEWuRr-ojLKVGKAeHP0qqU8oWVXsHTpvnZgslCZhzs=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/JFlTR0RkHgWVE8OqTTWvsSjrNk4pquOhtJQ_UH-07rwofu_F957G0hdhA7qqd6Rnt2s_zKaMpJLFgGMk1PEk4G1dHpA-uZ1qZTwbDIaaEk9VkBY4_dDbtI8xqIViB6z5UpT0UiH7OgE=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/-Cad3RbEYsgcw8kKWc623FudGH2iqxsMxhf63Jq9Tfq2IT1RyDSoSO0_iFwP93QfZIFn6CMmz4i63LQYFSlJ7_4OmIRS9qRqpl5dlIK3IRZLDq1sfAJjgWvR5LhXHChKufTjp-iEnq0=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/KUheGAQNfQKUa3KWRb53TGxWxaqvXXJ7ngMa3nOhVsDqxU7uWX9ap6eaVkMBegbhP9pr3Z4jlJOT0zvHYtHBgdrUHW6n_bxiJH9sMVlSJahaG-01gg8179IlWLmHiNoqvz1txxwFKZY=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/hQm7rpaBPzbC_qz6cvAOB3Lbr_igiid5gneDuvkeSvAdTDBg2eOzQ17jioiI8wjV93Nu_8t3Diyhn2l44vTQVK2OroYPEhtX0bqiYGOrc3zOSDLCQDTpNb43tABVKKYG-QL_XKzp-lc=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/ql8UbWH_03lmseTimQCB3sCqWHZxg2xxI9KyocZpkB9ZfoUmLyREilxqas-lQ7w3R6K0iDEpZxFE7IKgLTyjIN5Qmz5j5ktXpj8XTjRSwFZgyBOXVDtabtlWdZ6Y7bc7r5DQeHZlweQ=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/EadaXiG66U65tbqyRMvuNgCUua0wS4RtqdEUketift64oHqRd57lD2g_CmbOutS_cx1MBcvSbOpU_Zrhm4zqpFd0Qza6qiS6m6luoi_sJ7jHxVogzGhrkZlwDtK3EVrdQ2VEozrQ0IE=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/hsVD3vEyGg3o2kDJO0Lhi7WLt10lea-T1JhvhUcokF3xKrdpQ_C2LygOh2a1z53CLkYrlgAwxzMtIWEyNOQJ5OWUaIuGls8HWlBnVpeeJTK4VP6Wz6X59ramYPQ01h5ZfoXITrml3oY=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/Nc0uzs5TfZM0iY0Q-vfBetPuEXCroU-l5Zdbu_kLNMFqP1IT0LlQSNj-JEPa1ZeYr2KOSb_cz45OQgLlRWZgh1uOIjr_JK3LFt-CUWGOkWfhLORjkGnigXztMX4HRUUmqV5KO5DHLzA=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/Nb1rteeZpvz2sBw1H9zR4yU58guDj8LRAHpnB-z7VtcaEcJBcDvaCZ7SZ3rqiERwOZC5KZMEcQKar82CzW6Tg7FzsmL_ARPjC-tfJCqMaAaJb1TDrjxlFL5dp_SVtpowq2j9nZttQwM=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/3ybZAb_IhCLQ7Ij7iQonE4jXS0qbXWsAvh1fwQhpZvr1jXntQt1J0iPsJbe72A7xJe6o1Jt9lhdtpLBCMhu1uex90JZEUA7meX4anp9qyTjoV8i_cjFsH9W94Ww78ss0aaC83CuQe5U=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/TlV6Ebgp_AKdWQrkUhyXwZLwWsrK32UZAxM5kfd0AN0rvZWBbwTsR4ulMckSMsaMTsass-zb8BXaCU-b9LnY_DB_lPRhgFT9j9pXUC9pMmWBTfRBZi58kQsKtfW7WdOnZD6j7KAxzF4=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/903su4xgnzma24RYHT8_sOVHNrVUISdfjN1GwCwjmL2hYZYGoPu3B0pVQENHh7XuYpL0E23F3jtlItAWpKhMSkFfAeDfUmNB8qJMPMqE6xB-cyi9tf2gigKvyQXuZ0Rx6B7kx4ayyuo=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/XDDAePfN0PU3YPdoQ8kcORgSpZT8y_gAgyjkw9nM_PqyQ1a4RAUn0V0u2x5d2WmS9yKzh1rFSnmPrZ0oivMV_DPB1cyACCGJUxYibPOCuZXY0NWN4UKWZY0kF8mIxrpvWhzXL4q1uxs=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/ApyUxC2b71My-VPIShPkH-Iepj6oVgl_aOLdvBnxdNRg79ZMX_Rq3rELXvhPJ_aOj-R4Q0OWFgCcrZGX4Jqf5Bfz7L56PSnNGfCMA1dShHXgj2Ld-dpT1I498ClBGhyhiKYSDiwdSpo=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/LpQnOpJNuMrh9kMf33_V01sEKpuIBhSlEqlyzjHnk2euQhuV_6B9XSnlhCfqtDCU-TCa8spnPHPiJhZESZ6GPGpnojYKh_Z3T0fYIOPWG2rQvGvCbLuiyIM8_jC84B_XBog1z6ZPxn0=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/vI9E1dtSE2hM_z6JVYn0c3sz7WdwZEFFHE65zc79deB05d56bACFvKy0IhvfjxhxLTnu7nakBJklVz9yd9Whb4qh7ltJMfUgjuxbLwOhQs1QFmw7rxXI2cGS7jVLqEj1PbcqUN8xweY=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/gfF0w9N4AIKFYvBaMP9zHumFz0nvAhNx1V4wANDx_8GRrG3uDAk20MaetoDWp7BBABtticNbS6omI_nXxpJniUGuD2LienTnxbKmFQd0NJq7xnHuzku5AMMeP8lFuOnUhvxcZV41Qec=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/2TZEEBWfmtGSJswckH_X5f_T2Ex9I_QrY0xnKcXD9gSm5feMTY5GbdaOPm02FRby2kqa9eXfZ-5qAp0sVMoxbg_mRrvfjmfBhNaVrP2OCuv7VGMKea1f6VgH1s5eDQ6DDDLcM8yrf0c=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/4cmeF-CtVb25l1TRxJvpo7W1SgZFZgGYj2-1ZQTpJ8didUneQ7N5U_qIg28nLUrVjZloBsjTnuMajqPqbZ3sgWeXMDDX6QEjtTmHx_zNwlvFGv53bccRX97oKRYKHab96qya0pKELsE=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/3ukYmHjiJIGT-NLXcv-arKI6HInuND67EQzbclvFoiQ3c94oy_9-Fu28kc0W3isHV0i_AAEqPxLK2YgTtp0cIfGMgVRWO1awIuQ4ZXpqCRUJLUkNsWfSTqVncJmiiyKnvJtxGNeWCig=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/LF2AJqmZeb1b_uugX9dsLT3FudyNG0Q1EhzL1J7pcbF2HoUEho-FkkS0m4fkb0x7dUuNTMY8Q6hfolb-1LWexG4g2EC_a42WREnWebL9MBygksVswiKsDGT0ww_l5XOefslSKF-08WU=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/Ff33_Xon0foLX7WMZ6sTu-d-GMz9qMA1P9_yig1N6fM1f7tCaaKXbX6h69xCVK2aoDjKAvSMvoEo8m2Whw76EXI2Y6xsS8loP-um37j64jaj8w8O51sYfyfgjETBwIRusTp5eNBecno=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/gKaRg_NRikgU9cA-NeBvmmfqDeXEn2RWnCguQhCV5Z8MMsAoyq6A55Mn8vQ1xLdmH6BqJrV6eVN-ny4xWy1wnMS45WwLccceRt1SgjS6g7lSRHwJ00yPO7_-zFjNHmjqVJlBU8yL8ZY=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/I9JVxAV2-OVwZbUXoP4Nnctk2dhAUscVNt2BVDfiGphB2RGODvjd4WlldTGKo7fKrolFLFL53zP3Cg-uM1zX0lTRf1CqF262SeY_6p1vzuQINZlCms30JAUzVnsimZJglWC7JRqvc1o=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/wLCNRQhBAk0IWFLaW3qdehiJ6QTbP4ygqvyLWI3V_9mGvLTIYMZO755T8sWOtMXqu2A1Y7akbpYHpoxV50o9oxPDzwN62qe_aTICE1KI7_tznJFJs-2XeoyCsazkPWE_wRbm6drRS_U=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/QcBGDgoJc7wYhZbwmry1axW6tQdxbQ6_luD5MkZ9qNhc5ncIl87r2gLtAVYDG5SfgnJwsLXfT6HgF01XndyDXy03MZOeXe46fHd1G44dYQ4IJi597WISJ6r0z-8dLIW_FqKVMR0g6XY=w1920-h1080"></object>
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
