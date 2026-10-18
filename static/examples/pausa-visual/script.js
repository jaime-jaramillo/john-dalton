(() => {
  'use strict';

  document.querySelectorAll('[data-timer]').forEach(contenedor => {
    const duracion = Number(contenedor.dataset.duration) * 1000;
    const pantalla = contenedor.querySelector('[data-timer-display]');
    const estado = contenedor.querySelector('[data-timer-status]');
    const alternar = contenedor.querySelector('[data-timer-toggle]');
    const reiniciar = contenedor.querySelector('[data-timer-reset]');
    const controles = contenedor.querySelector('[data-timer-controls]');
    if (!Number.isFinite(duracion) || duracion <= 0 || !pantalla || !estado || !alternar || !reiniciar || !controles) return;

    let restante = duracion;
    let fin = 0;
    let intervalo = null;
    let enMarcha = false;
    let terminado = false;

    function mostrarTiempo() {
      const segundos = Math.ceil(restante / 1000);
      pantalla.textContent = `${String(Math.floor(segundos / 60)).padStart(2, '0')}:${String(segundos % 60).padStart(2, '0')}`;
    }

    function detener() {
      clearInterval(intervalo);
      intervalo = null;
      enMarcha = false;
    }

    function actualizar() {
      // La hora de llegada evita sumar el retraso de una pestaña en segundo plano.
      restante = Math.max(0, fin - Date.now());
      mostrarTiempo();
      if (restante === 0) {
        detener();
        terminado = true;
        alternar.textContent = 'Volver a iniciar';
        estado.textContent = 'Cuenta terminada. Puedes hacer una pausa y apartar la mirada de la pantalla.';
      }
    }

    alternar.addEventListener('click', () => {
      if (enMarcha) {
        actualizar();
        if (!enMarcha) return;
        detener();
        alternar.textContent = 'Reanudar';
        estado.textContent = 'Temporizador en pausa.';
        return;
      }

      if (terminado) {
        restante = duracion;
        terminado = false;
      }
      fin = Date.now() + restante;
      enMarcha = true;
      alternar.textContent = 'Pausar';
      estado.textContent = 'Temporizador en marcha.';
      mostrarTiempo();
      intervalo = setInterval(actualizar, 250);
    });

    reiniciar.addEventListener('click', () => {
      detener();
      restante = duracion;
      terminado = false;
      alternar.textContent = 'Iniciar';
      estado.textContent = 'Temporizador reiniciado. Listo para iniciar.';
      mostrarTiempo();
    });

    mostrarTiempo();
    controles.hidden = false;
    estado.textContent = 'Listo para iniciar.';
  });
})();
