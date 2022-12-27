'use client';

import Product from 'entities/Product/ui/Product';
import React, { useEffect, useState } from 'react';
import { IProduct, IProductWithCount } from 'shared/types/data';
import styles from './BucketPage.module.scss';

const BucketPage = () => {
  const [bucket, setBucket] = useState<IProductWithCount[] | [] | undefined>(
    []
  );

  useEffect(() => {
    const bucketStorage = localStorage.getItem('bucket');
    bucketStorage
      ? setBucket(JSON.parse(bucketStorage) as IProductWithCount[])
      : setBucket([]);
  }, []);

  return (
    <main className={styles['bucket-page__main']}>
      {bucket?.length
        ? bucket.map((item: IProductWithCount) => (
            <Product
              data={item as IProduct}
              key={item.id}
              beforeAction={<></>}
              afterAction={<>{item.count} шт.</>}
            />
          ))
        : 'Пустая корзина'}
    </main>
  );
};

export default BucketPage;
