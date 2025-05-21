import {
	footerAgency,
	footerAcquisitions,
	footerClients,
	footerPrivacy
} from "../../../data/constants/footerData";

function Footer() {
	return (
		<>
			<section>
				<div className="footer-bg">
					<div className="footer-content container">
						<div className="footer-logo">
							<div><img src="/IMG_utilities/footer-logo.png" alt="Logo" /></div>
							<div><img src="/IMG_utilities/footer-quality.webp" alt="Quality" /></div>
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
								<li><i className="fa-brands fa-facebook-f"></i></li>
								<li><i className="fa-brands fa-instagram"></i></li>
								<li><i className="fa-brands fa-linkedin-in"></i></li>
								<li><i className="fa-brands fa-whatsapp"></i></li>
								<li><i className="fa-brands fa-tiktok"></i></li>
								<li><i className="fa-brands fa-youtube"></i></li>
							</ul>
						</div>
						<div className="f-app">
							<h5>Scarica la nostra app</h5>
							<div>
								<img src="/IMG_utilities/app-store.png" alt="" />
								<img src="/IMG_utilities/google-play.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="footer-info container">
					<div>
						<p>Boolronics Italia SpA. Sede legale Via Roma 12, Milano Partita Iva, Codice Fiscale e iscrizione CCIAA Milano Monza Brianza Lodi n. 12345678. Codice intermediario SDI: ABABABA. Vendite soggette agli Artt. 45 e ss del Codice del Consumo in tema di Diritti dei Consumatori.</p>
						<h4>© 2025 Boolronics. All rights reserved - Made by Nicola Parutto.</h4>
					</div>
					<div>
						<ul>
							<li><img src="/IMG_utilities/payments/visa.webp" alt="" /></li>
							<li><img src="/IMG_utilities/payments/verified-by-visa.webp" alt="" /></li>
							<li><img src="/IMG_utilities/payments/american-express.webp" alt="" /></li>
							<li><img src="/IMG_utilities/payments/mastercard.webp" alt="" /></li>
							<li><img src="/IMG_utilities/payments/paypal.webp" alt="" /></li>
							<li><img src="/IMG_utilities/payments/maestro.webp" alt="" /></li>
							<li><img src="/IMG_utilities/payments/klarna.webp" alt="" /></li>
							<li><img src="/IMG_utilities/payments/findomestic.webp" alt="" /></li>
						</ul>
					</div>
				</div>
			</section >
		</>
	)
}

export default Footer