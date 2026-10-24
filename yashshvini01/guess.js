function startGuess(screen) {
  let secret, tries, over;

  screen.innerHTML = `<h2>Number Guessing</h2>
    <p>Pick a number from 1 to 100</p>
    <input class="field" id="g-in" type="number" min="1" max="100" inputmode="numeric" placeholder="?">
    <button class="btn" id="g-go">Guess</button>
    <p class="status" id="g-msg"></p>
    <button class="btn ghost" id="g-reset">New game</button>`;
  const input = screen.querySelector('#g-in');
  const msg = screen.querySelector('#g-msg');

  function reset() {
    secret = Math.floor(Math.random() * 100) + 1;
    tries = 0;
    over = false;
    input.value = '';
    msg.textContent = 'I picked a number. Go!';
    input.focus();
  }
  function guess() {
    if (over) return;
    const n = Number(input.value);
    if (!Number.isInteger(n) || n < 1 || n > 100) {
      msg.textContent = 'Type a whole number from 1 to 100';
      return;
    }
    tries++;
    if (n === secret) {
      msg.textContent = `Yes! It was ${secret}. You took ${tries} tries!`;
      over = true;
    } else {
      msg.textContent = `${n} is too ${n < secret ? 'low' : 'high'}. Tries: ${tries}`;
    }
    input.value = '';
    input.focus();
  }
  screen.querySelector('#g-go').onclick = guess;
  screen.querySelector('#g-reset').onclick = reset;
  input.onkeydown = e => { if (e.key === 'Enter') guess(); };
  reset();
}
