import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productsService";
import SingleProduct from "../SingleProductComponent/SingleProduct";
import './products.scss';


function Products() {

  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(''); 

  useEffect(() => {
    getAllProducts()
      .then((response) => setProductsList(response))
      .catch((error) => setError(error.message));
  }, []);

  console.log(productsList);

  return (
    <section className="all-products">
      <h1 className="products-header">Всички продукти</h1>

      {error && <p className="server-error">Сървърът не е включен!</p>}

      <div className="products-container">
        {productsList.map((product) => (
          <SingleProduct key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
