import "./edit.scss";
import { addProduct, editProduct, getOneProduct } from "../../services/productsService";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authenticationContext";

function Edit() {

  const navigate = useNavigate();
  
  const { productId } = useParams();

  const { accessToken } = useContext(AuthContext); 

  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    getOneProduct(productId).then(res => setInitialValues(res));
  }, [productId]); 

  const onSubmitEditHandler = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await editProduct(data, productId, accessToken); 
      navigate('/products')
    } catch(error) {
      console.log(error);  
    }
    
  };

  return (
    <section className="edit">
      <h1>Редактирай Продукт</h1>

      <form className="createForm" onSubmit={onSubmitEditHandler}>
        <div>
          <label htmlFor="name">Име</label>
          <input
            name="name"
            id="name"
            placeholder="Име на продукта"
            required
            min="4"
            defaultValue={initialValues.name}
          />
        </div>

        <div>
          <label htmlFor="image">Снимка</label>
          <input
            type="text"
            name="img"
            id="image"
            placeholder="URL на снимката"
            required
            defaultValue={initialValues.img}
          />
        </div>

        <div>
          <label htmlFor="description">Описание</label>
          <input
            type="text"
            name="description"
            id="description"
            list="description"
            placeholder="Описание за продукта"
            required
            defaultValue={initialValues.description}
          />
        </div>

        <div>
          <label htmlFor="rating">Цена</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="9.99"
            required
            defaultValue={initialValues.price}
          />
        </div>

        <button type="submit">Редактирай</button>
      </form>
    </section>
  );
}

export default Edit;