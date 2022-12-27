import React from 'react';
import styles from './Badge.module.scss';
import classNames from 'classnames';

interface IBadge {
  priority: 'primary' | 'secondary';
  title: string;
  className?: string;
}

const Badge: React.FC<IBadge> = ({ priority, title, className = '' }) => {
  return (
    <span
      className={classNames(
        styles['badge'],
        styles[`badge_${priority}`],
        className
      )}
    >
      <strong className={styles['badge__content']}>{title}</strong>
    </span>
  );
};

export default Badge;
