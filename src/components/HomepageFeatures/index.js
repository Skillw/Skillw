import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '高客制化',
    Svg: require('@site/static/img/home/customization.svg').default,
    description: (
      <>
        所见皆可自定义, 我们凭借着高客制化能力, 为客户提供最佳体验。
      </>
    ),
  },
  {
    title: '高性能',
    Svg: require('@site/static/img/home/performance.svg').default,
    description: (
      <>
        多年迭代升级算法, 数次重构优化结构, 为客户提供最佳性能。
      </>
    ),
  },
  {
    title: '活跃的社区',
    Svg: require('@site/static/img/home/consultation.svg').default,
    description: (
      <>
        我们的项目正在蒸蒸日上哦！
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
