import React from 'react';
import classNames from 'classnames';
import styles from './Rate.module.scss';

interface IRate {
  value: number;
}

const Rate: React.FC<IRate> = ({ value }) => {
  return (
    <div className={classNames(styles['rate'])}>
      <div
        className={styles['rate__cover']}
        style={{ width: `${value * 20}%` }}
      >
        <div className={styles['rate__cover-stars']} />
      </div>
    </div>
  );
};

export default Rate;
