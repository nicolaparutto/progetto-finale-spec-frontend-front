function CompareProductCard({ productData }) {
	const { image, category, title, brand, releaseYear, description, displayDimensions, displayPresence, connectivity, price } = productData;


	return (
		<div className="compare-product-card">
			<div>
				<img src={image} alt="" />
			</div>
			<ul>
				<li>{category}</li>
				<li>{title}</li>
				<li>{brand}</li>
				<li>{releaseYear}</li>
				<li>{description}</li>
				<li>{displayDimensions} pollici</li>
				<li>{displayPresence}</li>
				<li>{connectivity?.join(" - ")}</li>
				<li>€ {price.toFixed(2)}</li>
			</ul>
		</div>
	)
}

export default CompareProductCard