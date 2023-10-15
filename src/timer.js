import state from './state.js'
import * as elements from './elements.js'


let timerTimeout = null;
let totalSubtractedSeconds = 0
let isFirstClick = false;

export function countdown(){
  if(state.isRunning) {
  
    return
  }
  
  console.log('iniciou')

  let minutes = Number(elements.minutes.textContent)
  let seconds = Number(elements.seconds.textContent)

  seconds++

  if(seconds > 59) {
    seconds = 0
    minutes++
  }

  if(minutes > 59) {
    minutes = 0
    seconds++
  }

  updateDisplay(minutes, seconds)


  timerTimeout = setTimeout(() => countdown(), 1000);
}


export function updateDisplay (minutes,seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  elements.minutes.textContent = String(minutes).padStart(2,"0")
  elements.seconds.textContent = String(seconds
  ).padStart(2,"0")  
}


export function stop() {
  state.isRunning = false;  

  elements.minutes.textContent = '00';
  elements.seconds.textContent = '00';
  
  clearTimeout(timerTimeout);
    
}

export function low(){
  
    if (!state.isRunning) {      
      let minutes = Number(elements.minutes.textContent)
      let seconds = Number(elements.seconds.textContent)
         
      minutes = Math.max(minutes - 5, 0)                

      updateDisplay(minutes, seconds)
  }
} 


export function high() {  

  if (!state.isRunning) {
    let minutes = Number(elements.minutes.textContent) + 5;
    let seconds = Number(elements.seconds.textContent);
               
       
      
    console.log('+5')
     
    updateDisplay(minutes, seconds);
    
  }
  
}



  


  



