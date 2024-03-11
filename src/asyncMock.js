const productList = [

];

export default productList;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList);
    }, 100);
  })
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const upperCategory = category.charAt(0).toUpperCase() + category.slice(1);
      resolve(productList.filter(prod => prod.category === upperCategory));
    }, 500);
  });
};