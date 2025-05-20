import { useProductsContext } from "../context/ProductsContext"

function ComparisionPage() {
	const { productsToCompare } = useProductsContext();
	console.log(productsToCompare);

	return (
		<div>ComparisionPage</div>
	)
}

export default ComparisionPage