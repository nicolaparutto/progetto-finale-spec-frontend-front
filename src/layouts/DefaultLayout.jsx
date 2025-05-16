import { Outlet, useLocation } from "react-router-dom";
// components:
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";

// ____________________________________________________
function DefaultLayout() {
	const location = useLocation()
	const applyShadow = location.pathname.startsWith("/category/");

	return (
		<>
			<header className={`lock-top ${applyShadow ? "header-shadow" : ""}`}>
				<Header />
			</header >
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default DefaultLayout