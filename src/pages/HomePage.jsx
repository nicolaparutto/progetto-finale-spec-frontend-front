// react utility:
import { Link } from "react-router-dom";

// ____________________________________________________
function HomePage() {
	return (
		<>
			<div className="homepage-banner">
				<img src="utility-img/homepage-banner.webp" alt="" />
			</div>
			<section className="container section-spacer">
				<h1>Le nostre proposte</h1>
				<div className="category-products">
					<div>
						<Link to={"/category/Computer%20Portatili"}>
							<img src="../category-img/portatili-category.webp" alt="" />
						</Link>
					</div>
					<div>
						<Link to={"/category/PC%20Desktop"}>
							<img src="../category-img/desktop-category.webp" alt="" />
						</Link>
					</div>
					<div>
						<Link to={"/category/Smartphone%20e%20Cellulari"}>
							<img src="../category-img/smartphone-category.webp" alt="" />
						</Link>
					</div>
					<div>
						<Link to={"/category/Tv"}>
							<img src="../category-img/tv-category.webp" alt="" />
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomePage