// Code your solutions in this file
const cards = ["Lisa", "Kaitlin", "Jan"]; 

function writeCards(names) {
    for (let i = 0; i < cards.length; i++) {
      console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
  
    return cards;
  }

let countdown = 10;

while (countdown > 0) {
    console.log(countdown --);
} 
