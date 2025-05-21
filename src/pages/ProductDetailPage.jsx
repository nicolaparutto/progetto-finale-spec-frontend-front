import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
import { useEffect } from "react";
// ____________________________________________________
function ProductDetailPage() {
	const { prodId } = useParams();
	const { fetchProduct, product, addToCart, addToWishlist, addToCompare } = useProductsContext();
	const {
		id,
		category,
		title,
		description,
		brand,
		price,
		image,
		displayDimensions,
		displayPresence,
		releaseYear,
		connectivity
	} = product;

	const prodToadd = { id, title, category, price, image, brand };

	// cart:
	const addCartHandle = () => addToCart(prodToadd);
	// wishlist:
	const addWishlistHandle = () => addToWishlist(prodToadd);

	useEffect(() => {
		fetchProduct(prodId);
	}, []);

	return (
		<section className="container section-spacer">
			<div className="product-details-section">
				<div className="details-img">
					<img src={`/${image}`} alt="product" />
				</div>
				<div className="details-info">
					<div>
						<h2>{title}</h2>
						<div>
							<button>
								<i className="fa-solid fa-circle-info"></i>
							</button>
							<button>
								<i className="fa-solid fa-share-nodes"></i>
							</button>
							<button onClick={() => addToCompare(id)}>
								<i className="fa-solid fa-arrow-right-arrow-left"></i>
							</button>
						</div>
					</div>
					<div>
						<p><span>Dimensione schermo-pollici: </span>{displayDimensions} pollici</p>
						<p><span>Anno di uscita: </span>{releaseYear}</p>
						<p><span>Marca: </span>{brand}</p>
					</div>
				</div>
				<div className="details-buy">
					<div className="buy-price">
						<h2>€ {price?.toFixed(2)}</h2>
						<span>IVA e contributo RAEE inclusi</span>
					</div>
					<div className="buy-type">
						<img src="../utility-img/payments/klarna.webp" alt="" />
						<p>Paga in rate a partire da 50 €/mese, 15,90% TAEG. <span>Scopri di più</span></p>
					</div>
					<div className="buy-wishlist">
						<button className="add-wishlist" onClick={addWishlistHandle}>AGGIUNGI ALLA WISHLIST</button>
						<button className="add-cart" onClick={addCartHandle}>AGGIUNGI AL CARRELLO</button>
					</div>
					<div className="add-service">
						<p><span>VUOI CONFRONTARLO CON UN ALTRO PRODOTTO?</span></p>
						<p><span>Scopri qui</span> tutti i servizi disponibili per il tuo acquisto</p>
					</div>
				</div>
			</div>
			<div className="product-description-section">
				<div className="p-description">
					<h1>Caratteristiche e Descrizione <i className="fa-solid fa-angle-down"></i></h1>
					<p>{description}</p>
				</div>
				<div className="p-specifications">
					<div className="specifications-info">
						<h2>Informazioni Generali</h2>
						<div>
							<p><span>Categoria prodotto: </span>{category}</p>
							<p><span>Marca: </span>{brand}</p>
							<p><span>Anno di uscita: </span>{releaseYear}</p>
							{displayPresence === "SI" && (
								<p><span>Dimensione schermo: </span>{displayDimensions}</p>
							)}
						</div>
					</div>
					<div className="specifications-connectivity">
						<h2>Connettività</h2>
						{connectivity?.map((c, i) => (
							<p key={i}><span>{c}</span><i className="fa-solid fa-check"></i></p>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductDetailPage