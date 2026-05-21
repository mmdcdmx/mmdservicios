// MMD Servicios - Reseñas verificadas
// Este archivo es independiente de index.html
// Agrega nuevas reseñas aprobadas aquí sin tocar index.html

var CODIGOS_VALIDOS = [
  'MMD-2501','MMD-2502','MMD-2503','MMD-2504','MMD-2505',
  'MMD-2506','MMD-2507','MMD-2508','MMD-2509','MMD-2510',
  'MMD-2511','MMD-2512','MMD-2513','MMD-2514','MMD-2515',
  'MMD-DEMO'
];

var RESENAS_APROBADAS = [
  {
    ini:'DM', nombre:'Dr. Marco A.',
    fecha:'Mayo 2026', servicio:'Mantenimiento preventivo',
    estrellas:5,
    texto:'Excelente servicio. Llegaron puntual, diagnosticaron el problema de mi sillón en minutos y lo dejaron como nuevo. Los recomiendo ampliamente.'
  },
  {
    ini:'DL', nombre:'Dra. Laura P.',
    fecha:'Marzo 2026', servicio:'Compra de equipo',
    estrellas:5,
    texto:'Compré mi autoclave con ellos. Me explicaron todo, el envío llegó perfecto y la garantía directa me da mucha tranquilidad. Excelente atención.'
  },
  {
    ini:'CR', nombre:'C. Ramírez',
    fecha:'Febrero 2026', servicio:'Reparación correctiva',
    estrellas:5,
    texto:'Mi lámpara falló a mitad de jornada. Los llamé y al día siguiente ya estaba reparada. Precio justo y atención inmediata. ¡Muy recomendados!'
  },
  {
    ini:'SC', nombre:'S. Cerón',
    fecha:'Abril 2026', servicio:'Mantenimiento preventivo',
    estrellas:5,
    texto:'Muy buen servicio, el técnico llegó a tiempo y dejó mi equipo funcionando perfectamente. Sin duda los volvería a contratar.'
  }
];

// Esta función renderiza las reseñas aprobadas en la página
function renderResenas() {
  var lista = document.getElementById('resenas-lista');
  if (!lista) return;
  lista.innerHTML = '';
  RESENAS_APROBADAS.forEach(function(r) {
    var estrs = '';
    for (var i=0;i<r.estrellas;i++) estrs += '&#9733;';
    for (var i=r.estrellas;i<5;i++) estrs += '&#9734;';
    var card = document.createElement('div');
    card.className = 'rc';
    card.innerHTML = '<div class="rv"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>Cliente verificado</div>'
      + '<div class="rs2">' + estrs + '</div>'
      + '<p class="rt">"' + r.texto + '"</p>'
      + '<div class="rau"><div class="rav">' + r.ini + '</div><div>'
      + '<div class="rn">' + r.nombre + '</div>'
      + '<div class="rf">' + r.fecha + ' &middot; ' + r.servicio + '</div>'
      + '</div></div>';
    lista.appendChild(card);
  });
}

// Función de publicar reseña actualizada
function pubResenaExt() {
  var nombre = document.getElementById('r-nombre').value.trim();
  var codigo = document.getElementById('r-codigo').value.trim().toUpperCase();
  var tipo = document.getElementById('r-tipo').value;
  var texto = document.getElementById('r-texto').value.trim();
  var msg = document.getElementById('r-msg');
  var starVal = window._starVal || 0;
  if (!nombre || !codigo || !tipo || !texto || !starVal) {
    msg.style.display='block';msg.style.background='#FDEDEC';msg.style.color='#C0392B';
    msg.textContent='Completa todos los campos y selecciona una calificación.'; return;
  }
  if (CODIGOS_VALIDOS.indexOf(codigo) < 0) {
    msg.style.display='block';msg.style.background='#FDEDEC';msg.style.color='#C0392B';
    msg.textContent='Código no válido. Verifica el código que te enviamos.'; return;
  }
  msg.style.display='block';msg.style.background='#E1F5EE';msg.style.color='#0F6E56';
  msg.textContent='¡Gracias! Tu reseña será revisada y publicada pronto.';
  var waMsg = 'Nueva reseña MMD para aprobar:\n\n'
    + 'Nombre: ' + nombre + '\n'
    + 'Código: ' + codigo + '\n'
    + 'Servicio: ' + tipo + '\n'
    + 'Calificación: ' + starVal + '/5\n'
    + 'Comentario: ' + texto;
  setTimeout(function(){
    window.open('https://wa.me/5215517903508?text=' + encodeURIComponent(waMsg), '_blank');
  }, 800);
  ['r-nombre','r-codigo','r-tipo','r-texto'].forEach(function(id){
    var el=document.getElementById(id);if(el)el.value='';
  });
  window._starVal=0;
  document.querySelectorAll('.sb').forEach(function(b){b.classList.remove('on');});
}

window.addEventListener('DOMContentLoaded', function(){
  renderResenas();
  window._starVal = 0;
});
