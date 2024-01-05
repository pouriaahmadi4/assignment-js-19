//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:

const buttonEle = document.querySelector('button');

buttonEle.addEventListener("click", function(){
   buttonEle.textContent = "Added to Cart";
   buttonEle.disabled = true;
   buttonEle.style.backgroundColor = "#0fc044";
   buttonEle.style.border = "2px solid #A9B388 ";
   buttonEle.style.transform = "rotateY(360deg)";
});
