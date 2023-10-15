const buttons = document.querySelectorAll('#controlsclimate button[data-audio]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    
    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove('active');
      }
    });
    
    button.classList.toggle('active');
  });
});

 

 