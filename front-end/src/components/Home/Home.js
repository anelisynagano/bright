import { useState } from "react";
import { ImageMap } from "@qiuz/react-image-map";

import LandingPageMenu from "./LandingPageMenu";

import "./Home.css";

const HomePage = () => {
	const [showMenu, setShowMenu] = useState(false);

	const img =
		"https://i.imgur.com/Mol6ysu.jpg";
	const mapArea = [
		{
			width: "23.448625180897245%",
			height: "23.615541922290383%",
			left: "22.431259044862518%",
			top: "4.498977505112485%",
		},
	];
	const onMapClick = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div>
			<div className="body-cover">
				{showMenu ? <LandingPageMenu /> : ""}

				<ImageMap
					className="collage-click"
					src={img}
					map={mapArea}
					onMapClick={onMapClick}
				/>
			</div>

			{/* MOBILE VERSION. Desktop CSS all the display are = none. They are activated again in mediaquery. */}

			<div>
				<img
					className="mobile-pic"
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618422713/Bright%20Flash/Women-bright-flash_ozg2mg.jpg"
					alt=""
				/>
			</div>
			<h1 className="mobile-title">MOBILE TITLE</h1>
			<p className="mobile-intro">
				The contributions of women to the advancement of science, the
				improvement of society and the care of our communities have always been
				there. Too often they are forgotten or overlooked in history books. The
				statement may be silent, but the effect is loud: our children are still
				being raised with an internalised impression than men can achieve more
				than women.
			</p>
			<br />
			<p className="mobile-intro">
				The goal of this website is to give women back their rightful place in
				history. We have selected just a few amongst many pioneers, and would
				love to receive contributions to grow our list. By playing a game of
				memory cards, we hope that you will learn about and remember the names
				and contributions of these pioneering women.
			</p>
			<div className="button-container">
				<button className="play-now">Play Memory Game</button>
			</div>
		</div>
	);
};

export default HomePage;
