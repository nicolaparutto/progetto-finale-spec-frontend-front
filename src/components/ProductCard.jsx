import { useProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { memo } from "react";
function ProductCard({ productData, wishListbtnText }) {
	const { addToCart, addToWishlist, removeFromWishlist, addToCompare } = useProductsContext();
	const { id, title, category, price, image, brand } = productData;

	const addCartHandle = () => {
		addToCart(
			{ id, title, category, price, image, brand }
		)
	}
	const addWishlistHandle = (whatToDo) => {
		if (whatToDo === "AGGIUNGI ALLA WISHLIST") {
			addToWishlist(
				{ id, title, category, price, image, brand }
			)
		} else if (whatToDo === "RIMUOVI DALLA WISHLIST") {
			removeFromWishlist(id)
		}
	}
	const addCompareHandle = () => {
		addToCompare(id)
	}
	return (
		<div className="product-card">
			<div className="card-content">
				<button className="compare-btn" onClick={addCompareHandle}>
					<i className="fa-solid fa-arrow-right-arrow-left"></i>
				</button>
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
						<button className="product-btn add-wishlist-btn" onClick={() => addWishlistHandle(wishListbtnText)}>{wishListbtnText}</button>
					</div>
				</div>
			</div>

		</div >
	)
}

export default memo(ProductCard)