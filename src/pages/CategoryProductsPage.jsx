// react utility:
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductsContext } from "../context/ProductsContext";
//components:
import ProductsList from "../components/utility/ProductsList";
function CategoryProducts() {
	const { categoryName } = useParams();
	// context:
	const { fetchProductsCategory, categoryProducts } = useProductsContext();
	// products list and ordered:
	const [productsOrder, setProductsOrder] = useState(categoryProducts);
	// products brands:
	const productsBrand = categoryProducts.reduce((brands, p) => {
		if (!brands.includes(p.brand)) {
			brands.push(p.brand)
		}
		return brands
	}, [])
	// filter system:
	const [selectedPrice, setSelectedPrice] = useState(null);
	const [selectedBrand, setSelectedBrand] = useState("");
	const [selectedOrder, setSelectedOrder] = useState("rilevanza");

	// filter function:
	const filterProducts = () => {
		let filtered = [...categoryProducts]
		if (selectedPrice === "opt1") {
			filtered = filtered.filter(p => p.price <= 300);
		} else if (selectedPrice === "opt2") {
			filtered = filtered.filter(p => p.price > 300 && p.price <= 500);
		} else if (selectedPrice === "opt3") {
			filtered = filtered.filter(p => p.price > 500);
		}
		if (selectedBrand) {
			filtered = filtered.filter(p => p.brand === selectedBrand);
		}
		if (selectedOrder === "crescente") {
			filtered = filtered.sort((a, b) => a.price - b.price)
		} else if (selectedOrder === "decrescente") {
			filtered = filtered.sort((a, b) => b.price - a.price)
		} else if (selectedOrder === "A-Z") {
			filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
		} else if (selectedOrder === "Z-A") {
			filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
		}
		setProductsOrder(filtered)
	}
	// useEffect al cambiamento dei filtri:
	useEffect(() => {
		filterProducts();
	}, [selectedPrice, selectedBrand, selectedOrder]);
	// useEffect per settare la lista prodotti al cambiamento di categoryProducts:
	useEffect(() => {
		setProductsOrder(categoryProducts);
	}, [categoryProducts]);
	// fetch dei prodotti al caricamento del componente:
	useEffect(() => {
		fetchProductsCategory(categoryName)
	}, [])

	return (
		<>
			<section className="container section-spacer">
				<div className="p-list-intestation">
					<h1>{categoryName}</h1>
					<div>
						<label className="order-by-select">
							<span>Ordina per:</span>
							<select onChange={e => setSelectedOrder(e.target.value)}>
								<option value="rilevanza" >Rilevanza</option>
								<option value="crescente" >Prezzo crescente</option>
								<option value="decrescente" >Prezzo decrescente</option>
								<option value="A-Z" >Nome A-Z</option>
								<option value="Z-A" >Nome Z-A</option>
							</select>
						</label>
					</div>
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
						<div className="filters-intestation">
							<h3>Filtri</h3>
							<button className="remove-filter-btn" onClick={() => setProductsOrder(categoryProducts)}>Rimuovi filtri</button>
						</div>
						<details className="filter">
							<summary>
								<span>Prezzo</span>
								<span><i className="fa-solid fa-chevron-down"></i></span>
							</summary>
							<form className="filter-options">
								<label>
									<input type="radio" name="price" value="opt1" onChange={e => setSelectedPrice(e.target.value)} />
									<span>fino a € 300</span>
								</label>
								<label>
									<input type="radio" name="price" value="opt2" onChange={e => setSelectedPrice(e.target.value)} />
									<span>da € 300 a € 500</span>
								</label>
								<label>
									<input type="radio" name="price" value="opt3" onChange={e => setSelectedPrice(e.target.value)} />
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
											<input type="radio" name="brand" value={b} onChange={e => setSelectedBrand(e.target.value)} />
											<span>{b}</span>
										</label>
									</div>
								))}
							</form>
						</details>
					</div>
					<ProductsList productsData={productsOrder}></ProductsList>

				</div >
			</section >
		</>
	)
}

export default CategoryProducts