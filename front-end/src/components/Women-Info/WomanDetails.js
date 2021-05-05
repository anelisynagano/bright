import { useState, useEffect } from "react";

import "./womenInfo.css";

export default function WomanDetails({ routeProps, data }) {
	const [card, setCard] = useState(null);

	useEffect(() => {
		const card = data.find((card) => card.id === +routeProps.match.params.id);
		if (card) {
			setCard(card);
		}
	}, []);

	return card ? (
		<div className="woman-page">
			<div className="first-column">
				<img className="info-img" src={card.image} alt="" />
			</div>

			<div className="second-column">
				<h1 className="women-name">{card.name}</h1>
				<h3 className="women-title">{card.title}</h3>

				<p className="women-years">{card.years}</p>

				<p className="women-nationality">Nationality: {card.nationality}</p>

				<p className="women-contribution">{card.contribution}</p>
			</div>
		</div>
	) : null;
}
