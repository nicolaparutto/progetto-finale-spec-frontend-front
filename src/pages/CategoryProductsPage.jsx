// react utility:
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductsContext } from "../context/ProductsContext";

import ProductCard from "../components/ProductCard";

// ____________________________________________________
function CategoryProducts() {
	const { categoryName } = useParams();

	const { fetchProductsCategory, categoryProducts } = useProductsContext();

	const productsBrand = categoryProducts.reduce((brands, p) => {
		if (!brands.includes(p.brand)) {
			brands.push(p.brand)
		}
		return brands
	}, [])

	const openDetail = () => {
		console.log("ciao")
	}

	useEffect(() => {
		fetchProductsCategory(categoryName)
	}, [])
	return (
		<>
			<section className="container section-spacer">
				<div className="p-list-intestation">
					<h1>{categoryName}</h1>
					<div className="orders">
						<p>{categoryProducts.length} Prodotti</p>
						<div>
							<i className="fa-solid fa-border-all"></i>
							<i className="fa-solid fa-bars"></i>
						</div>
					</div>
				</div>
				<div className="p-section">
					<div className="p-filters">
						<h3>Filtri</h3>
						<details className="filter">
							<summary onClick={openDetail}>
								<span>Prezzo</span>
								<span><i className="fa-solid fa-chevron-down"></i></span>
							</summary>
							<form className="filter-options">
								<label>
									<input type="radio" name="price" value="opzione1" />
									Fino a € 299
								</label>

								<label>
									<input type="radio" name="price" value="opzione2" />
									da € 300 A € 500
								</label>

								<label>
									<input type="radio" name="price" value="opzione3" />
									oltre € 500
								</label>
							</form>
						</details>
						<details className="filter">
							<summary onClick={openDetail}>
								<span>Marca</span>
								<span><i className="fa-solid fa-chevron-down"></i></span>
							</summary>

							<form className="filter-options">
								{productsBrand.map((b, i) => (
									<div key={i}>
										<label>
											<input type="radio" name="brand" value={b} />
											{b}
										</label>
									</div>
								))}
							</form>

						</details>
					</div>
					<div className="p-list">
						{categoryProducts.map((p, i) => (
							<ProductCard key={i} productData={p} />
						))}
					</div>
				</div >
			</section >
		</>
	)
}

export default CategoryProducts