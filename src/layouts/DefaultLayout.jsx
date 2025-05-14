import { Outlet } from "react-router-dom"

// ____________________________________________________
function DefaultLayout() {
	return (
		<>
			<header>
				header
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				footer
			</footer>
		</>
	)
}

export default DefaultLayout