// react utility:
import { Link } from "react-router-dom";
// menu data import:
import { topMenuData, mainMenuData } from "../../assets/utility-data";
// logo per percorso assoluto:
import logo from "../../../public/utility-img/logo.png";
import { useProductsContext } from "../../context/ProductsContext";
import { useMemo, useState } from "react";

// ____________________________________________________
function Header() {
	const { productsOnCart, productsOnWishlist } = useProductsContext();

	// products quantity handle:
	const [productsQuantity, setProductsQuantity] = useState(0)
	useMemo(() => {
		const quantity = productsOnCart.reduce((quantity, p) => {
			return quantity += p.quantity
		}, 0)
		setProductsQuantity(quantity);
	}, [productsOnCart])

	return (
		<>
			<div className="container">
				<div className="top-menu-header">
					<ul>
						{topMenuData.map((li, i) => (
							<li key={i}>{li}</li>
						))}
					</ul>
				</div>
				<div className="main-header">
					<div className="search-bar">
						<form action="#">
							<input type="text" placeholder="Cosa stai cercando?" />
							<button><i className="fa-solid fa-magnifying-glass"></i></button>
						</form>
					</div>
					<div className="logo">
						<Link to={"/"}><img src={logo} alt="logo" /></Link>
					</div>
					<div className="user-section">
						<div className="user-info">
							<i className="fa-solid fa-user"></i>
						</div>
						<div className="user-wishlist">
							<i className="fa-solid fa-heart"></i>
							<div className="saved-quantity">{productsOnWishlist.length}</div>
						</div>
						<div className="user-cart">
							<i className="fa-solid fa-cart-shopping"></i>
							<div className="saved-quantity">{productsQuantity}</div>
						</div>
					</div>
				</div>

				<div className="main-menu-header">
					<ul>
						{mainMenuData.map((li, i) => (
							<li key={i}><a href="#">{li}</a></li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Header