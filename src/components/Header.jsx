// menu data import:
import { topMenuData, mainMenuData } from "../assets/utility-data"

// ____________________________________________________
function Header() {
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
						<img src="utility-img/logo.png" alt="logo" />
					</div>
					<div className="user-section">
						<div className="user-info">
							<i className="fa-solid fa-user"></i>
						</div>
						<div className="user-wishlist">
							<i className="fa-solid fa-heart"></i>
							{/* quantità da modificare */}
							<div className="saved-quantity">0</div>
						</div>
						<div className="user-cart">
							<i className="fa-solid fa-cart-shopping"></i>
							{/* quantità da modificare */}
							<div className="saved-quantity">0</div>
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