import "./productlist.css";
import Product from "../../components/product/Product"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Learning & Creating.</h1>
                <p className="pl-desc">This my <b>portfolio</b>and I'm learning new skills day by day and implementing it on regular basis.
                 I'm creative, hardworking and techy person. By the way these are not my pictures.</p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
