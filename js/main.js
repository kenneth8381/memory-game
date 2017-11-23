var cards = [
    {
        rank : "queen",
        suit : "hearts",
        cardImage: "images/queen-of-hearts.png",

    },

    {
        rank : "queen",
        suit :  "diamonds",
        cardImage: "images/queen-of-diamonds.png",

    },
    {
        rank : "king",
        suit :"hearts",
        cardImage:"images/king-of-hearts.png",

    },

    {
        rank : "king",
        suit :"diamonds",
        cardImage:"images/king-of-diamonds.png",

    },];

cardsInPlay = [];

var checkForMatch = function(){
        if(cardsInPlay[0] === cardsInPlay[1]){
        alert("You found the match");
    }else{
        alert("Sorry, please try again");
    }

}

var flipCard = function(){
    var cardId = this.getAttribute("data-id");
    console.log("user flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    this.setAttribute("src", cards[cardId].cardImage);

    if(cardsInPlay.length === 2){
        checkForMatch();

    }

};

var startOver= document.createElement("input");
startOver.setAttribute("type", "button");
startOver.setAttribute("onclick", "reset()");
startOver.setAttribute("value", "Reset");
document.getElementById("game-board").appendChild(startOver);

var reset = function(){
     for(var i = cardsInPlay.length; i > 0; i --){
         cardsInPlay.pop();

    }
 }


var createBoard = function(){
    for( var i = 0; i < cards.length; i+=1){
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
};

createBoard();
