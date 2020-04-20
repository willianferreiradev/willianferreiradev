const secret = 'ruan';
let timer;
let charactersPressed = '';

window.addEventListener('keydown', event => {
  clearTimeout(timer);
  const keyPressed = event.key;

  charactersPressed += keyPressed;

  if (charactersPressed.includes(secret)) {
    const img = document.querySelector('img');
    img.style.display = 'block';
    charactersPressed = '';

    setTimeout(() => img.style.display = 'none', 1000);
  }

  timer = setTimeout(() => charactersPressed = '', 1000);
});


