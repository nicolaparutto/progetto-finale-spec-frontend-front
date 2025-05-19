import { useProductsContext } from "../../context/ProductsContext";
function CartProductCard({ productData }) {
	const { id, title, brand, image, price, quantity, category } = productData;
	const { addToCart, removeFromCart } = useProductsContext();

	const addCartHandle = () => {
		addToCart(
			{ id, title, category, price, image, brand }
		)
	}
	const removeCartHandle = (id, howMany) => {
		if (howMany === "oneProduct") {
			if (quantity === 1) {
				return
			}
			removeFromCart(id, howMany)
		} else if (howMany === "allProducts") {
			removeFromCart(id, howMany)
		}
	}
	return (
		<div className="cart-p-card">
			<div className="cart-p-card-intestation">
				<button><i className="fa-regular fa-heart"></i></button>
				<button onClick={() => removeCartHandle(id, "allProducts")}><i className="fa-solid fa-trash-can"></i></button>
			</div>
			<div className="cart-p-card-content">
				<div className="cart-p-card-img">
					<img src={image} alt="immagine" />
				</div>
				<div className="cart-p-card-info">
					<h5>{brand}</h5>
					<p>{title}</p>
					<div className="cart-quantity-handle">
						<button className={quantity === 1 ? "not-removable" : ""} onClick={() => removeCartHandle(id, "oneProduct")}>-</button>
						<span>{quantity}</span>
						<button onClick={addCartHandle}>+</button>
					</div>
				</div>
				<div className="cart-p-card-price">
					<p>€ {price.toFixed(2)}</p>
				</div>
			</div>
		</div >
	)
}

export default CartProductCard