import "../assets/CSS/CSS-pages/SearchedProductsPage.css"
import { useLocation } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
import { useEffect } from "react";
import ProductCard from "../components/cards/ProductCard";

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
				<div className="p-list">
					{searchedProducts.map(p => (
						<ProductCard key={p.id} productData={p} wishListbtnText={"AGGIUNGI ALLA WISHLIST"} />
					))}
				</div>
			</div>
		</section>
	)
}

export default SearchedProductsPage