import { useEffect, useState } from "react";
// import { getAllProducts } from "../../services/productsService";
import SingleProduct from "../SingleProductComponent/SingleProduct";
import './products.scss';
import { productsList } from "../../services/productsService";

function Products() {

  // const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(''); 

  console.log(productsList);

  return (
    <section className="all-products">
      <h1 className="products-header">Всички продукти</h1>

      <div className="search">

      </div>

      {error && <p className="server-error">Сървърът не е включен!</p>}

      <div className="products-container">
        {productsList.map((product) => (
          <SingleProduct key={product.productId} {...product} />
        ))}
      </div>

      {(productsList.length === 0) && <p>Все още няма добавени продукти!</p>}
    </section>
  );
}

export default Products;
