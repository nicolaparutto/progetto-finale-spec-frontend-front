function ProductCard({ productData }) {

	const { title, category, price, image } = productData;

	return (
		<div className="p-card">
			<div className="card-content">
				<div className="card-img">
					<img src={`../${image}`} alt="product" />
				</div>
				<div className="card-text">
					<span>{category.toUpperCase()}</span>
					<h5>{title}</h5>
					<h6>€{price}</h6>
					<div className="product-hover">
						<button className="product-btn add-cart-btn">AGGIUNGI AL CARRELLO</button>
						<button className="product-btn add-wishlist-btn">AGGIUNGI ALLA WISHLIST</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard