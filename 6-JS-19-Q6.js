//? look at the code in html file and say how we can attach an event to all of the buttons without actually giving it to them and selecting the button tag? write it's code .
//Note: your code should log the text content of the clicked button to the console.

// ! answer ===========================================
// ======== + Extra feature : click limit =============
 const buttonClickCounts = {
   child1: 0,
   child2: 0,
   child3: 0,
 };
 
 document.querySelector('.parent').addEventListener('click', function (event) {
   if (event.target.tagName === 'BUTTON') {
     console.log(event.target.textContent); 
     const buttonClass = event.target.classList[0];
 
     // Check if the button has been clicked more than 4 times in a row
     if (buttonClickCounts[buttonClass] >= 4) {
       alert(`Ok, enough of ${buttonClass} button`);
       // Reset the click count for that button
       buttonClickCounts[buttonClass] = 0;
     }
 
     buttonClickCounts[buttonClass]++;
 
   }
 });