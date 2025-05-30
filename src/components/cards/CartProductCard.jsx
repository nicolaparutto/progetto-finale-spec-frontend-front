import "../../assets/CSS/CSS-cards/CartProductCard.css";
import { useProductsContext } from "../../context/ProductsContext";

function CartProductCard({ productData }) {
	const { id, title, brand, image, price, quantity, category } = productData;
	const { addToCart, removeFromCart, addToCompare, addToWishlist } = useProductsContext();

	const prodToadd = { id, title, category, price, image, brand };

	// cart:
	const addCartHandle = () => addToCart(prodToadd);
	const removeCartHandle = (id, howMany) => {
		if (howMany === "oneProduct" && quantity === 1) { return }
		removeFromCart(id, howMany);
	}
	// wishlist:
	const addWishlistHandle = () => addToWishlist(prodToadd);

	return (
		<div className="cart-product-card">
			<div className="handle-buttons">
				<button onClick={addWishlistHandle}><i className="fa-regular fa-heart"></i></button>
				<button onClick={() => addToCompare(id)}><i className="fa-solid fa-arrow-right-arrow-left"></i></button>
				<button onClick={() => removeCartHandle(id, "allProducts")}><i className="fa-solid fa-trash-can"></i></button>
			</div>
			<div className="cart-card-content">
				<div className="cart-card-img">
					<img src={image} alt="immagine" />
				</div>
				<div className="cart-card-info">
					<h5>{brand}</h5>
					<p>{title}</p>
					<div className="cart-quantity-handle radius-100">
						<button className={quantity === 1 ? "not-removable" : ""} onClick={() => removeCartHandle(id, "oneProduct")}>-</button>
						<span>{quantity}</span>
						<button onClick={addCartHandle}>+</button>
					</div>
				</div>
				<div className="cart-card-price">
					<p>€ {price.toFixed(2)}</p>
				</div>
			</div>
		</div>
	)
}

export default CartProductCard