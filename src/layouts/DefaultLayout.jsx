import { Outlet } from "react-router-dom";
// components:
import Header from "../components/Header";
import Footer from "../components/Footer";
// ____________________________________________________
function DefaultLayout() {
	return (
		<>
			<header className="lock-top">
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