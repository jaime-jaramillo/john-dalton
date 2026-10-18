(() => {
  'use strict';

  const enlaces = [...document.querySelectorAll('[data-semantic-target]')];
  const paneles = [...document.querySelectorAll('[data-semantic-panel]')];

  function seleccionar(id) {
    paneles.forEach(panel => { panel.hidden = panel.id !== id; });
    enlaces.forEach(enlace => {
      if (enlace.dataset.semanticTarget === id) enlace.setAttribute('aria-current', 'true');
      else enlace.removeAttribute('aria-current');
    });
  }

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', evento => {
      if (!document.getElementById(enlace.dataset.semanticTarget)) return;
      evento.preventDefault();
      seleccionar(enlace.dataset.semanticTarget);
    });
  });
  if (enlaces.length) seleccionar(enlaces[0].dataset.semanticTarget);

  const estado = document.getElementById('copy-status');
  document.querySelectorAll('[data-copy-target]').forEach(boton => {
    const codigo = document.getElementById(boton.dataset.copyTarget);
    if (!codigo || !estado) return;
    boton.hidden = false;
    boton.addEventListener('click', async () => {
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Portapapeles no disponible');
        await navigator.clipboard.writeText(codigo.textContent);
        estado.textContent = 'Código copiado. Ya puedes pegarlo en tu editor.';
      } catch {
        // Abrir un archivo local puede impedir usar el portapapeles del navegador.
        const seleccion = window.getSelection();
        if (seleccion) {
          const rango = document.createRange();
          rango.selectNodeContents(codigo);
          seleccion.removeAllRanges();
          seleccion.addRange(rango);
        }
        estado.textContent = 'No se pudo copiar automáticamente. Selecciona el código si hace falta y pulsa Ctrl+C (o Cmd+C en Mac).';
      }
    });
  });
})();
