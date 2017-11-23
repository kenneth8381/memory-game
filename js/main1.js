var cards = [    
    {
        rank : "queen",
        suit : "hearts",
        cardImage: "images/queen-of-hearts.png",

    },

    {
        rank : "queen",
        suit :  "diamonds",
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
