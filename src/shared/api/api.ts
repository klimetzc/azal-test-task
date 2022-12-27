export const getProducts = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
  } catch (e) {
    return {
      message: `${e}`,
    };
  }
};
