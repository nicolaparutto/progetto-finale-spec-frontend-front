import { useMemo } from "react";
import CartProductCard from "../components/cards/CartProductCard";
import { useProductsContext } from "../context/ProductsContext";

function CartPage() {
	const { productsOnCart } = useProductsContext();

	const totalPrice = useMemo(() => {
		return productsOnCart.reduce((price, curr) => price + curr.price * curr.quantity, 0);
	}, [productsOnCart]);

	return (
		<section className="container cart-section section-spacer">
			<div className="cart-products">
				<h1>Il tuo carrello</h1>
				<div className="cart-p-list">
					{productsOnCart.length > 0 ? (
						productsOnCart.map(p => (
							<CartProductCard key={p.id} productData={p} />
						))
					) : (
						<img src="/IMG_utilities/empty-cart.png" alt="" />
					)}
				</div>
			</div>
			<div className="cart-payment">
				<div className="order-promotional-code">
					<h4>Hai un codice promozionale?</h4>
					<div>
						<input type="text" placeholder="Codice promozionale" />
						<button>Applica</button>
					</div>
				</div>
				<div className="order-summary">
					<h3>Riepilogo ordine</h3>
					<div className="order-price">
						<div>
							<p>Prodotti</p><span>€ {totalPrice.toFixed(2)}</span>
						</div>
						<div>
							<p>Servizi</p><span>€ 0,00</span>
						</div>
						<div>
							<p>Subtotale</p><span>€ {totalPrice.toFixed(2)}</span>
						</div>
						<div>
							<p>Consegna</p><span>gratuita</span>
						</div>
						<div className="order-total">
							<p>Totale</p> <span>€ {totalPrice.toFixed(2)}</span>
						</div>
					</div>
					<button className="cart-btn">PROCEDI ALL'ACQUISTO</button>
				</div>
			</div>
		</section>
	)
}

export default CartPage