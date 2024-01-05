// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer

const allStars = document.querySelectorAll('.fa-star');

allStars.forEach((star, index) => {
   star.addEventListener('click', () => {
      for (let i = 0; i <= allStars.length; i++){
         if (i <= index) {
            allStars[i].classList.add('active');
          } else {
            allStars[i].classList.remove('active');
          }
      }
   })
})