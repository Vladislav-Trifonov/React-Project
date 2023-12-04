import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productsService";
import SingleProduct from "../SingleProductComponent/SingleProduct";
import './products.scss';


function Products() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => setProductsList(response))
      .catch((error) => console.log(error));
  }, []);

  console.log(productsList);

  return (
    <section className="all-products">
      <h1 className="products-header">All products</h1>

      <div className="products-container">
        {productsList.map((product) => (
          <SingleProduct key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
