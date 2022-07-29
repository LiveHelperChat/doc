import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
    {
        title: <>Your server your data.</>,
        description: (
            <>
                All data belongs to you. You host application and only you can use this data.
            </>
        ),
    },
    {
        title: <>Extensions support</>,
        description: (
            <>
                Live Helper Chat allows to override most of it's functionality using <a href="docs/hooks">hooks</a>. <a target="_blank" href="https://github.com/LiveHelperChat/lhchatevents">Extension example</a>
            </>
        ),
    },
    {
        title: <>Rest API</>,
        description: (
            <>
                See exposed <a href="docs/development/rest-api">Rest API</a>
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
