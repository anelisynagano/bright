import "./Home.css";

export default function Menu() {
	return (
		<div>
			<div className="menu-wrapper">
				<div className="dropdown-menu">
					<a href="./">
						<img
							className="item-image"
							src="https://res.cloudinary.com/octavian2111/image/upload/v1618563337/home_sjwzt4.png"
							alt="Home"
						/>
					</a>
					<a href="./introgame">
						<img
							className="item-image"
							src="https://res.cloudinary.com/octavian2111/image/upload/v1618563337/memory_dki5bx.png"
							alt="Memory Card Game"
						/>
					</a>
					<a href="./women">
						<img
							className="item-image"
							src="https://res.cloudinary.com/octavian2111/image/upload/v1618563338/women_vvwlpg.png"
							alt="About the women in the game"
						/>
					</a>
					<a href="./about">
						<img
							className="item-image"
							src="https://res.cloudinary.com/octavian2111/image/upload/v1618563327/about_fungkw.png"
							alt="About the app developers"
						/>
					</a>
					<a href="./contact">
						<img
							className="item-image"
							src="https://res.cloudinary.com/octavian2111/image/upload/v1618563337/contact_ocppoz.png"
							alt="Contact the app developers"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
