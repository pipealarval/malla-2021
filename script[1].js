
document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.classList.add('pendiente');
});

function actualizarEstado() {
  document.querySelectorAll('.ramo').forEach(ramo => {
    const requisitos = ramo.dataset.requisitos;
    if (!requisitos) {
      ramo.classList.remove('pendiente');
      ramo.classList.add('habilitado');
    } else {
      const cumplidos = requisitos.split(',').every(req => {
        const reqTrim = req.trim();
        const ramoReq = Array.from(document.querySelectorAll('.ramo')).find(r => r.dataset.nombre === reqTrim);
        return ramoReq && ramoReq.classList.contains('aprobado');
      });
      if (cumplidos) {
        ramo.classList.remove('pendiente');
        ramo.classList.add('habilitado');
      }
    }
  });
}

document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    if (ramo.classList.contains('habilitado')) {
      ramo.classList.toggle('aprobado');
      actualizarEstado();
    }
  });
});

actualizarEstado();
