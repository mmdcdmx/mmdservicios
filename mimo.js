// ============================================================
// MIMO - Asistente de MMD Servicios
// Incluir en cualquier página: <script src="mimo.js"></script>
// Configurar mensajes: window.MIMO_PAGE = 'mantenimiento'
// ============================================================
(function(){
  var WA = 'https://wa.me/5215517903508';

  // Inject CSS
  var style = document.createElement('style');
  style.textContent = `:root{--azdr:#042C53;--azd:#0C447C;--az:#185FA5;--vd:#0F6E56;--vmd:#9FE1CB;--tx:#2C2C2A;--txs:#5F5E5A}
#mwrap{position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;gap:10px}
#mbtw{position:relative;width:70px;height:70px}
#mnotif{position:absolute;top:-2px;right:-2px;width:20px;height:20px;border-radius:50%;background:#E74C3C;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;font-family:sans-serif;z-index:1}
#mbtn{width:70px;height:70px;border-radius:50%;background:none;border:none;cursor:pointer;padding:0;filter:drop-shadow(0 4px 14px rgba(12,68,124,.45));-webkit-tap-highlight-color:transparent;animation:mfl 3s ease-in-out infinite;display:block}
@keyframes mfl{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
#mbubl{background:var(--azd);color:#fff;border-radius:12px 12px 2px 12px;padding:10px 14px;font-size:13px;line-height:1.4;font-family:'DM Sans',sans-serif;max-width:180px;box-shadow:0 4px 16px rgba(12,68,124,.3);display:none}
#mbubl.show{display:block}
#mchat{width:min(320px,calc(100vw - 32px));background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(12,68,124,.25);border:1px solid #B5D4F4;flex-direction:column;overflow:hidden;display:none}
#mchat.open{display:flex}
.mch{background:var(--azd);padding:12px 14px;display:flex;align-items:center;gap:10px}
.mcav{width:38px;height:38px;border-radius:50%;background:var(--az);border:2px solid var(--vmd);overflow:hidden;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.mcname{font-size:13px;font-weight:600;color:#fff}
.mcstat{font-size:11px;color:var(--vmd);display:flex;align-items:center;gap:3px}
.mcdot{width:6px;height:6px;background:var(--vmd);border-radius:50%;animation:pg 2s ease-in-out infinite}
@keyframes pg{0%,100%{opacity:1}50%{opacity:.4}}
.mccl{background:rgba(255,255,255,.15);border:none;color:#fff;width:26px;height:26px;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;margin-left:auto;-webkit-tap-highlight-color:transparent}
.mcmsgs{padding:12px;display:flex;flex-direction:column;gap:8px;max-height:250px;overflow-y:auto;background:#F0F4FA}
.mcrow{display:flex;gap:7px;align-items:flex-end}
.mcavsm{width:24px;height:24px;border-radius:50%;background:var(--az);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden}
.mcin{background:var(--azd);color:#fff;border-radius:11px 11px 11px 2px;padding:8px 12px;font-size:12px;line-height:1.55;max-width:220px}
.mcout{background:#E1F5EE;color:var(--azdr);border-radius:11px 11px 2px 11px;padding:8px 12px;font-size:12px;line-height:1.55;max-width:220px;margin-left:auto}
.mctyp{display:flex;gap:4px;align-items:center;padding:7px 11px;background:var(--azd);border-radius:11px 11px 11px 2px;width:fit-content}
.mctd{width:5px;height:5px;border-radius:50%;background:var(--vmd);animation:mta 1.2s ease-in-out infinite}
.mctd:nth-child(2){animation-delay:.2s}.mctd:nth-child(3){animation-delay:.4s}
.mcchips{padding:0 12px 8px;display:flex;flex-wrap:wrap;gap:5px;background:#F0F4FA}
.mcchip{background:#fff;border:1px solid #B5D4F4;border-radius:20px;padding:5px 12px;font-size:11px;color:var(--az);text-decoration:none;display:inline-block;font-family:'DM Sans',sans-serif;-webkit-tap-highlight-color:transparent;transition:all .15s}
.mcchip:hover,.mcchip:active{background:var(--az);color:#fff;border-color:var(--az)}
.mcinp{padding:9px 12px;border-top:1px solid #E0E8F5;display:flex;gap:7px;align-items:center;background:#fff}
.mcinp input{flex:1;border:1.5px solid #B5D4F4;border-radius:20px;padding:8px 13px;font-size:12px;font-family:'DM Sans',sans-serif;color:var(--tx);background:#fff;outline:none;-webkit-appearance:none}
.mcinp input:focus{border-color:var(--azd)}
.mcsend{width:34px;height:34px;border-radius:50%;background:var(--azd);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;-webkit-tap-highlight-color:transparent}
.mcsend svg{width:14px;height:14px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.mcfoot{text-align:center;font-size:10px;color:#aaa;padding:5px;background:#fff}
footer{background:#021d36;padding:24px;text-align:center;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap}
footer img{width:30px;height:30px;object-fit:contain;border-radius:50%;background:#fff;padding:2px;opacity:.6}
footer p{font-size:12px;color:rgba(255,255,255,.35)}
footer span{color:var(--vmd)}
@media(max-width:640px){nav{padding:0 14px}.nlinks{display:none}.nlinks.open{display:flex;flex-direction:column;position:fixed;top:64px;left:0;right:0;background:var(--azdr);padding:16px;gap:4px;z-index:199;box-shadow:0 8px 24px rgba(0,0,0,.3)}.nlinks.open a{padding:12px 16px;border-radius:8px;font-size:15px}.nmb{display:flex}.hero{padding:56px 20px 48px}.tgrid{grid-template-columns:repeat(2,1fr)}.ti:nth-child(2){border-right:none}.fr{grid-template-columns:1fr}.hbtns{flex-direction:column;align-items:center}.bh1,.bh2{width:100%;text-align:center}#mwrap{bottom:16px;right:16px}.mdetlay{grid-template-columns:1fr}.mdetr{max-height:none}.catgrid{grid-template-columns:1fr}}

`;
  document.head.appendChild(style);

  // Inject MIMO SVG template
  var tpl = document.createElement('div');
  tpl.innerHTML = '<div id="tpl-mimo" style="display:none" aria-hidden="true"><svg width="22" height="26" viewBox="0 0 240 268"><path d="M120 44 C86 44 62 68 62 94 C62 120 70 140 76 160 C82 180 87 198 98 198 C107 198 110 183 120 183 C130 183 133 198 142 198 C153 198 158 180 164 160 C170 140 178 120 178 94 C178 68 154 44 120 44Z" fill="#185FA5"/><ellipse cx="120" cy="58" rx="48" ry="10" fill="#FFD700"/><path d="M74 58 Q78 26 120 22 Q162 26 166 58Z" fill="#E6B800"/><ellipse cx="96" cy="100" rx="11" ry="12" fill="#fff"/><ellipse cx="134" cy="100" rx="11" ry="12" fill="#fff"/><ellipse cx="97" cy="101" rx="6" ry="7" fill="#042C53"/><ellipse cx="135" cy="101" rx="6" ry="7" fill="#042C53"/><path d="M94 128 Q115 142 136 128" stroke="#9FE1CB" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg></div>';
  document.body.appendChild(tpl.firstChild);

  // Inject MIMO widget HTML
  var wrapDiv = document.createElement('div');
  wrapDiv.innerHTML = `<!-- MIMO FLOTANTE -->
<div id="mwrap">
  <div id="mbubl">Hola! En que puedo ayudarte? &#128522;</div>
  <div id="mchat">
    <div class="mch">
      <div class="mcav"><svg width="22" height="26" viewBox="0 0 240 268"><path d="M120 44 C86 44 62 68 62 94 C62 120 70 140 76 160 C82 180 87 198 98 198 C107 198 110 183 120 183 C130 183 133 198 142 198 C153 198 158 180 164 160 C170 140 178 120 178 94 C178 68 154 44 120 44Z" fill="#185FA5"/><ellipse cx="120" cy="58" rx="48" ry="10" fill="#FFD700"/><path d="M74 58 Q78 26 120 22 Q162 26 166 58Z" fill="#E6B800"/><ellipse cx="96" cy="100" rx="11" ry="12" fill="#fff"/><ellipse cx="134" cy="100" rx="11" ry="12" fill="#fff"/><ellipse cx="97" cy="101" rx="6" ry="7" fill="#042C53"/><ellipse cx="135" cy="101" rx="6" ry="7" fill="#042C53"/><path d="M94 128 Q115 142 136 128" stroke="#9FE1CB" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg></div>
      <div><div class="mcname">MIMO - MMD Servicios</div><div class="mcstat"><span class="mcdot"></span>En linea</div></div>
      <button class="mccl" onclick="mimoCerrar()">&#10005;</button>
    </div>
    <div class="mcmsgs" id="mcmsgs"></div>
    <div class="mcchips">
      <a class="mcchip" href="https://wa.me/5215517903508?text=Hola%20MMD%2C%20quiero%20una%20cotizacion" target="_blank" rel="noopener">Cotización</a>
      <a class="mcchip" href="https://wa.me/5215517903508?text=Hola%20MMD%2C%20quiero%20agendar%20un%20servicio" target="_blank" rel="noopener">Agendar servicio</a>
      <a class="mcchip" href="#unidades" onclick="mimoCerrar()">Ver equipos</a>
      <a class="mcchip" href="tel:5215517903508">Llamar ahora</a>
    </div>
    <div class="mcinp">
      <input type="text" id="mcinput" placeholder="Escribe tu mensaje..." onkeydown="if(event.key==='Enter')mimoEnv()">
      <button class="mcsend" onclick="mimoEnv()"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
    </div>
    <div class="mcfoot">MMD Servicios - 55 1790 3508</div>
  </div>
  <div id="mbtw">
    <div id="mnotif">1</div>
    <button id="mbtn" onclick="mimoToggle()" aria-label="Chat MIMO"><svg width="68" height="76" viewBox="0 0 240 268" xmlns="http://www.w3.org/2000/svg"><path d="M120 232 Q116 244 120 256" stroke="#B5D4F4" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="120" cy="257" r="4" fill="#9FE1CB"/><ellipse cx="120" cy="233" rx="7" ry="5" fill="#0a3d6b"/><path d="M120 44 C86 44 62 68 62 94 C62 120 70 140 76 160 C82 180 87 198 98 198 C107 198 110 183 120 183 C130 183 133 198 142 198 C153 198 158 180 164 160 C170 140 178 120 178 94 C178 68 154 44 120 44Z" fill="#185FA5"/><ellipse cx="120" cy="58" rx="60" ry="12" fill="#FFD700"/><path d="M64 58 Q68 20 120 16 Q172 20 176 58Z" fill="#FFD700"/><path d="M74 58 Q78 26 120 22 Q162 26 166 58Z" fill="#E6B800" opacity=".6"/><path d="M78 46 Q120 40 162 46" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6"/><circle cx="120" cy="17" r="5" fill="#E6B800"/><ellipse cx="96" cy="100" rx="14" ry="15" fill="#fff"/><ellipse cx="134" cy="100" rx="14" ry="15" fill="#fff"/><ellipse cx="97" cy="101" rx="8" ry="9" fill="#0C447C"/><ellipse cx="135" cy="101" rx="8" ry="9" fill="#0C447C"/><ellipse cx="98" cy="102" rx="4.5" ry="5" fill="#042C53"/><ellipse cx="136" cy="102" rx="4.5" ry="5" fill="#042C53"/><circle cx="100" cy="99" r="2.5" fill="#fff"/><circle cx="138" cy="99" r="2.5" fill="#fff"/><path d="M85 87 Q96 82 107 87" stroke="#042C53" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M123 87 Q134 82 145 87" stroke="#042C53" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M94 128 Q115 146 136 128" stroke="#9FE1CB" stroke-width="3.5" fill="none" stroke-linecap="round"/><ellipse cx="78" cy="118" rx="12" ry="8" fill="#378ADD" opacity=".35"/><ellipse cx="152" cy="118" rx="12" ry="8" fill="#378ADD" opacity=".35"/><path d="M68 124 Q50 136 44 148" stroke="#185FA5" stroke-width="11" fill="none" stroke-linecap="round"/><circle cx="42" cy="151" r="9" fill="#185FA5" stroke="#B5D4F4" stroke-width="1.5"/><path d="M18 132 Q27 122 36 132" stroke="#7A4F1A" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="10" y="132" width="50" height="36" rx="5" fill="#CC8822"/><rect x="10" y="148" width="50" height="5" fill="#7A4F1A"/><rect x="30" y="144" width="10" height="12" rx="2" fill="#EF9F27"/><path d="M172 124 Q190 136 196 148" stroke="#185FA5" stroke-width="11" fill="none" stroke-linecap="round"/><circle cx="198" cy="151" r="9" fill="#185FA5" stroke="#B5D4F4" stroke-width="1.5"/><g transform="rotate(-40 198 150)"><rect x="192" y="118" width="10" height="36" rx="5" fill="#888780"/><rect x="188" y="114" width="18" height="11" rx="3" fill="#5F5E5A"/><rect x="190" y="108" width="14" height="9" rx="2" fill="#888780"/></g><rect x="92" y="160" width="56" height="34" rx="6" fill="#fff" stroke="#B5D4F4" stroke-width="1.2"/><rect x="92" y="160" width="56" height="13" rx="6" fill="#0C447C"/><rect x="92" y="166" width="56" height="7" fill="#0C447C"/><text x="120" y="170" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FFD700" letter-spacing="3">MIMO</text></svg></button>
  </div>
</div>
<script>`;
  document.body.appendChild(wrapDiv.firstChild);

  function getMimo() {
    var el = document.getElementById('tpl-mimo');
    return el ? el.innerHTML : '';
  }

  // Page context messages
  var PAGE_MSGS = {
    'mantenimiento': ['¡Hola! Soy MIMO 👋','¿Quieres agendar un mantenimiento preventivo para tus equipos?','Te conecto con MMD ahora mismo.'],
    'reparacion': ['¡Hola! Soy MIMO 👋','¿Tu equipo dental está fallando? MMD responde en menos de 2 horas.','¿Te ayudo a reportar la falla?'],
    'servicio-tecnico': ['¡Hola! Soy MIMO 👋','Soy el asistente técnico de MMD Servicios.','¿En qué equipo necesitas ayuda?'],
    'rayos-x': ['¡Hola! Soy MIMO 👋','¿Necesitas mantenimiento para tu equipo de rayos X dental?','Te ayudo a agendar la visita técnica.'],
    'autoclave': ['¡Hola! Soy MIMO 👋','¿Tu autoclave está dando problemas? ¡MMD puede ayudarte!','¿Te conecto con un técnico especializado?'],
    'compresor': ['¡Hola! Soy MIMO 👋','¿Tu compresor dental necesita revisión?','En MMD somos expertos en compresores odontológicos.'],
    'refacciones': ['¡Hola! Soy MIMO 👋','¿Buscas una refacción específica para tu equipo?','Cuéntame qué necesitas y te ayudo a encontrarla.'],
    'blog': ['¡Hola! Soy MIMO 👋','¿Te interesa saber más sobre el mantenimiento de tus equipos?','En MMD Servicios somos los expertos. ¿Hablamos?'],
    'default': ['¡Hola! Soy MIMO 👋','Soy el asistente de MMD Servicios y Soluciones Integrales.','¿En qué puedo orientarte hoy?']
  };

  var ctx = window.MIMO_PAGE || 'default';
  var msgs = PAGE_MSGS[ctx] || PAGE_MSGS['default'];

  var mimoOpen = false, mimoFirst = true;

  // Show bubble after 2.5s
  setTimeout(function() {
    var b = document.getElementById('mbubl');
    if (b) { b.classList.add('show'); setTimeout(function() { b.classList.remove('show'); }, 5000); }
  }, 2500);

  function mimoToggle() { mimoOpen ? mimoCerrar() : mimoAbrir(); }
  window.mimoToggle = mimoToggle;

  function mimoAbrir() {
    mimoOpen = true;
    var chat = document.getElementById('mchat');
    if (chat) chat.classList.add('open');
    var notif = document.getElementById('mnotif');
    if (notif) notif.style.display = 'none';
    var b = document.getElementById('mbubl'); if (b) b.classList.remove('show');
    if (mimoFirst) {
      mimoFirst = false;
      var m = document.getElementById('mcmsgs');
      if (m) {
        msgs.forEach(function(msg, i) {
          setTimeout(function() {
            var r = document.createElement('div'); r.className = 'mcrow';
            r.innerHTML = '<div class="mcavsm">' + getMimo() + '</div><div class="mcin">' + msg + '</div>';
            m.appendChild(r); m.scrollTop = m.scrollHeight;
            // Add chips after last message
            if (i === msgs.length - 1) {
              setTimeout(function() {
                var chips = document.createElement('div'); chips.className = 'mcchips';
                chips.innerHTML = '<button class="mcchip" onclick="mimoWA(this)">📅 Agendar servicio</button>' +
                  '<button class="mcchip" onclick="mimoWA(this)">🔧 Tengo una urgencia</button>' +
                  '<button class="mcchip" onclick="mimoWA(this)">💬 Hacer una pregunta</button>';
                m.appendChild(chips); m.scrollTop = m.scrollHeight;
              }, 400);
            }
          }, i * 600);
        });
      }
    }
    setTimeout(function() { var m = document.getElementById('mcmsgs'); if (m) m.scrollTop = m.scrollHeight; }, 100);
  }

  function mimoCerrar() {
    mimoOpen = false;
    var chat = document.getElementById('mchat');
    if (chat) chat.classList.remove('open');
  }
  window.mimoCerrar = mimoCerrar;

  window.mimoWA = function(el) {
    var txt = el ? el.textContent.trim() : 'Hola';
    var url = WA + '?text=' + encodeURIComponent('Hola MMD, escribí desde mmdservicios.com.mx\n\n' + txt);
    window.open(url, '_blank');
  };

  function mimoEnv() {
    var inp = document.getElementById('mcinput');
    var txt = inp ? inp.value.trim() : '';
    if (!txt) return;
    inp.value = '';
    var m = document.getElementById('mcmsgs'); if (!m) return;
    var r = document.createElement('div'); r.style.cssText = 'display:flex;justify-content:flex-end';
    r.innerHTML = '<div class="mcout">' + txt + '</div>';
    m.appendChild(r); m.scrollTop = m.scrollHeight;
    var t = document.createElement('div'); t.className = 'mcrow'; t.id = 'mtyp';
    t.innerHTML = '<div class="mcavsm">' + getMimo() + '</div><div class="mctyp"><div class="mctd"></div><div class="mctd"></div><div class="mctd"></div></div>';
    m.appendChild(t); m.scrollTop = m.scrollHeight;
    setTimeout(function() {
      var el2 = document.getElementById('mtyp'); if (el2) el2.remove();
      var r2 = document.createElement('div'); r2.className = 'mcrow';
      r2.innerHTML = '<div class="mcavsm">' + getMimo() + '</div><div class="mcin">¡Gracias! Te conecto con el equipo MMD:</div>';
      m.appendChild(r2);
      var r3 = document.createElement('div'); r3.className = 'mcrow'; r3.style.marginTop = '6px';
      var url = WA + '?text=' + encodeURIComponent('Hola MMD, escribí desde mmdservicios.com.mx\n\nMensaje: ' + txt);
      r3.innerHTML = '<div class="mcavsm">' + getMimo() + '</div><a href="' + url + '" target="_blank" rel="noopener" class="mcchip" style="background:#0F6E56;color:#fff;border-color:#0F6E56;font-weight:600">Enviar por WhatsApp &#128232;</a>';
      m.appendChild(r3); m.scrollTop = m.scrollHeight;
    }, 1200);
  }
  window.mimoEnv = mimoEnv;

  // Enter key in input
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var inp = document.getElementById('mcinput');
      if (document.activeElement === inp) mimoEnv();
    }
  });

  // Update button onclick
  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('mbtn');
    if (btn) btn.onclick = mimoToggle;
    var cl = document.querySelector('.mccl');
    if (cl) cl.onclick = mimoCerrar;
    var send = document.querySelector('.mcsend');
    if (send) send.onclick = mimoEnv;
  });

})();
