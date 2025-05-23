import "../../assets/CSS/CSS-cards/HomeBanner.css";

function HomeBanner() {
	return (
		<section className="container home-banner">
			<div className="banner-text">
				<span>Star Club</span>
				<p>Scopri come cogliere tutte le opportunità che ti offre Star Club. Entra nel vivo e inizia a premiarti.</p>
				<button className="radius-100">SCOPRI DI PIÙ <i className="fa-solid fa-chevron-right"></i></button>
			</div>
			<div className="banner-image">
				<img src="/IMG_utilities/home_banner-1.png" alt="" />
			</div>
		</section>
	)
}

export default HomeBanner
