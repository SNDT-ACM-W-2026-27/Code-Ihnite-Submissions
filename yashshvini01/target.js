function startTarget(screen) {
  const TIME = 20;
  let score, timeLeft, timer, playing = false;

  screen.innerHTML = `<h2>Click the Target</h2>
    <p>Score: <b id="t-score">0</b> &nbsp;·&nbsp; Time: <b id="t-time">${TIME}</b></p>
    <div class="arena" id="t-arena"><button class="target" id="t-dot" aria-label="target"></button></div>
    <p class="status" id="t-msg"></p>
    <button class="btn ghost" id="t-reset">Restart</button>`;
  const arena = screen.querySelector('#t-arena');
  const dot = screen.querySelector('#t-dot');
  const msg = screen.querySelector('#t-msg');

  function moveDot() {
    dot.style.left = Math.random() * (arena.clientWidth - 52) + 'px';
    dot.style.top = Math.random() * (arena.clientHeight - 52) + 'px';
  }
  function reset() {
    clearInterval(timer);
    playing = false;
    score = 0;
    timeLeft = TIME;
    screen.querySelector('#t-score').textContent = 0;
    screen.querySelector('#t-time').textContent = TIME;
    dot.hidden = false;
    msg.textContent = 'Tap the target to start!';
    moveDot();
  }
  function start() {
    playing = true;
    msg.textContent = 'Go go go!';
    timer = setInterval(() => {
      timeLeft--;
      screen.querySelector('#t-time').textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        playing = false;
        dot.hidden = true;
        msg.textContent = `Time's up! Your score: ${score}`;
      }
    }, 1000);
  }
  dot.onclick = () => {
    if (!playing && timeLeft === TIME) start();
    if (!playing) return;
    score++;
    screen.querySelector('#t-score').textContent = score;
    moveDot();
  };
  screen.querySelector('#t-reset').onclick = reset;
  reset();

  return () => clearInterval(timer);
}
