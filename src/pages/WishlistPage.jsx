import "../assets/CSS/CSS-pages/WishlistPage.css";
import { useProductsContext } from "../context/ProductsContext";
// components:
import ProductCard from "../components/cards/ProductCard";

function WishlistPage() {
	const { productsOnWishlist } = useProductsContext();

	return (
		<section className="container wishlist-section">
			<div className="wishlist-sidebar">
				<div>
					<i className="fa-solid fa-box-open"></i>
				</div>
				<div>
					<i className="fa-regular fa-heart"></i>
				</div>
			</div>
			<div className="wishlist-list">
				<h1>Wishlist</h1>
				<div className="p-list">
					{productsOnWishlist.length > 0 ? (
						productsOnWishlist.map(p => (
							<ProductCard key={p.id} productData={p} wishListbtnText={"RIMUOVI DALLA WISHLIST"} />
						))
					) : (
						<div className="empty-wishlist">
							<p>La lista è vuota.</p>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default WishlistPage