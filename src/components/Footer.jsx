// footer data import:
import { footerAgency, footerAcquisitions, footerClients, footerPrivacy } from "../assets/utility-data"

// ____________________________________________________
function Footer() {
	return (
		<>
			<section>
				<div className="footer-bg">
					<div className="footer-content container">
						<div className="footer-logo">
							<div><img src="../utility-img/footer-logo.png" alt="" /></div>
							<div><img src="../utility-img/footer-quality.webp" alt="" /></div>
						</div>
						<div className="footer-agency">
							<h4>L'AZIENDA</h4>
							<ul>
								{footerAgency.map((li, i) => (
									<li key={i}><a href="#">{li}</a></li>
								))}
							</ul>
						</div>
						<div className="footer-aquisitions">
							<h4>PER I TUOI ACQUISTI</h4>
							<ul>
								{footerAcquisitions.map((li, i) => (
									<li key={i}><a href="#">{li}</a></li>
								))}
							</ul>
						</div>
						<div className="footer-clients">
							<h4>AREA CLIENTI</h4>
							<ul>
								{footerClients.map((li, i) => (
									<li key={i}><a href="#">{li}</a></li>
								))}
							</ul>
						</div>
						<div className="footer-privacy">
							<h4>PRIVACY</h4>
							<ul>
								{footerPrivacy.map((li, i) => (
									<li key={i}><a href="#">{li}</a></li>
								))}
							</ul>
						</div>
					</div>
					<div className="footer-socials container">
						<div className="f-shop-search">
							<h5>Trova negozio</h5>
							<form action="#">
								<input type="text" placeholder="Ricerca per città o indirizzo" />
								<button>INVIA</button>
							</form>
						</div>
						<div className="f-socials">
							<h5>Seguici sui social</h5>
							<ul>
								<li><i class="fa-brands fa-facebook-f"></i></li>
								<li><i class="fa-brands fa-instagram"></i></li>
								<li><i class="fa-brands fa-linkedin-in"></i></li>
								<li><i class="fa-brands fa-whatsapp"></i></li>
								<li><i class="fa-brands fa-tiktok"></i></li>
								<li><i class="fa-brands fa-youtube"></i></li>
							</ul>
						</div>
						<div className="f-app">
							<h5>Scarica la nostra app</h5>
							<div>
								<img src="../utility-img/app-store.png" alt="" />
								<img src="../utility-img/google-play.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="footer-info container">
					<div>
						<p>Boolronics Italia SpA. Sede legale Via Roma 12, Milano Partita Iva, Codice Fiscale e iscrizione CCIAA Milano Monza Brianza Lodi n. 12345678. Codice intermediario SDI: ABABABA. Vendite soggette agli Artt. 45 e ss del Codice del Consumo in tema di Diritti dei Consumatori.</p>
					</div>
					<div>
						<ul>
							<li><img src="../utility-img/payments/visa.webp" alt="" /></li>
							<li><img src="../utility-img/payments/verified-by-visa.webp" alt="" /></li>
							<li><img src="../utility-img/payments/mastercard.webp" alt="" /></li>
							<li><img src="../utility-img/payments/american-express.webp" alt="" /></li>
							<li><img src="../utility-img/payments/paypal.webp" alt="" /></li>
							<li><img src="../utility-img/payments/maestro.webp" alt="" /></li>
							<li><img src="../utility-img/payments/klarna.webp" alt="" /></li>
							<li><img src="../utility-img/payments/findomestic.webp" alt="" /></li>
						</ul>
					</div>
				</div>
			</section >
		</>
	)
}

export default Footer