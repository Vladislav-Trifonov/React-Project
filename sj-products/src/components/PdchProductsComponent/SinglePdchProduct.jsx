function SinglePdchProduct({product}) {


console.log(product);

  return (
    <div className="single-pdchproduct">
        <img src={product.img} className="pdch-img" />
        <div className="pdch-description">{product.name} {product.price}</div>
    </div>
  );
}

export default SinglePdchProduct; 
