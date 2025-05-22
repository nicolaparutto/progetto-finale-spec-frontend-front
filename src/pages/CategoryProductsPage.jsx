import "../assets/CSS/CSS-pages/CategoryProductsPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/cards/ProductCard";

function CategoryProducts() {
	const { categoryName } = useParams();
	const { fetchProductsCategory, categoryProducts } = useProductsContext();

	// find products brands:
	const productsBrand = useMemo(() => {
		return categoryProducts.reduce((brands, p) => {
			if (!brands.includes(p.brand)) {
				brands.push(p.brand);
			}
			return brands;
		}, []);
	}, [categoryProducts]);

	// filters:
	const [selectedPrice, setSelectedPrice] = useState(null);
	const [selectedBrand, setSelectedBrand] = useState("");
	const [selectedOrder, setSelectedOrder] = useState("rilevanza");
	// filter function:
	const filteredProducts = useMemo(() => {
		let filtered = [...categoryProducts]
		// price:
		if (selectedPrice === "opt1") {
			filtered = filtered.filter(p => p.price <= 300);
		} else if (selectedPrice === "opt2") {
			filtered = filtered.filter(p => p.price > 300 && p.price <= 500);
		} else if (selectedPrice === "opt3") {
			filtered = filtered.filter(p => p.price > 500);
		}
		// brand:
		if (selectedBrand) {
			filtered = filtered.filter(p => p.brand === selectedBrand);
		}
		// orders:
		if (selectedOrder === "crescente") {
			filtered = filtered.sort((a, b) => a.price - b.price);
		} else if (selectedOrder === "decrescente") {
			filtered = filtered.sort((a, b) => b.price - a.price);
		} else if (selectedOrder === "A-Z") {
			filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
		} else if (selectedOrder === "Z-A") {
			filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
		}
		return filtered
	}, [categoryProducts, selectedPrice, selectedBrand, selectedOrder])
	//remove filter:
	const handleRemoveFilters = () => {
		setSelectedPrice(null);
		setSelectedBrand("");
		setSelectedOrder("rilevanza");
	}

	useEffect(() => {
		fetchProductsCategory(categoryName);
	}, []);

	return (
		<>
			<section className="container section-spacer">
				<div className="p-list-intestation">
					<h1>{categoryName}</h1>
					<div className="order-by-select">
						<span>Ordina per:</span>
						<select onChange={e => setSelectedOrder(e.target.value)}>
							<option value="rilevanza" >Rilevanza</option>
							<option value="crescente" >Prezzo crescente</option>
							<option value="decrescente" >Prezzo decrescente</option>
							<option value="A-Z" >Nome A-Z</option>
							<option value="Z-A" >Nome Z-A</option>
						</select>
					</div>
					<div className="products-visualization">
						<p>{categoryProducts.length} Prodotti</p>
						<div>
							<i className="fa-solid fa-border-all"></i>
							<i className="fa-solid fa-bars"></i>
						</div>
					</div>
				</div>
				<div className="p-section">
					<div className="filters-section">
						<div className="filters-intestation">
							<h3>Filtri</h3>
							<button className="remove-filter-btn" onClick={handleRemoveFilters}><i className="fa-solid fa-xmark"></i></button>
						</div>
						<details className="filter">
							<summary>
								<span>Prezzo</span>
								<span><i className="fa-solid fa-chevron-down"></i></span>
							</summary>
							<form className="filter-options">
								<label>
									<input type="radio" name="price" value="opt1" checked={selectedPrice === "opt1"} onChange={e => setSelectedPrice(e.target.value)} />
									<span>fino a € 300</span>
								</label>
								<label>
									<input type="radio" name="price" value="opt2" checked={selectedPrice === "opt2"} onChange={e => setSelectedPrice(e.target.value)} />
									<span>da € 300 a € 500</span>
								</label>
								<label>
									<input type="radio" name="price" value="opt3" checked={selectedPrice === "opt3"} onChange={e => setSelectedPrice(e.target.value)} />
									<span>oltre € 500</span>
								</label>
							</form>
						</details>
						<details className="filter">
							<summary>
								<span>Marca</span>
								<span><i className="fa-solid fa-chevron-down"></i></span>
							</summary>
							<form className="filter-options">
								{productsBrand.map((b, i) => (
									<div key={i}>
										<label>
											<input type="radio" name="brand" value={b} checked={selectedBrand === b} onChange={e => setSelectedBrand(e.target.value)} />
											<span>{b}</span>
										</label>
									</div>
								))}
							</form>
						</details>
					</div>
					<div className="p-list">
						{filteredProducts.map(p => (
							<ProductCard key={p.id} productData={p} wishListbtnText={"AGGIUNGI ALLA WISHLIST"} />
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default CategoryProducts