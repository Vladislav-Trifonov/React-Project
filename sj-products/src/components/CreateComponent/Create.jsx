import "./create.scss";
import { addProduct } from "../../services/productsService";
import { useNavigate } from "react-router-dom";

function Create() {

  const navigate = useNavigate();

  const onSubmitCreateHandler = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await addProduct(data); 
      navigate('/products')
    } catch(error) {
      console.log(error);  
    }
    
  };

  return (
    <section className="create">
      <h1>Добави Продукт</h1>

      <form className="createForm" onSubmit={onSubmitCreateHandler}>
        <div>
          <label htmlFor="name">Име</label>
          <input
            name="name"
            id="name"
            placeholder="Име на продукта"
            required
            min="4"
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
          />
        </div>

        <button type="submit">Добави</button>
      </form>
    </section>
  );
}

export default Create;
