// Code your solutions in this file
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

countDown(10);

function writeCards(names, eventName) {
  let thankYouCards = [];
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouCards;
}