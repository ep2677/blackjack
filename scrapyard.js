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

players.array.forEach(player => {
    
});