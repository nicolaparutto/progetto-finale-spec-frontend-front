import { memo } from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/ProductsContext";

function ProductCard({ productData, wishListbtnText }) {
	const { addToCart, addToWishlist, removeFromWishlist, addToCompare } = useProductsContext();
	const { id, title, category, price, image, brand } = productData;

	const prodToadd = { id, title, category, price, image, brand };
	
	// cart:
	const addCartHandle = () => addToCart(prodToadd);
	// wishlist:
	const addWishlistHandle = (whatToDo) => {
		if (whatToDo === "AGGIUNGI ALLA WISHLIST") {
			addToWishlist(prodToadd);
		} else if (whatToDo === "RIMUOVI DALLA WISHLIST") {
			removeFromWishlist(id);
		}
	}
	// compare:
	const addCompareHandle = () => addToCompare(id);

	return (
		<div className="product-card">
			<div className="card-content">
				<button className="compare-btn" onClick={addCompareHandle}>
					<i className="fa-solid fa-arrow-right-arrow-left"></i>
				</button>
				<Link to={`/product-details/${id}`}>
					<div className="card-img">
						<img src={`/${image}`} alt="Prodotto" />
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