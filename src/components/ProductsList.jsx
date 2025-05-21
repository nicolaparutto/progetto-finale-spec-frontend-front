import ProductCard from "./cards/ProductCard";

function ProductsList({ productsData, wishListbtnText }) {
	return (
		<div className="p-list">
			{productsData.length > 0 ?
				productsData.map((p) => (
					<ProductCard key={p.id} productData={p} wishListbtnText={wishListbtnText} />
				))
				: (
					<div className="not-found-box">
						<img src="../IMG_utilities/product-not-found.png" alt="" />
					</div>
				)}
		</div>
	)
}

export default ProductsList