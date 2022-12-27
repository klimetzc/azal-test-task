'use client';

import React, { useEffect, useState } from 'react';
import styles from './LikeProduct.module.scss';
import classNames from 'classnames';
import { IProduct } from 'shared/types/data';

interface ILikeButton {
  product: IProduct;
}

const LikeProduct: React.FC<ILikeButton> = ({ product }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const addToLikes = () => {
    const likes = localStorage.getItem('likes');
    const likesCopy: IProduct[] | [] = likes
      ? (JSON.parse(likes) as IProduct[])
      : [];
    likesCopy.push(product);
    localStorage.setItem('likes', JSON.stringify(likesCopy));
  };

  const removeFromLikes = () => {
    const likes = localStorage.getItem('likes');
    let likesCopy: IProduct[] | [] = likes
      ? (JSON.parse(likes) as IProduct[])
      : [];
    likesCopy = likesCopy.filter((item: IProduct) => item.id !== product.id);
    localStorage.setItem('likes', JSON.stringify(likesCopy));
  };

  const handleLike = () => {
    setIsLiked(true);
    addToLikes();
  };

  const handleUnlike = () => {
    setIsLiked(false);
    removeFromLikes();
  };

  useEffect(() => {
    const likes = localStorage.getItem('likes');
    likes &&
      setIsLiked(
        JSON.parse(likes).some((item: IProduct) => product.id === item.id)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      onClick={isLiked ? handleUnlike : handleLike}
      type="button"
      className={classNames(styles['like'], isLiked && styles['like_liked'])}
    ></button>
  );
};

export default LikeProduct;
