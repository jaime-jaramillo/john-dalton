// Cambiamos la raíz para que todo el texto que usa rem crezca junto.
const controlesTexto = document.querySelector('[data-font-controls]');

if (controlesTexto) {
  let porcentaje = 100;
  const minimo = 100;
  const maximo = 150;
  const reducir = controlesTexto.querySelector('[data-font-action="decrease"]');
  const aumentar = controlesTexto.querySelector('[data-font-action="increase"]');
  const estado = controlesTexto.querySelector('[data-font-status]');

  function ajustarTexto(accion) {
    if (accion === 'increase') porcentaje = Math.min(maximo, porcentaje + 10);
    if (accion === 'decrease') porcentaje = Math.max(minimo, porcentaje - 10);
    if (accion === 'reset') porcentaje = 100;

    document.documentElement.style.fontSize = porcentaje + '%';
    reducir.disabled = porcentaje === minimo;
    aumentar.disabled = porcentaje === maximo;
    estado.textContent = 'Tamaño del texto: ' + porcentaje + ' por ciento.';
  }

  controlesTexto.addEventListener('click', (evento) => {
    const boton = evento.target.closest('[data-font-action]');
    if (boton) ajustarTexto(boton.dataset.fontAction);
  });

  reducir.disabled = true;
  controlesTexto.hidden = false;
}
