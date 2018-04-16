var names = ["Huey","Dewey","Lewey","Scrooge","Dealer"];
//hand should be an empty array so a card can be pushed into it.
var players = [];

function createPlayer() {
    var hand =[];
    players =[];
    for(i=0; i<names.length; i++){
        var player ={
            name: names[i],
            hand: hand,
            total: 0,
            bank: 200};
        players.push(player);
        }
        return players;
    };

var p = new createPlayer();
module.exports.players = players;
module.exports.players = p;