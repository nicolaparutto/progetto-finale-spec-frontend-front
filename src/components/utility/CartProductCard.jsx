function CartProductCard() {
	return (
		<div className="cart-p-card">
			<div className="cart-p-card-intestation">
				<button><i className="fa-regular fa-heart"></i></button>
				<button><i className="fa-solid fa-trash-can"></i></button>
			</div>
			<div className="cart-p-card-content">
				<div className="cart-p-card-img">
					<img src="../products_images/computer_portatili/portatile_1.jpg" alt="immagine" />
				</div>
				<div className="cart-p-card-info">
					<h5>HP</h5>
					<p>HP - Notebook Lorem, ipsum dolor sit amet consectetur adipisicing elitNam dolores</p>
					<div className="cart-quantity-handle">
						<button>-</button>
						<span>1</span>
						<button>+</button>
					</div>
				</div>
				<div className="cart-p-card-price">
					<p>€ 799,00</p>
				</div>
			</div>
		</div>
	)
}

export default CartProductCard