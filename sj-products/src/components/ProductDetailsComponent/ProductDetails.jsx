import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneProduct, removeProduct } from "../../services/productsService";

import './product-details.scss'; 

import AuthContext from "../../contexts/authenticationContext";
import { addLike } from "../../services/likesService";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { userId, accessToken } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const canLike = (product._ownerId !== userId) && (userId !== undefined);
  console.log(canLike);

  useEffect(() => {
    getOneProduct(productId)
    .then(setProduct);
  }, [productId]);

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Сигурне ли сте, че искате да изтриете ${product.name}`
    );

    if (hasConfirmed) {
      removeProduct(productId, accessToken);

      navigate("/products");
    }
  };

  const likeButtonClickHandler = async () => {
     const test = await addLike(productId); 
     console.log(test);
  }

  return (
    <section className="product-details">
      <div className="single-product">
        <img src={product.img} className="product-img" />

        <h3>Име: {product.name}</h3>

        <p className="releaseDate">Цена: {product.price}</p>
        <p className="description">{product.description}</p>
        
        {canLike && 
        <button className="edit-delete-btn" onClick={likeButtonClickHandler}>Харесай</button>
      }

        {product._ownerId === userId && 
        <div className="btn-holder">
        <Link to={`/products/${product._id}/edit`} className="edit-delete-btn only-edit">Редактиране</Link>
        <button className="edit-delete-btn" onClick={deleteButtonClickHandler}>Изтриване</button>
        </div>
        }
        
      </div>
    </section>
  );
}
