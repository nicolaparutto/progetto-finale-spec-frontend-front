import { useProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function ProductCard({ productData }) {
	const { addToCart, addToWishlist } = useProductsContext();
	const { title, category, price, image, id } = productData;

	const addCartHandle = () => {
		addToCart(
			{ id, title, category, price, image }
		)
	}
	const addWishlistHandle = () => {
		addToWishlist(
			{ id, title, category, price, image }
		)
	}
	return (
		<div className="product-card">

			<div className="card-content">
				<Link to={`/product-details/${id}`}>
					<div className="card-img">
						<img src={`../${image}`} alt="product" />
					</div>
				</Link>
				<div className="card-text">
					<Link to={`/product-details/${id}`}>
						<span>{category.toUpperCase()}</span>
						<h5>{title}</h5>
						<h6>€{price.toFixed(2)}</h6>
					</Link>
					<div className="product-hover">
						<button className="product-btn add-cart-btn" onClick={addCartHandle}>AGGIUNGI AL CARRELLO</button>
						<button className="product-btn add-wishlist-btn" onClick={addWishlistHandle}>AGGIUNGI ALLA WISHLIST</button>
					</div>
				</div>
			</div>

		</div >
	)
}

export default ProductCard