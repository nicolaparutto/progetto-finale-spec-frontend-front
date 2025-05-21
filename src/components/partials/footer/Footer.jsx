import {
	footerAgency,
	footerAcquisitions,
	footerClients,
	footerPrivacy,
	footerPayments
} from "../../../data/constants/footerData";
import FooterColumn from "./FooterColumn";
function Footer() {
	return (
		<>
			<section>
				<div className="footer-bg">
					<div className="main-footer container">
						<div className="footer-column col-logo">
							<div>
								<img src="/IMG_utilities/footer-logo.png" alt="Logo" />
							</div>
							<div>
								<img src="/IMG_utilities/footer-quality.webp" alt="Quality" />
							</div>
						</div>
						<FooterColumn title="L'AZIENDA" className="col-agency" itemList={footerAgency} />
						<FooterColumn title="PER I TUOI ACQUISTI" itemList={footerAcquisitions} />
						<FooterColumn title="AREA CLIENTI" itemList={footerClients} />
						<FooterColumn title="PRIVACY" className="col-privacy" itemList={footerPrivacy} />
					</div>
					<div className="footer-socials container">
						<div className="f-shop-search">
							<h5>Trova negozio</h5>
							<form className="radius-100">
								<input type="text" placeholder="Ricerca per città o indirizzo" className="radius-100" />
								<button className="radius-100">INVIA</button>
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
							{footerPayments.map((method, i) => (
								<li key={i}><img src={method} alt="payment method" /></li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}

export default Footer