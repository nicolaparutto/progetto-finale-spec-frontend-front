import { Outlet, useLocation } from "react-router-dom";

// components:
import Header from "../components/partials/header/Header";
import Footer from "../components/partials/footer/Footer";
import ComparePanel from "../components/utilityComponents/ComparePanel";
import NotificationPanel from "../components/utilityComponents/NotificationPanel";

function DefaultLayout() {
	// CSS based on paths:
	const location = useLocation();
	const shadowPaths = [
		"/category",
		"/product-details",
		"/searched-results",
		"/cart",
		"/wishlist",
		"/compare"
	];
	const applyShadow = shadowPaths.some(path => location.pathname.startsWith(path));
	const applyGrayBg = location.pathname === "/wishlist";

	return (
		<>
			<header className={`lock-top ${applyShadow ? "header-shadow" : ""}`}>
				<Header />
			</header >
			<main className={` ${applyGrayBg ? "main-gray-bg" : ""}`}>
				<Outlet />
				<ComparePanel />
				<NotificationPanel />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default DefaultLayout