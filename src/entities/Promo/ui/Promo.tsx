import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Badge from 'shared/ui/Badge/Badge';
import Card from 'shared/ui/Card/Card';
import styles from './Promo.module.scss';
import promo1 from 'shared/assets/images/promo1.png';
import promo2 from 'shared/assets/images/promo2.png';
import Image from 'next/image';

const Promo = () => {
  return (
    <Card className={styles['promo-card']}>
      <Link href="#" className={styles['promo-card__link']}>
        <p className={styles['promo-card__title']}>Всё для комфортной работы</p>
        <button className={styles['promo-card__arrow']} />
      </Link>

      <div className={styles['promo-card__promotion']}>
        <Image src={promo1} width={167} height={140} alt="Компьютер" />
        <div>
          <p className={styles['promo-card__text']}>
            <Badge priority="secondary" title="- 25%" /> <br />
            на товары для кабинета
          </p>

          <button
            type="button"
            className={classNames(styles['promo-card__button'])}
          >
            Выбрать
          </button>
        </div>
      </div>

      <div className={styles['promo-card__promotion']}>
        <div>
          <p className={styles['promo-card__text']}>
            Скидка <Badge priority="secondary" title="10%" />
            на периферию для&nbsp;компьютера
          </p>
          <button
            type="button"
            className={classNames(styles['promo-card__button'])}
          >
            Выбрать
          </button>
        </div>
        <Image src={promo2} width={185} height={140} alt="Розовый компьютер" />
      </div>
    </Card>
  );
};

export default Promo;
