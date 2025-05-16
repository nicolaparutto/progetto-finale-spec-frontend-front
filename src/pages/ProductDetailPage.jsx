import { useParams } from "react-router-dom"
// ____________________________________________________
function ProductDetailPage() {
	const { id } = useParams()

	return (
		<div>Pagina di dettagli prodotto con id: {id}</div>
	)
}

export default ProductDetailPage