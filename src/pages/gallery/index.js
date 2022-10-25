import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PrintFAQ from '@site/src/components/FAQList';
import styles from './index.module.css';

import img1 from '/img/gallery/01.JPG';
import img2 from '/img/gallery/02.JPG';
import img3 from '/img/gallery/03.JPG';
import img4 from '/img/gallery/04.JPG';
import img5 from '/img/gallery/05.JPG';
import img6 from '/img/gallery/06.JPG';
import img7 from '/img/gallery/07.JPG';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={'header'}>
      <div className={clsx('container', styles.heroBanner)}>
        <h1 className="hero__title">{'Mobile Solution Workshop'}</h1>
        <h1 className="hero__title__2">{'Gallery'}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

// Where the structure of the page lives
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

      <main>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50',
            fontSize: '20px',
            padding: '5% 10%',
          }}
        >
          <img src={img1}></img>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50',
            fontSize: '20px',
            padding: '5% 10%',
          }}
        >
          <img src={img2}></img>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50',
            fontSize: '20px',
            padding: '5% 10%',
          }}
        >
          <img src={img3}></img>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50',
            fontSize: '20px',
            padding: '5% 10%',
          }}
        >
          <img src={img4}></img>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50',
            fontSize: '20px',
            padding: '5% 10%',
          }}
        >
          <img src={img5}></img>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50',
            fontSize: '20px',
            padding: '5% 10%',
          }}
        >
          <img src={img6}></img>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50',
            fontSize: '20px',
            padding: '5% 10%',
          }}
        >
          <img src={img7}></img>
        </div>
      </main>
    </Layout>
  );
}
