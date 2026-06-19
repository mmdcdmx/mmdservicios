// ============================================================
// MIMO — Asistente de diagnóstico MMD Servicios
// Versión 3.0 — Reescritura completa
// ============================================================
(function() {
  'use strict';

  var WA = 'https://wa.me/5215517903508';

  // ----------------------------------------------------------
  // 1. INYECTAR CSS
  // ----------------------------------------------------------
  var _style = document.createElement('style');
  _style.textContent = `:root{--azdr:#042C53;--azd:#0C447C;--az:#185FA5;--vd:#0F6E56;--vmd:#9FE1CB;--tx:#2C2C2A;--txs:#5F5E5A}
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
  document.head.appendChild(_style);

  // ----------------------------------------------------------
  // 2. INYECTAR TEMPLATE SVG (MIMO robot)
  // ----------------------------------------------------------
  var _tpl = document.createElement('div');
  _tpl.innerHTML = '<div id="tpl-mimo" style="display:none" aria-hidden="true"><div id="tpl-mimo" style="display:none" aria-hidden="true"><svg width="22" height="26" viewBox="0 0 240 268"><path d="M120 44 C86 44 62 68 62 94 C62 120 70 140 76 160 C82 180 87 198 98 198 C107 198 110 183 120 183 C130 183 133 198 142 198 C153 198 158 180 164 160 C170 140 178 120 178 94 C178 68 154 44 120 44Z" fill="#185FA5"/><ellipse cx="120" cy="58" rx="48" ry="10" fill="#FFD700"/><path d="M74 58 Q78 26 120 22 Q162 26 166 58Z" fill="#E6B800"/><ellipse cx="96" cy="100" rx="11" ry="12" fill="#fff"/><ellipse cx="134" cy="100" rx="11" ry="12" fill="#fff"/><ellipse cx="97" cy="101" rx="6" ry="7" fill="#042C53"/><ellipse cx="135" cy="101" rx="6" ry="7" fill="#042C53"/><path d="M94 128 Q115 142 136 128" stroke="#9FE1CB" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg></div></div>';
  document.body.appendChild(_tpl.firstElementChild);

  // ----------------------------------------------------------
  // 3. INYECTAR WIDGET HTML (chat flotante)
  // ----------------------------------------------------------
  document.body.insertAdjacentHTML('beforeend', `<!-- MIMO FLOTANTE -->
<div id="mwrap">
  <div id="mbubl">Hola! En que puedo ayudarte? &#128522;</div>
  <div id="mchat">
    <div class="mch">
      <div class="mcav"><svg width="22" height="26" viewBox="0 0 240 268"><path d="M120 44 C86 44 62 68 62 94 C62 120 70 140 76 160 C82 180 87 198 98 198 C107 198 110 183 120 183 C130 183 133 198 142 198 C153 198 158 180 164 160 C170 140 178 120 178 94 C178 68 154 44 120 44Z" fill="#185FA5"/><ellipse cx="120" cy="58" rx="48" ry="10" fill="#FFD700"/><path d="M74 58 Q78 26 120 22 Q162 26 166 58Z" fill="#E6B800"/><ellipse cx="96" cy="100" rx="11" ry="12" fill="#fff"/><ellipse cx="134" cy="100" rx="11" ry="12" fill="#fff"/><ellipse cx="97" cy="101" rx="6" ry="7" fill="#042C53"/><ellipse cx="135" cy="101" rx="6" ry="7" fill="#042C53"/><path d="M94 128 Q115 142 136 128" stroke="#9FE1CB" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg></div>
      <div><div class="mcname">MIMO - MMD Servicios</div><div class="mcstat"><span class="mcdot"></span>En linea</div></div>
      <button class="mccl" onclick="mimoCerrar()">&#10005;</button>
    </div>
    <div class="mcmsgs" id="mcmsgs"></div>
    <div class="mcchips" id="mcchipsFijos">
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
<script>`);

  // ----------------------------------------------------------
  // 4. UTILIDADES
  // ----------------------------------------------------------
  function getMimo() {
    var el = document.getElementById('tpl-mimo');
    return el ? el.innerHTML : '';
  }

  function $(id) { return document.getElementById(id); }

  function lockInput(on) {
    var inp = $('mcinput'), snd = document.querySelector('.mcsend');
    if (inp) inp.disabled = on;
    if (snd) snd.disabled = on;
  }

  function scrollBottom() {
    var m = $('mcmsgs');
    if (m) setTimeout(function() { m.scrollTop = m.scrollHeight; }, 60);
  }

  function addMsg(html, side) {
    var m = $('mcmsgs'); if (!m) return;
    var row = document.createElement('div');
    if (side === 'user') {
      row.style.cssText = 'display:flex;justify-content:flex-end;margin:4px 0';
      row.innerHTML = '<div class="mcout">' + html + '</div>';
    } else {
      row.className = 'mcrow';
      row.innerHTML = '<div class="mcavsm">' + getMimo() + '</div><div class="mcin">' + html + '</div>';
    }
    m.appendChild(row);
    scrollBottom();
  }

  function showTyping() {
    var m = $('mcmsgs'); if (!m) return;
    var t = document.createElement('div');
    t.className = 'mcrow'; t.id = 'mtyp';
    t.innerHTML = '<div class="mcavsm">' + getMimo() + '</div>'
      + '<div class="mctyp"><div class="mctd"></div><div class="mctd"></div><div class="mctd"></div></div>';
    m.appendChild(t);
    scrollBottom();
  }

  function hideTyping() {
    var t = $('mtyp'); if (t) t.remove();
  }

  function say(text, delay, cb) {
    setTimeout(function() {
      showTyping();
      setTimeout(function() {
        hideTyping();
        addMsg(text, 'mimo');
        if (cb) cb();
      }, 700);
    }, delay || 0);
  }

  function chips(opts, onClick) {
    var m = $('mcmsgs'); if (!m) return;
    // Remove previous chips
    var prev = document.getElementById('mchips-row');
    if (prev) prev.remove();
    var row = document.createElement('div');
    row.className = 'mcchips'; row.id = 'mchips-row';
    opts.forEach(function(o) {
      var btn = document.createElement('button');
      btn.className = 'mcchip'; btn.textContent = o.txt;
      btn.onclick = function() {
        row.remove();
        lockInput(true);
        addMsg(o.txt, 'user');
        onClick(o);
      };
      row.appendChild(btn);
    });
    m.appendChild(row);
    scrollBottom();
  }

  function textInput(placeholder, onSubmit) {
    var m = $('mcmsgs'); if (!m) return;
    var prev = document.getElementById('minput-row');
    if (prev) prev.remove();
    var row = document.createElement('div');
    row.id = 'minput-row';
    row.style.cssText = 'display:flex;gap:6px;margin:8px 0;padding:0 4px';
    var inp = document.createElement('input');
    inp.type = 'text'; inp.placeholder = placeholder;
    inp.style.cssText = 'flex:1;padding:9px 12px;border:1.5px solid #B5D4F4;border-radius:8px;font-size:13px;outline:none;font-family:DM Sans,sans-serif;color:#2C2C2A';
    var btn = document.createElement('button');
    btn.textContent = 'Enviar ›';
    btn.style.cssText = 'background:#185FA5;color:#fff;border:none;border-radius:8px;padding:9px 14px;font-size:13px;cursor:pointer;font-weight:600;white-space:nowrap;font-family:DM Sans,sans-serif';
    function submit() {
      var val = inp.value.trim();
      if (!val) { inp.focus(); return; }
      row.remove();
      addMsg(val, 'user');
      onSubmit(val);
    }
    btn.onclick = submit;
    inp.onkeydown = function(e) { if (e.key === 'Enter') submit(); };
    row.appendChild(inp); row.appendChild(btn);
    m.appendChild(row);
    setTimeout(function() { inp.focus(); scrollBottom(); }, 80);
  }

  // ----------------------------------------------------------
  // 5. DATOS DEL DIAGNOSTICO
  // ----------------------------------------------------------
  var DX = { equipo: '', falla: '', urgencia: '', zona: '', nombre: '' };

  var OPTS = {
    equipo: [
      { txt: 'Unidad dental',    val: 'Unidad dental' },
      { txt: 'Compresor dental', val: 'Compresor dental' },
      { txt: 'Rayos X dental',   val: 'Rayos X dental' },
      { txt: 'Autoclave',        val: 'Autoclave' },
      { txt: 'Otro equipo',      val: '__otro__' }
    ],
    falla: {
      'Unidad dental': [
        { txt: 'No enciende',                    val: 'No enciende' },
        { txt: 'No sale agua',                   val: 'No sale agua' },
        { txt: 'No tiene aire',                  val: 'No tiene aire' },
        { txt: 'Falla en jeringa triple',        val: 'Falla en jeringa triple' },
        { txt: 'El sillon no sube o baja',       val: 'El sillon no sube o baja' },
        { txt: 'Baja presion en piezas de mano', val: 'Baja presion en piezas de mano' },
        { txt: 'Otro problema',                  val: '__otro__' }
      ],
      'Compresor dental': [
        { txt: 'No enciende',                            val: 'No enciende' },
        { txt: 'Perdio potencia',                        val: 'Perdio potencia' },
        { txt: 'Hace ruido extrano',                     val: 'Hace ruido extrano' },
        { txt: 'Se apaga despues de trabajar un tiempo', val: 'Se apaga despues de trabajar un tiempo' },
        { txt: 'No genera presion',                      val: 'No genera presion' },
        { txt: 'Otro problema',                          val: '__otro__' }
      ],
      'Rayos X dental': [
        { txt: 'No enciende',                 val: 'No enciende' },
        { txt: 'No dispara correctamente',    val: 'No dispara correctamente' },
        { txt: 'Imagen deficiente',           val: 'Imagen deficiente' },
        { txt: 'Problema en controles',       val: 'Problema en controles' },
        { txt: 'Problema en brazo o soporte', val: 'Problema en brazo o soporte' },
        { txt: 'Otro problema',               val: '__otro__' }
      ],
      'Autoclave': [
        { txt: 'No calienta',       val: 'No calienta' },
        { txt: 'No genera presion', val: 'No genera presion' },
        { txt: 'Fuga de vapor',     val: 'Fuga de vapor' },
        { txt: 'No completa ciclo', val: 'No completa ciclo' },
        { txt: 'Error en pantalla', val: 'Error en pantalla' },
        { txt: 'Otro problema',     val: '__otro__' }
      ]
    },
    urgencia: [
      { txt: 'Necesito resolverlo hoy',           val: 'Necesito resolverlo hoy' },
      { txt: 'Me gustaria revisarlo esta semana', val: 'Me gustaria revisarlo esta semana' },
      { txt: 'Quiero una cotizacion primero',     val: 'Quiero una cotizacion primero' }
    ]
  };

  var RESPUESTA_TECNICA = {
    'Compresor dental|Perdio potencia': 'Este problema puede estar relacionado con desgaste interno, sobrecalentamiento o perdida de compresion.',
    'Compresor dental|No enciende': 'Esto puede deberse a falla electrica, proteccion termica activada o problema interno en motor.',
    'Compresor dental|No genera presion': 'Podria existir fuga interna, problema en valvulas o desgaste en cabezales.',
    'Unidad dental|No sale agua': 'Normalmente esto esta relacionado con obstruccion, baja presion o falla interna en lineas.',
    'Unidad dental|No tiene aire': 'Podria existir restriccion neumatica, fuga o falla en alimentacion del sistema.',
    'Unidad dental|El sillon no sube o baja': 'Puede estar relacionado con falla electrica, actuadores o pedal de control.',
    'Autoclave|No calienta': 'Puede existir falla en resistencia, sensores o sistema interno de calentamiento.',
    'Autoclave|Fuga de vapor': 'Esto puede indicar desgaste en sellos o perdida de presion interna.',
    'Rayos X dental|Imagen deficiente': 'Puede existir descalibracion o falla interna en emision.',
    'Rayos X dental|No enciende': 'Podria existir problema electrico o falla interna en componentes.'
  };
  var RESPUESTA_GENERICA = 'Entendido. Nuestro equipo tecnico necesitara revisar este caso mas a detalle para determinar el origen exacto de la falla.';

  // ----------------------------------------------------------
  // 5b. OCULTAR / MOSTRAR BOTONES FIJOS DURANTE EL FLUJO
  // ----------------------------------------------------------
  function ocultarAccionesFijas() {
    var f = document.getElementById('mcchipsFijos');
    if (f) f.style.display = 'none';
  }
  function mostrarAccionesFijas() {
    var f = document.getElementById('mcchipsFijos');
    if (f) f.style.display = 'flex';
  }

  // ----------------------------------------------------------
  // 6. FLUJO DE DIAGNOSTICO
  // ----------------------------------------------------------
  var started = false;

  function start() {
    if (started) return;
    started = true;
    lockInput(true);
    ocultarAccionesFijas();
    say('Hola 👋<br>Soy MIMO, asistente tecnico de MMD Servicios.<br>Te ayudare a identificar tu problema para conectarte mas rapido con nuestro equipo tecnico especializado.', 0, function() {
      say('¿En que equipo necesitas apoyo tecnico?', 600, function() {
        chips(OPTS.equipo, onEquipo);
      });
    });
  }

  function onEquipo(chip) {
    if (chip.val === '__otro__') {
      say('¿Que equipo necesitas revisar? Escribelo aqui:', 300, function() {
        textInput('Ej: lampara de fotocurado, escariador...', function(txt) {
          DX.equipo = txt;
          say('Perfecto 👍 Revisemos tu equipo.', 400, function() {
            say('¿Que problema presenta?', 500, function() {
              textInput('Describe el problema...', function(txt2) {
                DX.falla = txt2;
                askUrgencia();
              });
            });
          });
        });
      });
    } else {
      DX.equipo = chip.val;
      var nombreCorto = chip.val === 'Unidad dental' ? 'unidad' : chip.val === 'Compresor dental' ? 'compresor' : chip.val === 'Rayos X dental' ? 'equipo' : 'autoclave';
      var nombreLargo = chip.val === 'Unidad dental' ? 'unidad dental' : chip.val === 'Compresor dental' ? 'compresor' : chip.val === 'Rayos X dental' ? 'equipo de Rayos X' : 'autoclave';
      say('Perfecto 👍 Revisemos tu ' + nombreCorto + '.', 400, function() {
        say('¿Que problema presenta tu ' + nombreLargo + '?', 500, function() {
          chips(OPTS.falla[DX.equipo], onFalla);
        });
      });
    }
  }

  function onFalla(chip) {
    if (chip.val === '__otro__') {
      say('Cuentame que esta pasando:', 300, function() {
        textInput('Describe el problema...', function(txt) {
          DX.falla = txt;
          askUrgencia();
        });
      });
    } else {
      DX.falla = chip.val;
      askUrgencia();
    }
  }

  function askUrgencia() {
    say('¿Que tan pronto necesitas solucionar este problema?', 400, function() {
      chips(OPTS.urgencia, onUrgencia);
    });
  }

  function onUrgencia(chip) {
    DX.urgencia = chip.val;
    var key = DX.equipo + '|' + DX.falla;
    var respuesta = RESPUESTA_TECNICA[key] || RESPUESTA_GENERICA;
    say(respuesta, 300, function() {
      say('Para continuar necesitamos algunos datos.', 600, function() {
        say('¿En que zona te encuentras?', 500, function() {
          textInput('Ej: CDMX, Estado de Mexico, Guadalajara...', function(txt) {
            DX.zona = txt;
            say('¿Nos compartes tu nombre?', 500, function() {
              textInput('Tu nombre...', function(txt2) {
                DX.nombre = txt2;
                showResumen();
              });
            });
          });
        });
      });
    });
  }

  function showResumen() {
    lockInput(true);
    say('Perfecto ✅<br>Ya tengo toda la informacion necesaria.<br>Voy a conectarte con nuestro equipo tecnico especializado.', 400, function() {
      var m = document.getElementById('mcmsgs'); if (!m) return;

      var msg = 'Hola MMD.\n\nMIMO me ayudo con un diagnostico inicial.\n\nComparto mi informacion:\n\n'
        + 'Equipo: ' + DX.equipo + '\n\n'
        + 'Problema: ' + DX.falla + '\n\n'
        + 'Prioridad: ' + DX.urgencia + '\n\n'
        + 'Zona: ' + DX.zona + '\n\n'
        + 'Nombre: ' + DX.nombre + '\n\n'
        + 'Quedo atento a su apoyo.';

      setTimeout(function() {
        var r1 = document.createElement('div');
        r1.style.cssText = 'margin:10px 0;text-align:center';
        r1.innerHTML = '<a href="' + WA + '?text=' + encodeURIComponent(msg) + '" '
          + 'target="_blank" rel="noopener" '
          + 'style="display:inline-flex;align-items:center;gap:8px;background:#0F6E56;color:#fff;'
          + 'padding:13px 22px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;'
          + 'box-shadow:0 4px 14px rgba(15,110,86,.4)">'
          + '<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'
          + 'Enviar diagnostico a especialista</a>';
        m.appendChild(r1);
        scrollBottom();

        setTimeout(function() {
          var r2 = document.createElement('div');
          r2.style.cssText = 'margin:6px 0;text-align:center';
          r2.innerHTML = '<button onclick="window.mimoReiniciar()" '
            + 'style="background:none;border:1px solid #B5D4F4;border-radius:8px;padding:6px 16px;'
            + 'font-size:12px;color:#185FA5;cursor:pointer;font-family:DM Sans,sans-serif">'
            + '↩️ Nuevo diagnostico</button>';
          m.appendChild(r2);
          scrollBottom();
          // Flujo terminado: volver a mostrar los botones fijos
          mostrarAccionesFijas();
        }, 800);
      }, 500);
    });
  }

  // ----------------------------------------------------------
  // 7. CONTROL DEL CHAT
  // ----------------------------------------------------------
  var isOpen = false;

  function mimoOpen_fn() {
    isOpen = true;
    var c = document.getElementById('mchat'); if (c) c.classList.add('open');
    var n = document.getElementById('mnotif'); if (n) n.style.display = 'none';
    var b = document.getElementById('mbubl'); if (b) b.classList.remove('show');
    start();
  }

  function mimoClose_fn() {
    isOpen = false;
    var c = document.getElementById('mchat'); if (c) c.classList.remove('open');
  }

  function mimoToggle_fn() {
    isOpen ? mimoClose_fn() : mimoOpen_fn();
  }

  // Exponer globalmente (llamado desde onclick en HTML del widget)
  window.mimoToggle = mimoToggle_fn;
  window.mimoCerrar = mimoClose_fn;
  window.mimoReiniciar = function() {
    started = false;
    DX = { equipo: '', falla: '', urgencia: '', zona: '', nombre: '' };
    var m = document.getElementById('mcmsgs'); if (m) m.innerHTML = '';
    lockInput(true);
    ocultarAccionesFijas();
    start();
  };
  // mimoEnv como guardia de seguridad (input fijo del widget queda
  // deshabilitado durante el flujo; el HTML estatico referencia esta
  // funcion en su onclick/onkeydown)
  window.mimoEnv = function() { /* input fijo deshabilitado durante el flujo guiado */ };

  // ----------------------------------------------------------
  // 8. BURBUJA INICIAL (despues de 3 segundos)
  // ----------------------------------------------------------
  setTimeout(function() {
    var b = document.getElementById('mbubl');
    if (b) {
      b.textContent = '¿Tienes un problema con tu equipo? ¡Cuentame! 🔧';
      b.classList.add('show');
      setTimeout(function() { b.classList.remove('show'); }, 6000);
    }
  }, 3000);

  // ----------------------------------------------------------
  // 9. BINDEAR BOTON DE CIERRE (.mccl)
  // ----------------------------------------------------------
  setTimeout(function() {
    var cl = document.querySelector('.mccl');
    if (cl) cl.onclick = mimoClose_fn;
    lockInput(true);
  }, 200);

})();
