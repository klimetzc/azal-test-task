import Product from 'entities/Product/ui/Product';
import Promo from 'entities/Promo/ui/Promo';
import AddToBucket from 'features/addToBucket/ui/AddToBucket';
import LikeProduct from 'features/likeProduct/ui/LikeProduct';
import React from 'react';
import { getProducts } from 'shared/api/api';
import { IProduct } from 'shared/types/data';
import styles from './IndexPage.module.scss';

const IndexPage = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <main className={styles['index-page']}>
      <section className={styles['index-page__content']}>
        <Promo />
        {products.map((item) => (
          <Product
            data={item}
            key={item.id}
            beforeAction={<AddToBucket product={item} />}
            afterAction={<LikeProduct product={item} />}
          />
        ))}
      </section>
    </main>
  );
};

export default IndexPage;
