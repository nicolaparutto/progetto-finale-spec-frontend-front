// react utility:
import { Link, useNavigate } from "react-router-dom";
// menu data import:
import { topMenuData, mainMenuData } from "../../assets/utility-data";
// logo per percorso assoluto:
import logo from "../../../public/utility-img/logo.png";
import { useProductsContext } from "../../context/ProductsContext";
import { useMemo, useRef, useState } from "react";

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

	// searched products handle:
	const search = useRef(null);
	const navigate = useNavigate();
	const submitSearch = (e) => {
		e.preventDefault()
		const query = search.current.value.trim()
		navigate(`/searched-results?query=${encodeURIComponent(query)}`)
		search.current.value = '';
		search.current.blur();
	};

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
						<form action="#" onSubmit={e => submitSearch(e)}>
							<input type="text" placeholder="Cosa stai cercando?" ref={search} />
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
						<Link to={"/wishlist"}>
							<div className="user-wishlist">
								<i className="fa-solid fa-heart"></i>
								<div className="saved-quantity">{productsOnWishlist.length}</div>
							</div>
						</Link>
						<Link to={"/cart"}>
							<div className="user-cart">
								<i className="fa-solid fa-cart-shopping"></i>
								<div className="saved-quantity">{productsQuantity}</div>
							</div>
						</Link>
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