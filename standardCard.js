var Card = require('./card.js');

function StandardCard(name, value, suit){
    this.suit = suit,
    this.name = name,
    this.value = value
}

StandardCard.prototype = new Card.Card();

module.exports.StandardCard = StandardCard;