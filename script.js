window.addEventListener("keydown" ,(event) => {
   let code = event.keyCode;
   let keyElement = document.querySelector(`div[data-key="${code}"]`);

   if(!keyElement) {
   	  return;
   }

   let audio = document.querySelector(`audio[data-key="${code}"]`);
   audio.currentTime = 0; //na ovaj nacin ce zvuk da se cuje svaki put kada pritisnemo bez prekida
   audio.play();


});