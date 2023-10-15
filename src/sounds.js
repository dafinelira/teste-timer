
let currentAudio = null;

const climateButtons = document.querySelectorAll('.climate button');

climateButtons.forEach((button) => {
  button.addEventListener('click', () => {    
    const audioPath = button.getAttribute('data-audio');
   
    if (currentAudio) {
      currentAudio.pause();
    }
    
    const audio = new Audio(audioPath);
    
    audio.play();
    
    currentAudio = audio;
  });
});



