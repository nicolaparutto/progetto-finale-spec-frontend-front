import { useProductsContext } from "../../context/ProductsContext"
import { Link } from "react-router-dom";
import { useState } from "react";
function ComparisonPanel() {
	const { showComparePanel, productsToCompare } = useProductsContext();
	const [handleShow, setHandleShow] = useState(false);
	const arrowDIrection = () => {
		if (handleShow) {
			return <i className="fa-solid fa-chevron-left"></i>
		} else {
			return <i className="fa-solid fa-chevron-right"></i>
		}
	}
	return (
		<div className={`compare-panel-modal ${showComparePanel && "compareVisible"} ${handleShow && "handleCompareVisible"}`}>
			<button onClick={() => setHandleShow(!handleShow)} className="show-compare-btn">{arrowDIrection()}</button>
			<div className="compare-panel-content">
				<h4>Prodotti da comparare: </h4>
				<p>{productsToCompare.length}</p>
				<button onClick={() => setHandleShow(true)}><Link to={"/comparison"}>VISUALIZZA</Link></button>
			</div>
		</div>
	)
}

export default ComparisonPanel