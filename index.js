const codigoSecreto = 'toasty';
let temporizador;
let sequenciaDeCaracteres = '';

// 1 - Sequencia de caracteres
window.addEventListener('keydown', evento => {
  clearTimeout(temporizador);
  const teclaPressionada = evento.key;

  sequenciaDeCaracteres += teclaPressionada;

  if (sequenciaDeCaracteres.includes(codigoSecreto)) {
    document.querySelector('#winScreen').dataset.status = 'active'
    document.querySelector('#audio').play();
    setTimeout(() => document.querySelector('#winScreen').dataset.status = 'hidden', 1000)
    sequenciaDeCaracteres = '';
  }

  console.log(sequenciaDeCaracteres);
  temporizador = setTimeout(function () {
    sequenciaDeCaracteres = '';
  }, 1000);

})
