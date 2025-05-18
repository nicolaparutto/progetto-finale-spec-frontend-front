import ProductCard from "../ProductCard"

function ProductsList({ productsData }) {
	return (
		<div className="p-list">
			{productsData.length > 0 ?
				productsData.map((p) => (
					<ProductCard key={p.id} productData={p} />
				))
				:
				<div className="not-found-box">
					<img src="../utility-img/product-not-found.png" alt="" />
				</div>
			}
		</div>
	)
}

export default ProductsList