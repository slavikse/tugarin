window.addEventListener('keydown', ({ code }) => handle({ code, isPressed: true }));
window.addEventListener('keyup', ({ code }) => handle({ code, isPressed: false }));

const keys = { ArrowUp: 'W', ArrowLeft: 'A', ArrowDown: 'S', ArrowRight: 'D' };
const keysPressed = [];

function handle({ code, isPressed }) {
  const key = keys[code];

  if (key) {
    const keyIndex = keysPressed.indexOf(key);

    if (isPressed) {
      if (keyIndex === -1) {
        keysPressed.push(key);
        addCell(key);
      }
    } else if (keyIndex > -1) {
      keysPressed.splice(keyIndex, 1);
    }
  }
}

function addCell(key) {
  state.shot.addCell({
    direction: key,
    playerSpeed: state.player.directionsSpeeds[key],
  });
}