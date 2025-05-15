import { useParams } from "react-router-dom"

// ____________________________________________________
function CategoryProducts() {
	const { categoryName } = useParams()
	console.log(categoryName);

	return (
		<div>Stai visualizzando i prodotti di categoria: {categoryName}</div>
	)
}

export default CategoryProducts