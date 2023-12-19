import { useEffect, useState, useContext } from "react";
import { getPersonalProducts } from "../../services/productsService";
import SingleProduct from "../SingleProductComponent/SingleProduct";
import './profile.scss';
import AuthContext from "../../contexts/authenticationContext";
import { Link } from "react-router-dom";
import GoogleMaps from "../GoogleMapsComponent/GoogleMaps";


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

      {(productsList.length ===0) && <h3 className="no-products-added">Все още не сте добавили никакви продукти! Добавете първия си продутк: <Link to="/create" className="navigation-item">
          Добави
        </Link></h3>}

        <GoogleMaps/>
    </section>
  );
}

export default Profile;