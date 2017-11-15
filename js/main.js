var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
cardsInPlay.push(cards[0]);
var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
};
var flipCard = function(cardId) {
  checkForMatch();
  console.log("User flipped" + " " + cards[0])
  console.log("Up and running!");
};
flipCard(0);
flipCard(2);
console.log("User flipped queen");
console.log("User flipped king");
