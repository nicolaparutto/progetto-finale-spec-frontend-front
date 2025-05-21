function MainMenuHeader({ itemList }) {
	return (
		<div className="main-menu-header">
			<ul>
				{itemList.map((li, i) => (
					<li key={i}><a href="#">{li}</a></li>
				))}
			</ul>
		</div>
	)
}

export default MainMenuHeader