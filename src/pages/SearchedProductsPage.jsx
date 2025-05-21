import { useLocation } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
import { useEffect } from "react";
import ProductsList from "../components/ProductsList";

function SearchedProductsPage() {
	const { fetchSearchedProducts, searchedProducts } = useProductsContext();
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const query = params.get("query");

	useEffect(() => {
		if (query) {
			fetchSearchedProducts(query);
		}
	}, [query]);

	return (
		<section className=" container section-spacer">
			<h1>Risutato ricerca: {query}</h1>
			<div className="searched-products-list">
				{searchedProducts.length === 1 ? (
					<p>TROVATO: <span>{searchedProducts.length}</span> RISULTATO</p>
				) : (
					<p>TROVATI: <span>{searchedProducts.length}</span> RISULTATI</p>
				)}
				<ProductsList productsData={searchedProducts} wishListbtnText={"AGGIUNGI ALLA WISHLIST"}></ProductsList>
			</div>
		</section>
	)
}

export default SearchedProductsPage