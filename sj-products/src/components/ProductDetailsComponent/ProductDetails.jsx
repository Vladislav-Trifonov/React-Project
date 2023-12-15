import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneProduct } from "../../services/productsService";

import './product-details.scss'; 

import AuthContext from "../../contexts/authenticationContext";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { email, userId } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    getOneProduct(productId)
    .then(setProduct);
  }, [productId]);

  console.log(product);

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${game.title}`
    );

    if (hasConfirmed) {
      await gameService.remove(productId);

      navigate("/games");
    }
  };

  return (
    <section className="product-details">
      <div className="single-product">
        <img src={product.img} className="product-img" />

        <h5>Име: {product.name}</h5>

        <p className="releaseDate">Цена: {product.price}</p>
        <p className="description">{product.description}</p>
      </div>
    </section>
  );
}
