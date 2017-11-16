var cards = ["queenOfHearts", "queenOfDiamonds", "kingOfHearts", "kingOfDiamonds"];
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
cardsInPlay.push(cards[0].rank);
var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
};
var flipCard = function(cardId) {
  checkForMatch();
  console.log("User flipped" + " " + cards[1].rank);
  console.log(cards[0].cardImage);
  console.log(cards[2].suit);
  console.log("User flipped king");
  console.log(cards[2].cardImage);
  console.log(cards[2].suit);
};
flipCard(0);
flipCard(2);
