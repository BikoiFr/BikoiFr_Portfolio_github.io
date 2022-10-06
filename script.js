// Menu hamburger 

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

const wait = (delay = 0) =>
new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
(typeof elementOrSelector === 'string'
  ? document.querySelector(elementOrSelector)
  : elementOrSelector
).style.display = visible ? 'block' : 'none';

setVisible('.wrapper', false);
setVisible('#loading', true);

document.addEventListener('DOMContentLoaded', () =>
wait(1000).then(() => {
  setVisible('.wrapper', true);
  setVisible('#loading', false);
}));


