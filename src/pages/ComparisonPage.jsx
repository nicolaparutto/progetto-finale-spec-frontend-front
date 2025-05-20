import { useProductsContext } from "../context/ProductsContext"
import CompareProductCard from "../components/utility/CompareProductCard";
function ComparisionPage() {
	const { productsToCompare } = useProductsContext();
	console.log(productsToCompare);

	return (
		<section className="container compare-products-section section-spacer">
			<h1>Confronta i prodotti</h1>
			<div className="compare-list">
				<div className="compare-sidebar">
					<ul>
						<li>IMMAGINE</li>
						<li>CATEGORIA</li>
						<li>NOME PRODOTTO</li>
						<li>MARCA</li>
						<li>ANNO DI USCITA</li>
						<li>DESCRIZIONE</li>
						<li>DIMENSIONE SCHERMO</li>
						<li>PRESENZA SCHERMO</li>
						<li>CONNETTIVITÀ</li>
						<li>PREZZO</li>
					</ul>
				</div>
				{productsToCompare.map(p => (
					<CompareProductCard key={p.id} productData={p} />
				))}
			</div>
		</section>
	)
}

export default ComparisionPage