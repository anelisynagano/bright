import "./Footer.css";

export default function FooterQuote({ quote, name }) {
  return (
    <div className="FooterQuote">
      <p>
        {name} said "{quote}"
      </p>
    </div>
  );
}
