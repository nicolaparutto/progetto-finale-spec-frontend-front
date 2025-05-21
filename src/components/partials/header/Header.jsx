import { Link, useNavigate } from "react-router-dom";
import { topMenuData, mainMenuData } from "../../../data/constants/headerData";
import { useProductsContext } from "../../../context/ProductsContext";
import { useMemo, useRef } from "react";
// logo per percorso assoluto:
import logo from "/IMG_utilities/logo.png";

function Header() {
	const { productsOnCart, productsOnWishlist } = useProductsContext();
	const navigate = useNavigate();

	// products quantity handle:
	const productsQuantity = useMemo(() => {
		return productsOnCart.reduce((quantity, p) => {
			return quantity + p.quantity;
		}, 0)
	}, [productsOnCart]);

	// research products handle:
	const queryToSearch = useRef(null);
	const submitSearch = (e) => {
		e.preventDefault();
		const query = queryToSearch.current.value.trim();
		navigate(`/searched-results?query=${encodeURIComponent(query)}`)
		queryToSearch.current.value = ''; // input reset.
		queryToSearch.current.blur(); // input de-focus.
	};

	return (
		<>
			<div className="container">
				<div className="top-menu-header">
					<ul>
						{topMenuData.map((li, i) => (
							<li key={i}><a href="#">{li}</a></li>
						))}
					</ul>
				</div>
				<div className="main-header">
					<div className="search-bar">
						<form onSubmit={e => submitSearch(e)}>
							<input type="text" placeholder="Cosa stai cercando?" ref={queryToSearch} />
							<button type="submit">
								<i className="fa-solid fa-magnifying-glass"></i>
							</button>
						</form>
					</div>
					<div className="logo">
						<Link to={"/"}><img src={logo} alt="Logo" /></Link>
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