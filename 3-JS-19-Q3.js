// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const closeBtn = document.querySelector('.ri-close-line');

closeBtn.addEventListener('click',()=>{
   const messageBox = document.querySelector('.message');

   // two methods here :
   messageBox.remove();
   // messageBox.style.display = 'none';
})