import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Test1",
    description: "La papaya una despache",
    price: 6.0,
  },
  {
    id: "p2",
    title: "Test2",
    description: "Hahahah abanana",
    price: 12.0,
  },
];

const Products = () => {
  const productElements = DUMMY_PRODUCTS.map((product) => {
    return <ProductItem key={product.id} item={product} />;
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productElements}</ul>
    </section>
  );
};

export default Products;
