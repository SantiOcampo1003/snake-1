let snake = [0, 1, 2];
const size = 10;
const box = document.getElementById('snake-box');
const playButton = document.getElementById('play-button');
const interval = 1000;
let divs;
let idInterval;

playButton.addEventListener('click', () => {
  startGame();
});

function createBox() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement('div');
      box.appendChild(div);
    }
  }
}

function drawSnake() {
  divs = document.querySelectorAll('.box div');
  snake.forEach((index) => divs[index].classList.add('snake'));
}

function moveSnake() {
  const tail = snake.shift();
  divs[tail].classList.remove('snake');
  const head = snake[snake.length - 1] + 1;
  if (isCollision(head)) {
    alert('game over');
    clearGame();
    return;
  }
  snake.push(head);
  divs[head].classList.add('snake');
}

function isCollision(index) {
  console.log(index % size);
  if (index % size === 0) {
    return true;
  }
  return false;
}

function startGame() {
  clearGame();
  idInterval = setInterval(() => {
    moveSnake();
  }, interval);
}

function clearGame() {
  snake = [0, 1, 2];
  box.innerHTML = '';
  clearInterval(idInterval);
  createBox();
  drawSnake();
}

clearGame();