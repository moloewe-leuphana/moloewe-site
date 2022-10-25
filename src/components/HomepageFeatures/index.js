import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Create raw input (info of each of the features)
const FeatureList = [
  {
    title: 'Information',
    Svg: require('@site/static/img/leuphana_logo_granit.svg').default,
    description: (
      <>
        Scientists break down and visualise complex problems across five 65’’
        screens into comprehensible steps.
      </>
    ),
  },
  {
    title: 'Consultation',
    Svg: require('@site/static/img/leuphana_logo_haematit.svg').default,
    description: (
      <>
        In the Mobile Solution Workshop, scientists can put their models to the
        practical test and receive participants’ feedback on interventions.
      </>
    ),
  },
  {
    title: 'Collaboration',
    Svg: require('@site/static/img/leuphana_logo_pyrit.svg').default,
    description: (
      <>
        Participants can experience and design interactive scenarios to jointly
        develop solution with scientists.
      </>
    ),
  },
  {
    title: 'Empowerment',
    Svg: require('@site/static/img/leuphana_logo_tigerauge.svg').default,
    description: (
      <>Implementation strategies are developed jointly and visualised.</>
    ),
  },
];

// Define function that map info into a container, for each feature
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Map all features onto the homepage
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.headerFeatures}> Why MoLöWe?</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
