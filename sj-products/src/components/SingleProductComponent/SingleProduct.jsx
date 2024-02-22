import { Link } from "react-router-dom";
import "./single-product.scss";

function SingleProduct({ name, price, img, _id }) {
  let pathName = null;

  switch (name) {
    case "ПДЧ":
      pathName = "/products/pdch";
      break;
    case "МДФ":
      pathName = "/products/mdf";
      break;
    case "Мебелни кантове":
      pathName = "/products/kantove";
      break;
    case "Плотове":
      pathName = "/products/plots";
      break;
    case "Мивки":
      pathName = "/products/mivki";
      break;
    default:
      break;
  }

  return (
    <div className="single-product">
      <div className="name">{name}</div>
      <Link to={pathName}>
        <img src={img} className="product-img" />
      </Link>
    </div>
  );
}

export default SingleProduct;
