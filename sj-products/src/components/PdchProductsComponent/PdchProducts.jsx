import { productsPdch } from "../../services/productsService";
import SinglePdchProduct from "./SinglePdchProduct";
import "./pdch-products.scss"; 

function PdchProducts() {

    console.log(productsPdch);    

    return (
       <section className="pdch-products"> 
        {productsPdch.map((product) => (
            <SinglePdchProduct key={product.name} product={product} />
        ))}
       </section>
    )
}

export default PdchProducts; 