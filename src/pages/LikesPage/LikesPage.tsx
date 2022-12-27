'use client';

import Product from 'entities/Product/ui/Product';
import React, { useState, useEffect } from 'react';
import { IProduct } from 'shared/types/data';
import styles from './LikesPage.module.scss';

const LikesPage = () => {
  const [likes, setLikes] = useState<IProduct[] | [] | undefined>([]);

  useEffect(() => {
    const likesStorage = localStorage.getItem('likes');
    likesStorage ? setLikes(JSON.parse(likesStorage)) : setLikes([]);
  }, []);

  return (
    <main className={styles['likes-page__main']}>
      {likes?.length
        ? likes.map((item: IProduct) => (
            <Product
              data={item}
              key={item.id}
              beforeAction={<></>}
              afterAction={<></>}
            />
          ))
        : 'Пустая коллекция избранного'}
    </main>
  );
};

export default LikesPage;
