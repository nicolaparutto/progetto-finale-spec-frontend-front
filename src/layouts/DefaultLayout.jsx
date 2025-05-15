import { Outlet } from "react-router-dom"

// ____________________________________________________
function DefaultLayout() {
	return (
		<>
			<header className="container">
				<div className="top-menu-header">
					<ul>
						<li>Negozi</li>
						<li>Volantini</li>
						<li>Servizi</li>
						<li>Star Club</li>
						<li>Magazine</li>
					</ul>
				</div>
				<div className="main-header">
					<div className="search-bar">
						<form action="#">
							<input type="text" placeholder="Cosa stai cercando?" />
							<button><i class="fa-solid fa-magnifying-glass"></i></button>
						</form>
					</div>
					<div className="logo">
						<img src="utility-img/logo.png" alt="logo" />
					</div>
					<div className="user-section">
						<div className="user-info">
							<i class="fa-solid fa-user"></i>
						</div>
						<div className="user-wishlist">
							<i class="fa-solid fa-heart"></i>
							{/* quantità da modificare */}
							<div className="saved-quantity">0</div>
						</div>
						<div className="user-cart">
							<i class="fa-solid fa-cart-shopping"></i>
							{/* quantità da modificare */}
							<div className="saved-quantity">0</div>
						</div>
					</div>
				</div>
				<div className="main-menu-header">
					<ul>
						<li><a href="#">Informatica</a></li>
						<li><a href="#">Gaming</a></li>
						<li><a href="#">Telefonia</a></li>
						<li><a href="#">Tv e Audio</a></li>
						<li><a href="#">Elettrodomestici</a></li>
						<li><a href="#">Foto, Video, Droni</a></li>
						<li><a href="#">Mobilità Elettrica</a></li>
						<li><a href="#">Lifestyle</a></li>
						<li><a href="#">Green Tech</a></li>
						<li><a href="#">Outlet</a></li>
					</ul>
				</div>
			</header >
			<main>
				<Outlet />
			</main>
			<footer>
				footer
			</footer>
		</>
	)
}

export default DefaultLayout