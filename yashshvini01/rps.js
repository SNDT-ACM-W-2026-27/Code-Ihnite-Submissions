function startRPS(screen) {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const beats = { Rock: 'Scissors', Paper: 'Rock', Scissors: 'Paper' };
  let you = 0, cpu = 0;

  screen.innerHTML = `<h2>Rock Paper Scissors</h2>
    <p>You <b id="rps-you">0</b> &nbsp;:&nbsp; <b id="rps-cpu">0</b> Computer</p>
    <div class="row">${choices.map(c => `<button class="btn" data-c="${c}">${c}</button>`).join('')}</div>
    <p class="status" id="rps-msg">Choose your move!</p>`;

  screen.querySelectorAll('[data-c]').forEach(b => {
    b.onclick = () => {
      const mine = b.dataset.c;
      const theirs = choices[Math.floor(Math.random() * 3)];
      let result = "It's a draw!";
      if (beats[mine] === theirs) { you++; result = 'You win!'; }
      else if (beats[theirs] === mine) { cpu++; result = 'Computer wins!'; }
      screen.querySelector('#rps-you').textContent = you;
      screen.querySelector('#rps-cpu').textContent = cpu;
      screen.querySelector('#rps-msg').innerHTML = `You: ${mine}<br>Computer: ${theirs}<br>${result}`;
    };
  });
}
