export default function WomanCard({ image, name }) {
	return <img className="women-cards" src={image} alt={`${name}`} />;
}
