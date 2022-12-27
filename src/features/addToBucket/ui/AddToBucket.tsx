'use client';

import React, { useEffect, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import styles from './AddToBucket.module.scss';
import classNames from 'classnames';
import { IProduct, IProductWithCount } from 'shared/types/data';

interface IAddToBucket {
  product: IProduct;
}

const AddToBucket: React.FC<IAddToBucket> = ({ product }) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [addCounter, setAddCounter] = useState<number>(1);

  const addToBucket = () => {
    const bucket = localStorage.getItem('bucket');
    const bucketCopy: IProductWithCount[] | [] = bucket
      ? (JSON.parse(bucket) as IProductWithCount[])
      : [];
    bucketCopy.push({ count: addCounter, ...product });
    localStorage.setItem('bucket', JSON.stringify(bucketCopy));
  };

  const removeFromBucket = () => {
    const bucket = localStorage.getItem('bucket');
    let bucketCopy: IProduct[] | [] = bucket
      ? (JSON.parse(bucket) as IProduct[])
      : [];
    bucketCopy = bucketCopy.filter((item: IProduct) => item.id !== product.id);
    localStorage.setItem('bucket', JSON.stringify(bucketCopy));
  };

  const handleAdd = () => {
    setIsAdded(true);
    addToBucket();
  };

  const handleRemove = () => {
    setIsAdded(false);
    removeFromBucket();
  };

  const decreaseCounter = () => {
    if (addCounter > 1) setAddCounter((value) => value - 1);
  };

  const increaseCounter = () => {
    if (addCounter < 9) setAddCounter((value) => value + 1);
  };

  useEffect(() => {
    const bucket = localStorage.getItem('bucket');
    bucket &&
      setIsAdded(
        JSON.parse(bucket).some((item: IProduct) => product.id === item.id)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles['add-to-bucket__group']}>
        <Button
          className={styles['add-to-bucket__main-btn']}
          onClick={isAdded ? handleRemove : handleAdd}
          vueType={isAdded ? 'completed' : 'default'}
        >
          {isAdded ? 'В корзине' : 'В корзину'}
        </Button>
        <div
          className={classNames(
            styles['add-to-bucket__counter'],
            isAdded && styles['add-to-bucket__counter_hidden']
          )}
        >
          <button
            onClick={decreaseCounter}
            className={styles['add-to-bucket__minus']}
            disabled={isAdded}
          ></button>
          <span className={styles['add-to-bucket__counter-vue']}>
            {addCounter}
          </span>
          <button
            onClick={increaseCounter}
            className={styles['add-to-bucket__plus']}
            disabled={isAdded}
          ></button>
        </div>
      </div>
    </>
  );
};

export default AddToBucket;
