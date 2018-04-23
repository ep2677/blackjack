var names = ["Huey","Dewey","Lewey","Scrooge","Dealer"];
//hand should be an empty array so a card can be pushed into it.
var players = [];

function createPlayer() {
    players =[];
    for(i=0; i<names.length; i++){
       // var dealtCard = deck.shift();
        var player ={
            name: names[i],
            hand: [],
            total: 0,
            bank: 200,
            hit: function(deck){
                var dealtCard = deck.shift();
                this.hand.unshift(dealtCard);
                this.total += dealtCard.value;
                console.log(this.name + " hits and recieves the " +dealtCard.name +
                " of "+ dealtCard.suit + ". Total is now "+ this.total);
            }};
            players.push(player);
        }
        return players;
    };

var p = new createPlayer();
module.exports.players = players;
module.exports.players = p;