import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import SwiperSlider from '../Components/SwiperSlider';
import styles from '../styles/Home.module.css';

import {
  faLightbulb,
  faLaptop,
  faGlobe,
  faMoneyCheckAlt,
  faLock,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
function Home({ props }) {
  return (
    <div className={`body-container ${styles.container}`}>
      <Head>
        <title>Avenue Corporation</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='pixels/favicon.ico' />
      </Head>
      <main className={`body-sub-container ${styles.main}`}>
        <Section.HomeSlider />
        <Section.AboutUs />
        <Section.WhyUs />
        <Section.MeetOurClients />
      </main>
    </div>
  );
}
export default Home;

const Section = {
  HomeSlider: () => <SwiperSlider HomeSlider={true} />,
  AboutUs: () => (
    <div className={styles.panel}>
      <label className={styles.panelTitle}>About Us</label>
      <div className={styles.panelBody}>
        <div className={styles.panelBody_description}>
          <p>
            The idea of Avenue Corporation is to provide Innovative and
            sustainable packaging solution to reduce carbon footprint by up to
            93% and cost reduction by 10-15%. The solution consist of using a
            unique Engineering approach and the usage of high technology
            eco-friendly material.
          </p>
        </div>
        <div className={styles.panelBody_actions}>
          <div className={styles.panelButton}>
            <Link href='/about'>
              <a>About Us</a>
            </Link>
          </div>
          <div className={styles.panelButton}>
            <Link href='/solutions'>
              <a>Solutions</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ),
  WhyUs: () => (
    <div className={`${styles.panel} ${styles.whyUsPanel}`}>
      <label className={styles.panelTitle}>Why choose us ?</label>
      <div className={styles.panelBody}>
        <div className={styles.panelBody_description}>
          <p>
            Bringing the best-in-class industrial packaging solution to you,
            Econovus is a packaging engineering company that stands out for its
            eco-friendly, innovative, cost-effective & smart catalogue of
            products
          </p>
        </div>
        <div
          className={`${styles.panelBody_actions} ${styles.whyUsPanelBody_actions}`}
        >
          <div className={styles.strip}>
            <span className={styles.panelBody_actions_animator}></span>
            <span>
              <FontAwesomeIcon className={styles.faIcons} icon={faLightbulb} />
            </span>
            <p>Innovation & Technology</p>
          </div>
          <div className={styles.strip}>
            <span className={styles.panelBody_actions_animator}></span>
            <span>
              <FontAwesomeIcon className={styles.faIcons} icon={faGlobe} />
            </span>
            <p>Sustainability</p>
          </div>
          <div className={styles.strip}>
            <span className={styles.panelBody_actions_animator}></span>
            <span>
              <FontAwesomeIcon className={styles.faIcons} icon={faLaptop} />
            </span>
            <p>Industry 4.0</p>
          </div>
        </div>
        <div
          className={`${styles.panelBody_actions} ${styles.whyUsPanelBody_actions}`}
        >
          <div className={styles.strip}>
            <span className={styles.panelBody_actions_animator}></span>
            <span>
              <FontAwesomeIcon
                className={styles.faIcons}
                icon={faMoneyCheckAlt}
              />
            </span>
            <p>Cost-effective</p>
          </div>
          <div className={styles.strip}>
            <span className={styles.panelBody_actions_animator}></span>
            <span>
              <FontAwesomeIcon className={styles.faIcons} icon={faLock} />
            </span>
            <p>Reliable & Safe</p>
          </div>
        </div>
      </div>
    </div>
  ),
  MeetOurClients: () => (
    <div className={styles.panel}>
      <label className={styles.panelTitle}>Meet Our Clients</label>
      <div className={styles.panelBody}>
        <div className={styles.panelBody_description}>
          <SwiperSlider ClientsSlider={true} />
        </div>
        <div className={styles.panelBody_actions_meet_our_clients_container}>
          <div className={styles.panelBody_actions_meet_our_clients_contact_us_image}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
    </div>
  ),
};
