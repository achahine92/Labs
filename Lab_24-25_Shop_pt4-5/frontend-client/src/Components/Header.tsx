import { Link } from "react-router-dom"
import "./Header.css"
import { useContext } from "react"
import CartContext from "../Contexts/CartContext"

const Header = () => {
    const { cartItemCounts } = useContext(CartContext)

return (
    <nav className="header">
        <Link to="/"> 
            <h1>Shop</h1> 
        </Link>
        <Link to="/products"><h3>Products</h3></Link>
        <Link to="/cart"><h3>Cart: </h3></Link>
        <div>{cartItemCounts}</div>
    </nav>
)

}

export default Header