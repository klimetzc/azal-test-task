import Product from 'entities/Product/ui/Product';
import Promo from 'entities/Promo/ui/Promo';
import AddToBucket from 'features/addToBucket/ui/AddToBucket';
import LikeProduct from 'features/likeProduct/ui/LikeProduct';
import React from 'react';
import { IProduct } from 'shared/types/data';
import styles from './IndexPage.module.scss';

interface IIndexPage {
  data: IProduct[] | [];
}

const IndexPage: React.FC<IIndexPage> = ({ data }) => {
  return (
    <main className={styles['index-page']}>
      <section className={styles['index-page__content']}>
        <Promo />
        {data.map((item) => (
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
