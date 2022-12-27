import Image from 'next/image';
import React from 'react';
import { utils } from 'shared/lib';
import { IProduct } from 'shared/types/data';
import Badge from 'shared/ui/Badge/Badge';
import Card from 'shared/ui/Card/Card';
import Rate from 'shared/ui/Rate/Rate';
import styles from './Product.module.scss';

interface IProductCard {
  data: IProduct;
  beforeAction: React.ReactNode;
  afterAction: React.ReactNode;
}

const Product: React.FC<IProductCard> = ({
  data,
  beforeAction,
  afterAction,
}) => {
  return (
    <Card bordered gap className={styles['product']}>
      {data?.rating.count > 300 ? (
        <Badge
          priority="primary"
          title="Хит"
          className={styles['product__badge']}
        />
      ) : null}
      <Image
        src={data.image}
        alt={`Изображение продукта ${data.id}`}
        width={220}
        height={220}
        className={styles['product__image']}
      />
      <div className={styles['product__info']}>
        <p className={styles['product__category']}>
          {data?.category || 'Категория'}
        </p>
        <div className={styles['product__rating']}>
          <Rate value={data?.rating.rate} />
          <span>{data?.rating.count || '0'} отзывов</span>
        </div>
      </div>
      <h2 className={styles['product__title']}>{data?.title || 'Title'}</h2>
      <p className={styles['product__price']}>
        <strong className={styles['product__price-title']}>
          {data?.price ? utils.getConvertedCurrency(data.price!) + ' ₽' : '0'}
        </strong>{' '}
        /шт.
      </p>
      <div className={styles['product__actions']}>
        {beforeAction}
        {afterAction}
      </div>
    </Card>
  );
};

export default Product;
