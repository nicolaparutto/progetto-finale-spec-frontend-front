function FooterColumn({ className = "", title, itemList }) {

	return (
		<div className={`footer-column ${className}`} >
			<h4>{title}</h4>
			<ul>
				{itemList.map((li, i) => (
					<li key={i}><a href="#">{li}</a></li>
				))}
			</ul>
		</div >
	)
}

export default FooterColumn