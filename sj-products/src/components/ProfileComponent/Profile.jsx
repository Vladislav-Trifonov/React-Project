import { useEffect, useState, useContext } from "react";
import { getPersonalProducts } from "../../services/productsService";
import SingleProduct from "../SingleProductComponent/SingleProduct";
import './profile.scss';
import AuthContext from "../../contexts/authenticationContext";


function Profile() {

  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(''); 

  const { userId } = useContext(AuthContext);

  useEffect(() => {
    getPersonalProducts(userId)
      .then((response) => setProductsList(response))
      .catch((error) => setError(error.message));
  }, []);

  console.log(productsList);

  return (
    <section className="all-products">
      <h1 className="products-header">Всички твои продукти</h1>

      {error && <p className="server-error">Сървърът не е включен!</p>}

      <div className="products-container">
        {productsList.map((product) => (
          <SingleProduct key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Profile;