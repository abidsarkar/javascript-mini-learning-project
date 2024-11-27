//gating the dom info
const domHours = document.querySelector('.hours');
const domMinutes = document.querySelector('.minutes');
const domSeconds = document.querySelector('.seconds');
//get the real time Timing
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2,  
   '0');
    const seconds = now.getSeconds().toString().padStart(2,  
   '0');
  
    domHours.textContent = hours;
    domMinutes.textContent = minutes;
    domSeconds.textContent = seconds;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);