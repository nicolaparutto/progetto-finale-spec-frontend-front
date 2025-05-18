import { useLocation } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
import { useEffect } from "react";
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
		<div>Risultati ricerca: {query}</div>
	)
}

export default SearchedProductsPage