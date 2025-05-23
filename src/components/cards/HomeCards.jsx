import "../../assets/CSS/CSS-cards/HomeCards.css";

function HomeCards() {
	return (
		<section className='container section-spacer three-cards-section'>
			<div className="three-card">
				<div>
					<img src="/IMG_utilities/home_card-1.webp" alt="card" />
				</div>
				<div>
					<span>FINO AL 2 GIUGNO</span>
					<h2>Consegna Gratuita</h2>
					<button>ACQUISTA ORA <i className="fa-solid fa-chevron-right"></i></button>
				</div>
			</div>
			<div className="three-card">
				<div>
					<img src="/IMG_utilities/home_card-2.webp" alt="card" />
				</div>
				<div>
					<span>FINO AL 4 GIUGNO</span>
					<h2>Scopri i prodotti</h2>
					<button>SCOPRI DI PIÙ <i className="fa-solid fa-chevron-right"></i></button>
				</div>
			</div>
			<div className="three-card">
				<div>
					<img src="/IMG_utilities/home_card-3.webp" alt="card" />
				</div>
				<div>
					<span>SPECIALITÀ DI CATEGORIA</span>
					<h2>Scopri i prodotti</h2>
					<button>SCOPRI DI PIÙ <i className="fa-solid fa-chevron-right"></i></button>
				</div>
			</div>
		</section>
	)
}

export default HomeCards