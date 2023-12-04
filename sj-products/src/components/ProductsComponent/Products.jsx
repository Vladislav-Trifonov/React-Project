import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productsService";
import SingleProduct from "../SingleProductComponent/SingleProduct";


function Products() {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        getAllProducts()
        .then(response => setProductsList(response))
        .catch(error => console.log(error))
    }, [])

    console.log(productsList);

    return(
        <section>
            <h1>All products</h1>

            {productsList.map(product => <SingleProduct key={product._id} {...product}/>)}
        </section>
    );
}

export default Products; 