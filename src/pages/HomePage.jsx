import "../assets/CSS/CSS-pages/HomePage.css"
import { Link } from "react-router-dom";
import categoriesData from "../data/constants/categoriesData";

function HomePage() {
	return (
		<>
			<section className="homepage-banner">
				<img src="/IMG_utilities/homepage-banner.webp" alt="" />
			</section>
			<section className="container section-spacer">
				<h1>Le nostre proposte</h1>
				<div className="category-products">
					{categoriesData.map(c => (
						<div key={c.id}>
							<Link to={`/category/${encodeURIComponent(c.name)}`}>
								<img src={c.image} alt={c.name} />
							</Link>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default HomePage