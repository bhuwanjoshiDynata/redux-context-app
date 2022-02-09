import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <h2><Link to="/">Home</Link></h2>
            <h2><Link to="/catalog">Start Shopping</Link></h2>
            <h2><Link to="/checkout">Checkout</Link></h2>
        </div>
    )
}

export default NavBar