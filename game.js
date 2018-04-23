var Deck = require('./deck.js');
var Card = require('./standardCard.js');
var StandardDeckModule = require('./standardDeck.js');
var p = require('./players.js');

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
var players = [p.players[0], p.players[1], p.players[2], p.players[3], dealer];
//Deal Hands
var deck = StandardDeckModule.d.cards;
var dealtCard = deck.shift();


function dealCards() {
    for (i = 0; i < 2; i++) {
        for (x = 0; x < p.players.length; x++) {
            var dealtCard = deck.shift();
            
            if(i==1 && x==4){
                p.players[x].hand.unshift(dealtCard);
                p.players[x].total += p.players[x].hand[0].value + p.players[x].hand[1].value;
                console.log(p.players[4].name + " hand is " + p.players[4].hand[0].value + " and ?");    
            }else if(i==1){
                p.players[x].hand.unshift(dealtCard);
                p.players[x].total +=p.players[x].hand[0].value + p.players[x].hand[1].value;
                console.log(p.players[x].name + " hand is " + p.players[x].hand[0].name +" and " + p.players[x].hand[1].name + 
            " for a total of "+ p.players[x].total);
                if(p.players[x].hand[0].name == 'A' && p.players[x].hand[1].name =='A'){
                    p.players[x].hand[1].value =1;
                    p.players[x].total = 12;
            }

        }else{
            p.players[x].hand.unshift(dealtCard);
            }
    }
}
}
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


//card values:
for(x=0; x< deck.length; x++){
    if(deck[x].name =='A'){
        if(p.players.total >21){
        deck[x].value = 1;
        }else{
            deck[x].value =11;
        }
    }
else if (deck[x].name =='J' || deck[x].name == 'Q'|| deck[x].name =="K"){
    deck[x].value = 10;
}
};
function cardsReturned() {
    for (x = 0; x < p.players.length; x++) {
        //unsure of why i need the +1 below, for loop to work.
        for (i = 0; i <= p.players[x].hand.length + 1; i++) {
            var returnCard = p.players[x].hand.pop();
            deck.push(returnCard);
            p.players[x].total -= returnCard.value;
        }
    }
};
function strategy() {
    
    for (x = 0; x < p.players.length -1; x++) {
        var dealtCard =deck.shift();
        if(p.players[x].total>= 12 && p.players[x].total <= 16 && p.players[4].hand[0].value >= 7){
            p.players[x].hit(deck);
            }
        else if(p.players[x].total <= 12) {
            p.players[x].hit(deck);

            if(p.players[x].total <= 12){
                console.log(deck.length);
                
            }
            
   }
        else{
            console.log(p.players[x].name + " stays with a total of "+p.players[x].total);
        }
    }
};
function dealerStrategy(){
    if(dealer.total < 16){
   p.players[4].hit(deck);
    }
    else {
        console.log("Dealer stays with "+ dealer.hand[0].name+" and " + dealer.hand[1].name);
    }
};
function evaluateCards(){
    for(x =0; x<p.players.length-1; x++){
        if(p.players[x].total > 21){
            p.players[x].bank -= 15;
            dealer.bank +=15;
            console.log(p.players[x].name +" is bust. He now has $"+p.players[x].bank);
        }
        else if(p.players[x].total == dealer.total){
            console.log(p.players[x].name + " pushes");
        }
        else if(p.players[x].total > dealer.total){
            p.players[x].bank += 15;
            dealer.bank -=15;
            console.log(p.players[x].name + " is a winner. He now has $"+p.players[x].bank);
             }
        else{
            p.players[x].bank -= 15;
            dealer.bank +=15;
            console.log(p.players[x].name + " loses. He now has $"+p.players[x].bank);
        }
    }
}


var rounds = 14;
for(y=1;y <= rounds; y++){
    console.log("Round " + y);
    console.log(deck.length);
    shuffle(deck);
    dealCards();
    strategy();
    dealerStrategy();
    evaluateCards();
    console.log(deck);
    cardsReturned(); 
    console.log(p.players[3].hand);
    console.log(deck.length);
};

//losing 4 cards after every round for some reason.
