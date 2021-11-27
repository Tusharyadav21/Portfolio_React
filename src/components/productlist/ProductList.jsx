import "./productlist.css";
import Product from "../../components/product/Product"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire.</h1>
                <p className="pl-desc">I'm Creating a portfolio that your work has been waiting ..... Beatiful homes, Stunning portfolio styles & a whole lot more....... inside</p>
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
