import { Component } from "react";
import "./Game.css";

class CardView extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.matched === false && this.props.imageUp === false) {
      //carta boca abajo
      this.props.onClick(this.props.id, this.props.image);
    }
  }

  render() {
    let imPath = "";
    if (this.props.imageUp === true) {
      imPath = this.props.image;
    } else {
      imPath = "https://i.imgur.com/fRBk5YK.jpg"; //logo
    }

    let className = "Card";
    if (this.props.matched === true) {
      className = className + " Matched";
    }

    return (
      <img
        className={className}
        src={`${imPath}`}
        alt=""
        onClick={this.onClick}
      />
    );
  }
}

export default CardView;
