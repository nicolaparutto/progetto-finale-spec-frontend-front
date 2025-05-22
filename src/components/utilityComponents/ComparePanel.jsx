import "../../assets/CSS/CSS-utilityComponents/ComparePanel.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/ProductsContext";

function ComparePanel() {
	const { showComparePanel, productsToCompare } = useProductsContext();

	// manual show/hide panel:
	const [handleShow, setHandleShow] = useState(false);
	const arrowIconDirection = handleShow
		? <i className="fa-solid fa-chevron-left"></i>
		: <i className="fa-solid fa-chevron-right"></i>

	return (
		<div className={`compare-panel-modal ${showComparePanel ? "compareVisible" : ""} ${handleShow ? "handleCompareVisible" : ""}`}>
			<button onClick={() => setHandleShow(!handleShow)} className="show-compare-btn">{arrowIconDirection}</button>
			<div className="compare-panel-content">
				<h4>Prodotti da comparare: </h4>
				<p>{productsToCompare.length}</p>
				<button onClick={() => setHandleShow(true)} className="radius-100"><Link to={"/compare"}>VISUALIZZA</Link></button>
			</div>
		</div>
	)
}

export default ComparePanel