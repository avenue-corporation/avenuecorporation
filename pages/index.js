import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SwiperSlider from '../Components/SwiperSlider';
import styles from '../styles/Home.module.css';

import {
  faLightbulb,
  faLaptop,
  faGlobe,
  faMoneyCheckAlt,
  faLock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import NumberCounter from '../Components/NumberCounter';
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
        <Section.WorkCompleted reqCount={2500} />
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
            Avenue Corporation is a packaging engineering company that stands
            out for its eco-friendly, innovative, cost-effective & smart
            catalogue of products
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
          <div
            className={
              styles.panelBody_actions_meet_our_clients_contact_us_image
            }
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div
            className={
              styles.panelBody_actions_meet_our_clients_contact_us_note
            }
          >
            <div
              className={
                styles.panelBody_actions_meet_our_clients_contact_us_title
              }
            >
              Avenue Corporation engineered packaging solution
            </div>
            <div
              className={
                styles.panelBody_actions_meet_our_clients_contact_us_divider
              }
            ></div>
            <div
              className={
                styles.panelBody_actions_meet_our_clients_contact_us_description
              }
            >
              Our Packaging Solutions excels in terms of sustainability vision,
              eco-friendly solutions, core values, and operations; an one stop
              solution for all your industrial packaging needs. We are here to
              deliver expert packaging solutions & meet your sustainability
              goals as per your requirements. If you’re rethinking your
              packaging strategy and are looking to partner with a like-minded
              supplier.
            </div>
            <div
              className={
                styles.panelBody_actions_meet_our_clients_contact_us_button
              }
            >
              <Link href='/about'>
                <div>Contact Us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  WorkCompleted: ({ reqCount }) => {
    return (
      <div className={styles.workCompleted}>
        <div className={styles.workCompleted__1}>
          <NumberCounter
            count={2500}
            description='Requirements met'
            isPositive={true}
            delay={1}
          />
        </div>
        <div className={styles.workCompleted__2}>
          <NumberCounter
            count={100}
            description='Curated Products'
            isPositive={true}
            delay={50}
          />
        </div>
        <div className={styles.workCompleted__3}>
          <NumberCounter
            count={20}
            description='Product Categories'
            isPositive={true}
            delay={200}
          />
        </div>
      </div>
    );
  },
};
