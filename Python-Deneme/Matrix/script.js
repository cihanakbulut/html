const CANVAS = document.getElementById("canvas");
const CONTEXT = CANVAS.getContext("2d");
const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;
CANVAS.width = WIDTH;
CANVAS.height = HEIGHT;

const FONT_SIZE = 16;
const COLUMNS = Math.floor(WIDTH / FONT_SIZE);
let drops = [];
drops.length = COLUMNS;
drops.fill(0);

let count = 0;
const words = ' 01';

function animation() {
  requestAnimationFrame(animation);
  if (++count < 3) {
     return;
  }
  count = 0;

  CONTEXT.fillStyle = '#0000000d';
  CONTEXT.fillRect(0, 0, WIDTH, HEIGHT);
  CONTEXT.font = `${FONT_SIZE}px Impact`;
  CONTEXT.fillStyle ="#00cc33";
  for (let i = 0; i < COLUMNS; i++) {
    let index = Math.floor(Math.random() * words.length);
    let x = i * FONT_SIZE;
    let y = drops[i] * FONT_SIZE;
    CONTEXT.fillText(words[index], x, y);
    if(y >= CANVAS.height && Math.random() > 0.99){
      drops[i] = 0;
    }
    drops[i]++;
  }
}

requestAnimationFrame(animation);