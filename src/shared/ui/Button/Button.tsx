'use client';

import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  vueType?: 'completed' | 'default';
  children: React.ReactNode;
}

const Button: React.FC<IButton> = ({
  vueType = 'default',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles['button'],
        styles[`button__${vueType}`],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
