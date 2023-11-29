import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/userService";

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
        </section>
    );
}

export default Products; 