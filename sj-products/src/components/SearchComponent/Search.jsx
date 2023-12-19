import { useEffect, useState } from "react";
import { search } from "../../services/productsService";
import "./search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SingleProduct from "../SingleProductComponent/SingleProduct";

function Search(searchParam) {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  const onSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  console.log(searchValue);

  async function onSearchButtonHandler() {

    const productsList = await search(searchValue);

    setSearchedProducts(productsList);

    setSearchValue("");
  }

  return (
    <section className="search-section">
      <div className="search-holder">
        <label htmlFor="search-input">Потърсете за даден продукт:</label>
        <div>
          <input
            type="text"
            id="search-input"
            onChange={onSearchInputChange}
            value={searchValue}
          />
          <button className="seacrh-button" onClick={onSearchButtonHandler}>
            Търси <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </div>
      </div>

      <div className="products-container">
        {searchedProducts.map((product) => (
          <SingleProduct key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Search;
