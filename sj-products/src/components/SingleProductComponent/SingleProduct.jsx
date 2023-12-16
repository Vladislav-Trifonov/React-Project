import { Link } from 'react-router-dom';
import './single-product.scss'; 

function SingleProduct({name, price, img, _id}) {

  return (
    <div className="single-product">
      <img src={img} className='product-img'/>

      <h3>Име: {name}</h3>

      <p className="releaseDate">Цена: {price}лв</p>
      <Link to={`/products/${_id}`} className='details-btn'>Детайли</Link>
    </div>
  );
}

export default SingleProduct;
