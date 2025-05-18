import { useLocation } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
import { useEffect } from "react";

// components:
import ProductsList from "../components/utility/ProductsList";

function SearchedProductsPage() {
	const { fetchSearchedProducts, searchedProducts } = useProductsContext()
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const query = params.get("query");
	console.log(searchedProducts);

	useEffect(() => {
		fetchSearchedProducts(query);
	}, [query])
	return (
		<section className=" container section-spacer">
			<h1>Risutato ricerca: {query}</h1>
			<div className="searched-products-list">
				<ProductsList productsData={searchedProducts}></ProductsList>
			</div>
		</section>
	)
}

export default SearchedProductsPage