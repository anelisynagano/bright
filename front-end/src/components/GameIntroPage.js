import { Link } from "react-router-dom";
import "./GameIntroPage.css";

function GameIntroPage() {
  return (
    <div className="page-wrapper">
      <span className="game-rules">
        Learn about some of the women who have made and are still making
        significant contributions to society through a game of memory. Click on
        a first card, then try to find the card’s match. The counter will keep
        track of how many turns to take to find all the matches. Progress up to
        the highest level by clicking the play next button.<br></br> When you’ve
        completed all the levels, why don’t you take a look at the Women page,
        and learn about the stories behind the faces that are now so familiar to
        you?
      </span>
      {/* <h5 className="level-select-text">PLEASE SELECT A LEVEL</h5> */}

      <div className="level-select-container">
        <Link to="/memory/1">
          <button className="level-button">LEVEL 1</button>
        </Link>

        <Link to="/memory/2">
          <button className="level-button">LEVEL 2</button>
        </Link>

        <Link to="/memory/3">
          <button className="level-button">LEVEL 3</button>
        </Link>

        <Link to="/memory/4">
          <button className="level-button">LEVEL 4</button>
        </Link>
      </div>
    </div>
  );
}
export default GameIntroPage;
