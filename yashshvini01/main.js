const menu = document.getElementById('menu');
const screen = document.getElementById('screen');
const back = document.getElementById('back');
const games = { tictactoe: startTicTacToe, guess: startGuess, target: startTarget, rps: startRPS };
let cleanup = null;

document.querySelectorAll('[data-game]').forEach(btn => {
  btn.onclick = () => {
    menu.hidden = true;
    screen.hidden = false;
    back.hidden = false;
    cleanup = games[btn.dataset.game](screen) || null;
  };
});

back.onclick = () => {
  if (cleanup) cleanup();
  cleanup = null;
  screen.innerHTML = '';
  screen.hidden = true;
  back.hidden = true;
  menu.hidden = false;
};
