import './single-product.scss'; 

function SingleProduct({name, price, description, img}) {

  return (
    <div className="single-product">
      <img src={img} alt={name} className='product-img'/>

      <h5>Име: {name}</h5>

      <p class="releaseDate">Цена: {price}</p>
      <p class="description">{description}</p>
    </div>
  );
}

export default SingleProduct;
