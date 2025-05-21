import { useProductsContext } from "../../context/ProductsContext";

function NotificationPanel() {
	const { showPanel } = useProductsContext();

	return (
		<div className={`notification-panel ${showPanel.show ? "show" : "hide"}`}>
			{showPanel.content}
		</div>
	)
}

export default NotificationPanel