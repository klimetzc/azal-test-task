export interface IProduct {
  id: number;
  price: number;
  title: string;
  category: string;
  image: string;
  description: string;
  rating: {
    count: number;
    rate: number;
  };
}

export interface IProductWithCount extends IProduct {
  count: number;
}
