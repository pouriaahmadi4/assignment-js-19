// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:

const countCounter = document.getElementById("counter");
const heart = countCounter.previousElementSibling;

heart.onclick = makeCount;

function makeCount(){
   // heart.style.color = "red";
   const currentNum = parseInt(countCounter.innerText, 10);
   if (currentNum % 10 === 0){
      colorize();
   }
   countCounter.innerText = currentNum + 1;

   
}

// color randomizer function
function colorize(){
   const randomRed = Math.floor(Math.random()*256);
   const randomGreen = Math.floor(Math.random()*256);
   const randomBlue = Math.floor(Math.random()*256);

   const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
   heart.style.color = randomColor;
}