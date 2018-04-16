
var Deck = require('./deck.js');
var Card = require('./standardCard.js');
var StandardDeckModule = require('./standardDeck.js');
var p = require('./players.js');

//assign a  var to be exported, = the actual name of the variable or function.;


// The Duck Tales guys are going to the casino and 
// they want to simulate 20 games of black jack.  Each
// players starts with 200 dollars.  Each game is $15.  If
// they lose all their money they can no longer play.  Simulate
// the outcome.  At the end output the player and how much
// they each won / lost.


// RULES
// Number of Decks between 1-8
// Dealer Hits on 16 and Below
// 


const _numberOfDecks = 1; // 1-8 max
const _rounds = 20;
var dealer =p.players[4];
var Huey = p.players[0];
var Dewey = p.players[1];
var Lewey = p.players[2];
var Scrooge = p.players[3];

//Deal Hands
var deck = StandardDeckModule.d.cards;

var total = 0;
function dealHands(){
for(i =0; i <2; i++){
    for(x=0; x < p.players.length; x++){ 
        var dealtCard = deck.shift(); 
        //console.log(dealtCard);   
        if (i ==1){
                p.players[x].hand.unshift(dealtCard);
                console.log(p.players[x].name + "'s hand is " +(p.players[x].hand[0]).name + " and " + (p.players[x].hand[1]).name);
                p.players[x].total += p.players[x].hand[0].value + p.players[x].hand[1].value;
                console.log(p.players[x].name + " total is " + p.players[x].total);
            }
            else{
                p.players[x].hand.unshift(dealtCard);
            }
    }
};
    
};
function hitOrStay2 (total){
    dealtCard = deck.shift();
    for(x = 0; x<p.players.length; x++){
        if(dealer.total == 21){
            return console.log("Dealer wins");
        }
        else if(p.players[x].total ===21){
            return console.log(p.players[x].name + " is the winner.");

        }
        else if(p.players[0].total < 16 || p.players[0].total < dealer.total){
            console.log(p.players[0].name + " hits.");
            //console.log(p.players[0].hand.unshift(dealtCard));
            p.players[0].total += dealtCard.value;
            console.log(p.players[0].name +"s total is "+p.players[0].total);
            if(p.players[0].total < p.players[x].total){
                return hitOrStay();
            }else{
                return hitOrStay();
            }
        }
        else if(p.players[x].total <16 || p.players[x].total < p.players[(x-1)].total && p.players[(x-1)].total <=21)
   {
            console.log(p.players[x].name + " hits.");
            console.log(p.players[x].hand.unshift(dealtCard));
            p.players[x].total += dealtCard.value;
            if(p.players.total < p.players[(x-1)].total){
                return hitOrStay();
            }else{
                console.log(p.players[x].name +" stays");
            }
    
        }
    }

};
function hitOrStay3(){
    dealtCard = deck.shift();
    for(x =0; x<p.players.length; x++){
        if(dealer.total ==21){
            return console.log("Dealer is the winner");
        }
        else if(dealer.total > 21){
            console.log("Dealer is bust");
            
            // player with the highest score under 21 is the winner.
        
        }
        else if(p.players[x].total < 16 || p.players[x].total < dealer.total){
            console.log(p.players[x].name +" hits");
            p.players[x].hand.unshift(dealtCard);
            console.log(p.players[x].name +" recieved "+ dealtCard.value);
            p.players[x].total += dealtCard.value;
            console.log(p.players[x].name +" total is now "+p.players[x].total);
            if(p.players[x].total > 21){
                console.log(p.players[x].name + " is busted");
            }
            else if(p.players[x].total>dealer.total && p.players[x].total <21){
                return hitOrStay3();
            }
            else{
                 console.log(p.players[x].name + " stays");
                 return hitOrStay3();
                
            }
        }
    }
}

function hitOrStay(){
    dealtCard = deck.shift();
for (x = 0; x < p.players.length; x++) {
    if (p.players[x].total > 21) {
        console.log(p.players[x].name + " is busted");
    } 
    else if(p.players[x].total == 21) {
       return  console.log(p.players[x].name + " is the winner");
    }else {
        if (p.players[x].total < 16 || p.players[x - 1].total > p.players[x].total) {
            console.log(p.players[x].name + " hits");
            p.players[x].hand.unshift(dealtCard);
            p.players[x].total += dealtCard.value;
            console.log(p.players[x].name + " recieved a " + dealtCard.name);
            console.log(p.players[x].name + " total is " + p.players[x].total);
            if(p.players[x].total > 21){
                console.log(p.players[x].name + " is busted");
            }
        } else if(p.players[x].total > 21){
            console.log("busted")
        }
        else if(p.players[x].total==21 && dealer.total != 21){
           return console.log(p.player[x].name + " is the winner");

        }
        else {
            console.log(p.players[x].name + " stays");
        }
    }

}
};
function clear() {
    for (i = 0; i < p.players.length; i++) {
        for (x = 0; x < p.players[i].hand[x]; x++) {

            var returnCards = p.players[i].hand.shift();
            console.log(returnCards);
            if (returnCards === undefined) {
                i++;
            }
            else {
                deck.push(returnCards);
            }
        }
    }
};
function shuffle(deck){
    var m = deck.length, t, i;
    while (m) {
        i = Math.floor(Math.random()* m--);

        t = deck[m];
        deck[m] = deck[i];
        deck[i] = t;
    }
    return deck;
    
}
//var total = p.players.hand.value;

//card values:
for(x=0; x< deck.length; x++){
    if(deck[x].name =='A'){
        //add conditional here
        deck[x].value = 11;
    }
else if (deck[x].name =='J' || deck[x].name == 'Q'|| deck[x].name =="K"){
    deck[x].value = 10;
}
};

console.log(dealer.hand);
shuffle(deck);
dealHands();
hitOrStay3();