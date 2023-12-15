import { Link } from 'react-router-dom';
import './single-product.scss'; 

function SingleProduct({name, price, description, img, _id}) {

  return (
    <div className="single-product">
      <img src={img} className='product-img'/>

      <h5>Име: {name}</h5>

      <p class="releaseDate">Цена: {price}</p>
      <Link to={`/products/${_id}`} className='details-btn'>Детайли</Link>
    </div>
  );
}

export default SingleProduct;
