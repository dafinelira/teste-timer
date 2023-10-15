import state from './state.js'
import * as timer from './timer.js'

const stopButton = document.getElementById('stop')
const highButton = document.getElementById('highButton')
const lowButton = document.getElementById('lowButton')

let currentAudio = null;
let timerTimeout = null;


export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
}

export function stop(){

 stopButton.addEventListener('click', () => {

  timer.stop();
  
})} 
  
  
export function high(){  

  highButton.addEventListener('click', () => {
    
timer.high()      
  
})}

export function low(){
  lowButton.addEventListener('click', () => {

  timer.low()
  
})}







