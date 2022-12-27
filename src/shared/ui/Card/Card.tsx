import classNames from 'classnames';
import React from 'react';
import styles from './Card.module.scss';

interface ICard {
  className?: string;
  children: React.ReactNode;
  bordered?: boolean;
  gap?: boolean;
}

const Card: React.FC<ICard> = ({
  children,
  bordered = false,
  gap = false,
  className,
}) => {
  return (
    <div
      className={classNames(
        styles['card'],
        bordered && styles['card_bordered'],
        gap && styles['card_gap'],
        className ? [...className.split(' ')] : null
      )}
    >
      {children}
    </div>
  );
};

export default Card;
