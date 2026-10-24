function startTicTacToe(screen) {
  const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  let board, over;

  screen.innerHTML = `<h2>Tic-Tac-Toe</h2>
    <div class="grid three" id="ttt"></div>
    <p class="status" id="ttt-msg"></p>
    <button class="btn" id="ttt-reset">Play again</button>`;
  const grid = screen.querySelector('#ttt');
  const msg = screen.querySelector('#ttt-msg');
  const cells = [];
  for (let i = 0; i < 9; i++) {
    const b = document.createElement('button');
    b.className = 'cell';
    b.onclick = () => playerMove(i);
    grid.appendChild(b);
    cells.push(b);
  }
  screen.querySelector('#ttt-reset').onclick = reset;

  function reset() {
    board = Array(9).fill('');
    over = false;
    cells.forEach(c => { c.textContent = ''; c.disabled = false; c.className = 'cell'; });
    msg.textContent = 'Your turn (X)';
  }
  function place(i, mark) {
    board[i] = mark;
    cells[i].textContent = mark;
    cells[i].classList.add(mark === 'X' ? 'x' : 'o');
    cells[i].disabled = true;
  }
  function winner() {
    for (const [a, b, c] of LINES) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) return [board[a], [a, b, c]];
    }
    return null;
  }
  function checkEnd() {
    const w = winner();
    if (w) {
      w[1].forEach(i => cells[i].classList.add('win'));
      msg.textContent = w[0] === 'X' ? 'You win!' : 'Computer wins!';
      over = true;
    } else if (board.every(Boolean)) {
      msg.textContent = "It's a draw!";
      over = true;
    }
    if (over) cells.forEach(c => c.disabled = true);
    return over;
  }
  function findSpot(mark) {
    for (const [a, b, c] of LINES) {
      const line = [board[a], board[b], board[c]];
      if (line.filter(m => m === mark).length === 2 && line.includes('')) return [a, b, c][line.indexOf('')];
    }
    return -1;
  }
  function computerMove() {
    let i = findSpot('O');
    if (i < 0) i = findSpot('X');
    if (i < 0) {
      const free = board.map((m, k) => m ? -1 : k).filter(k => k >= 0);
      i = free[Math.floor(Math.random() * free.length)];
    }
    place(i, 'O');
    checkEnd();
    if (!over) msg.textContent = 'Your turn (X)';
  }
  function playerMove(i) {
    if (over || board[i]) return;
    place(i, 'X');
    if (checkEnd()) return;
    msg.textContent = 'Thinking...';
    setTimeout(computerMove, 400);
  }
  reset();
}
