console.log('Welcome to the 456 dice game');
console.log('You need 456, 465, 546, 564, 654 or 645 to win \n')

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * max);
};

const game = () => {

  const firstDice = getRandomInt(1,7);
  const secondDice = getRandomInt(1,7);
  const thirdDice = getRandomInt(1,7);

  //javascript multiple case switch statement
  var winOrLose ="";
  var win = "You Won";
  var lost = "You Lost";
  
  //If else statement for the combitnation to win
  if (firstDice == 4 && secondDice==5 && thirdDice == 6){winOrLose = win}
  else if (firstDice == 4 && secondDice==6 && thirdDice == 5){winOrLose = win}
  else if (firstDice == 5 && secondDice==4 && thirdDice == 6){winOrLose = win}
  else if (firstDice == 5 && secondDice==6 && thirdDice == 4){winOrLose = win}
  else if (firstDice == 6 && secondDice==5 && thirdDice == 4){winOrLose = win}
  else if (firstDice == 6 && secondDice==4 && thirdDice == 5){winOrLose = win}

  else 
    winOrLose = lost;
  
  console.log(winOrLose);
  console.log(firstDice, secondDice, thirdDice);
};

let count=0;

for(let i=0; i < 10; i++){
  console.log("\n");
  count++;
  console.log("Game "+ count +":")
  game();
}