import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <nav className={styles['header__nav']}>
        <Link className={styles['header__link']} href="/">
          Главная
        </Link>
        <Link className={styles['header__link']} href="/bucket">
          Корзина
        </Link>
        <Link className={styles['header__link']} href="/likes">
          Избранное
        </Link>
      </nav>
    </header>
  );
};

export default Header;
