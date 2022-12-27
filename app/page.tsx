import React from 'react';
import IndexPage from 'pages/IndexPage/IndexPage';
import { getProducts } from 'shared/api/api';
import { IProduct } from 'shared/types/data';

const Page = async () => {
  const products: IProduct[] = await getProducts();

  return <IndexPage data={products} />;
};

export default Page;
