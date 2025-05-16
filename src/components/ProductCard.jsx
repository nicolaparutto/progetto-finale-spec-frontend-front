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
			<Link to={`/product-details/${id}`}>
				<div className="card-content">
					<div className="card-img">
						<img src={`../${image}`} alt="product" />
					</div>
					<div className="card-text">
						<span>{category.toUpperCase()}</span>
						<h5>{title}</h5>
						<h6>€{price.toFixed(2)}</h6>
						<div className="product-hover">
							<button className="product-btn add-cart-btn" onClick={addCartHandle}>AGGIUNGI AL CARRELLO</button>
							<button className="product-btn add-wishlist-btn" onClick={addWishlistHandle}>AGGIUNGI ALLA WISHLIST</button>
						</div>
					</div>
				</div>
			</Link>
		</div >
	)
}

export default ProductCard