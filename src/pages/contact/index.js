import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PrintFAQ from '@site/src/components/FAQList';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={'header'}>
      <div className={clsx('container', styles.heroBanner)}>
        <h1 className="hero__title">{'Mobile Solution Workshop'}</h1>
        <h1 className="hero__title__2">{'Contact'}</h1>
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
        <img
          className="landingPhoto"
          src="img/landingPhoto.jpg"
          alt="Grapefruit slice atop a pile of other slices"
        ></img>

        <div className={clsx('contactContent', styles.contactBanner)}>
          <h2>{'Leuphana University Lüneburg'}</h2>
          <h3>{'Faculty of Sustainability'}</h3>
          <p>{'Universitätsallee 1, 21335 Lüneburg, Germany'}</p>
          <p>{'moloewe@leuphana.de'}</p>
        </div>
      </main>
    </Layout>
  );
}

/*
Leuphana University Lüneburg
Faculty of Sustainability
Universitätsallee 1, 21335 Lüneburg, Germany
Email: moloewe@leuphana.de
*/
