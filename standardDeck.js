var Deck = require('./deck.js');
var Card = require('./standardCard.js');

const standardDeckSize = 52;
const suits =  ['diamond','heart','club','spade'];
const values = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

var generateCards = function(){
    var cards = [];
    suits.forEach(function(suit){
        values.forEach(function(value){
            if(cards.name == 'J'){
                value = 10;
            }
            cards.push(new Card.StandardCard(value, value, suit ));
        
        }); 
    });
    return cards;
};

function StandardDeck(){
    this.size = standardDeckSize;
    this.cards = generateCards()
};



StandardDeck.prototype = new Deck.Deck();

module.exports.StandardDeck = StandardDeck;
var d = new StandardDeck();

//console.log(d.cards[0]);
//console.log(d.size);
//console.log(d.cards[1]);
module.exports.d = d

