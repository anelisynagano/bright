import shuffle from "shuffle-array";

class MemoryCards {
  constructor(data, selectedLevel) {
    // new parameter in the constructor
    this.cards = [];
    this.data = data;
    this.level = selectedLevel; // level as object property
    this.NUM_IMAGES = 4; // default level 1 number of images
  }

  generateCardSetData() {
    //
    // Generate a set of cards with image pairs
    //
    this.cards = [];

    if (this.level === "2") {
      // set number images depending on the level
      this.NUM_IMAGES += 2;
    } else if (this.level === "3") {
      this.NUM_IMAGES += 5;
    } else if (this.level === "4") {
      this.NUM_IMAGES += 10;
    }

    if (this.data && this.data.length > 0) {
      for (let i = 0; i < 2 * this.NUM_IMAGES; i++) {
        let card1 = {
          id: i + 1,
          image: this.data[i].image,
          imageUp: false,
          matched: false,
        };
        let card2 = {
          id: i + 2,
          image: this.data[i].image,
          imageUp: false,
          matched: false,
        };
        this.cards.push(card1);
        this.cards.push(card2);
        i++;
      }
      shuffle(this.cards);
    }
  }
  getCard(id) {
    for (let i = 0; i < 2 * this.NUM_IMAGES; i++) {
      if (this.cards[i].id === id) {
        return this.cards[i];
      }
    }
  }

  flipCard(id, imageUp) {
    this.getCard(id).imageUp = imageUp;
  }

  setCardAsMatched(id, matched) {
    this.getCard(id).matched = matched;
  }

  cardsHaveIdenticalImages(id1, id2) {
    if (this.getCard(id1).image === this.getCard(id2).image) {
      return true;
    } else {
      return false;
    }
  }
}

export default MemoryCards;
