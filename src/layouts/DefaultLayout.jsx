import { Outlet, useLocation } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
// components:
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import ComparisonPanel from "../components/utility/ComparisonPanel";
import NotificationPanel from "../components/utility/NotificationPanel";

// ____________________________________________________
function DefaultLayout() {
	const location = useLocation()
	const applyShadow =
		location.pathname.startsWith("/category") ||
		location.pathname.startsWith("/product-details") ||
		location.pathname.startsWith("/searched-results") ||
		location.pathname === ("/comparison") ||
		location.pathname === ("/wishlist") ||
		location.pathname === ("/cart");

	const applyGrayBg = location.pathname === ("/wishlist");

	return (
		<>
			<header className={`lock-top ${applyShadow && "header-shadow"}`}>
				<Header />
			</header >
			<main className={` ${applyGrayBg && "main-gray-bg"}`}>
				<Outlet />
				<ComparisonPanel />
				<NotificationPanel />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default DefaultLayout