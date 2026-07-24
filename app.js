// =========================================================
// --- DATOS DE PROGRESIONES DE JAZZ (Integración JSON) ---
// =========================================================
const DATOS_IMPRO_JAZZ = {
    "titulo": "Progresiones de Jazz para Improvisación Neon",
    "progresiones": [
      {
        "id": "ii_V_I_major",
        "nombre": "ii-V-I Mayor (Bebop Cell)",
        "analisis": "ii7 - V7 - Imaj7",
        "ejemplos": [
          {
            "tono": "C",
            "estructura_canvas": [
              {"compas": 1, "acorde": "Dm7", "escala_sugerida": "Re Dórico"},
              {"compas": 2, "acorde": "G7", "escala_sugerida": "Sol Mixolidio / Sol Alterado"},
              {"compas": 3, "acorde": "Cmaj7", "escala_sugerida": "Do Jónico / Do Lidio"}
            ]
          },
          {
            "tono": "Bb",
            "estructura_canvas": [
              {"compas": 1, "acorde": "Cm7", "escala_sugerida": "Do Dórico"},
              {"compas": 2, "acorde": "F7", "escala_sugerida": "Fa Mixolidio / Fa Lidio b7"},
              {"compas": 3, "acorde": "Bbmaj7", "escala_sugerida": "Sib Jónico"}
            ]
          }
        ]
      },
      {
        "id": "sub_v_i",
        "nombre": "Sustitución Tritonal (Sub V-I)",
        "analisis": "bII7 - Imaj7",
        "ejemplos": [
          {
            "tono": "C",
            "estructura_canvas": [
              {"compas": 1, "acorde": "Db7", "escala_sugerida": "Reb Mixolidio / Reb Lidio b7"},
              {"compas": 2, "acorde": "Cmaj7", "escala_sugerida": "Do Jónico"}
            ]
          }
        ]
      },
      {
        "id": "modal_vamp_dorian",
        "nombre": "Vamp Modal Dórico (estilo So What)",
        "analisis": "im7 - iim7 (repetitivo)",
        "ejemplos": [
          {
            "tono": "Dm Dórico",
            "estructura_canvas": [
              {"compas": 1, "acorde": "Dm7", "escala_sugerida": "Re Dórico (Tono base)"},
              {"compas": 2, "acorde": "Em7", "escala_sugerida": "Re Dórico (Color)"},
              {"compas": 3, "acorde": "Dm7", "escala_sugerida": "Re Dórico"},
              {"compas": 4, "acorde": "Em7", "escala_sugerida": "Re Dórico"}
            ]
          }
        ]
      },
      {
        "id": "ii_V_I_minor",
        "nombre": "ii-V-I Menor (Tonalidad Cm)",
        "analisis": "iiø7 - V7(alt) - imaj7",
        "ejemplos": [
          {
            "tono": "Cm",
            "estructura_canvas": [
              {"compas": 1, "acorde": "Dø7", "escala_sugerida": "Re Locrio #2"},
              {"compas": 2, "acorde": "G7alt", "escala_sugerida": "Sol Alterada / Sol Frigio Dom"},
              {"compas": 3, "acorde": "Cm(maj7)", "escala_sugerida": "Do Menor Melódica"}
            ]
          }
        ]
      }
    ]
};

// --- DATOS MUSICALES DE NOTAS (Mismo Mapeo Extendida G/F) ---
const FRECUENCIAS_NOTAS = {
    'Do2': 65.41, 'Re2': 73.42, 'Mi2': 82.41, 'Fa2': 87.31, 'Sol2': 98.00, 'La2': 110.00, 'Si2': 123.47,
    'Do3': 130.81, 'Re3': 146.83, 'Mib3': 155.56, 'Mi3': 164.81, 'Fa3': 174.61, 'Solb3': 185.00, 'Sol3': 196.00, 'Lab3': 207.65, 'La3': 220.00, 'Sib3': 233.08, 'Si3': 246.94,
    'Do4': 261.63, 'Re4': 293.66, 'Mib4': 311.13, 'Mi4': 329.63, 'Fa4': 349.23, 'Solb4': 370.00, 'Sol4': 392.00,
    'Lab4': 415.30, 'La4': 440.00, 'Sib4': 466.16, 'Si4': 493.88,
    'Do5': 523.25, 'Re5': 587.33, 'Mib5': 622.25, 'Mi5': 659.25, 'Fa5': 698.46, 'Sol5': 783.99, 'La5': 880.00, 'Si5': 987.77,
    'Do6': 1046.50
};

const DATOS_GRAFICOS = {
    'Do6':  {y: 110, clef: 'G', ledger: true,  alt: ''},
    'Si5':  {y: 120, clef: 'G', ledger: false, alt: ''},
    'La5':  {y: 130, clef: 'G', ledger: false, alt: ''},
    'Sol5': {y: 140, clef: 'G', ledger: false, alt: ''},
    'Fa5':  {y: 150, clef: 'G', ledger: false, alt: ''},
    'Mi5':  {y: 160, clef: 'G', ledger: false, alt: ''},
    'Re5':  {y: 170, clef: 'G', ledger: false, alt: ''},
    'Do5':  {y: 180, clef: 'G', ledger: false, alt: ''},
    'Si4':  {y: 190, clef: 'G', ledger: false, alt: ''},
    'Sib4': {y: 190, clef: 'G', ledger: false, alt: 'b'},
    'La4':  {y: 200, clef: 'G', ledger: false, alt: ''},
    'Lab4': {y: 200, clef: 'G', ledger: false, alt: 'b'},
    'Sol4': {y: 210, clef: 'G', ledger: false, alt: ''},
    'Solb4':{y: 210, clef: 'G', ledger: false, alt: 'b'},
    'Fa4':  {y: 220, clef: 'G', ledger: false, alt: ''},
    'Mi4':  {y: 230, clef: 'G', ledger: false, alt: ''}, 
    'Mib4': {y: 230, clef: 'G', ledger: false, alt: 'b'},
    'Re4':  {y: 240, clef: 'G', ledger: false, alt: ''},
    'Do4':  {y: 300, clef: 'G', ledger: true,  alt: ''}, // Do Central
    'Si3':  {y: 310, clef: 'F', ledger: false, alt: ''},
    'Sib3': {y: 310, clef: 'F', ledger: false, alt: 'b'},
    'La3':  {y: 320, clef: 'F', ledger: false, alt: ''},
    'Lab3': {y: 320, clef: 'F', ledger: false, alt: 'b'},
    'Sol3': {y: 330, clef: 'F', ledger: false, alt: ''},
    'Solb3':{y: 330, clef: 'F', ledger: false, alt: 'b'},
    'Fa3':  {y: 340, clef: 'F', ledger: false, alt: ''},
    'Mi3':  {y: 350, clef: 'F', ledger: false, alt: ''},
    'Mib3': {y: 350, clef: 'F', ledger: false, alt: 'b'},
    'Re3':  {y: 360, clef: 'F', ledger: false, alt: ''},
    'Do3':  {y: 370, clef: 'F', ledger: false, alt: ''},
    'Si2':  {y: 380, clef: 'F', ledger: false, alt: ''},
    'La2':  {y: 390, clef: 'F', ledger: false, alt: ''},
    'Sol2': {y: 400, clef: 'F', ledger: false, alt: ''},
    'Fa2':  {y: 410, clef: 'F', ledger: true,  alt: ''},
    'Mi2':  {y: 420, clef: 'F', ledger: true,  alt: ''},
    'Re2':  {y: 430, clef: 'F', ledger: true,  alt: ''},
    'Do2':  {y: 440, clef: 'F', ledger: true,  alt: ''},
};

const POOL_NOTAS_LIGADAS = [
    'Do2', 'Fa2', 'Do3', 'Mib3', 'Fa3', 'Solb3', 'Sol3', 'Sib3', 
    'Do4', 'Mib4', 'Fa4', 'Solb4', 'Sol4', 'Sib4', 'Do5', 'Mib5', 'Sol5'
];

// --- COLORES DE NEÓN (JS) ---
const COLOR_STAFF = '#444';     // Líneas grises oscuras
const COLOR_FUTURE = '#888';    // Notas futuras gris
const COLOR_PLAYED = '#0f0';    // Tocada Verde Neón
const COLOR_TARGET = '#ff9f43';  // Objetivo Naranja Neón
const COLOR_USER = '#00bfff';    // Usuario Azul Neón
const COLOR_IMPRO = '#bf55ec';  // Improvisación Púrpura

// --- VARIABLES DE ESTADO Y UI ---
const canvas = document.getElementById('canvas-musica');
const ctx = canvas.getContext('2d');
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnNewLick = document.getElementById('btn-new-lick');
const btnImpro = document.getElementById('btn-impro');
const statusLabel = document.getElementById('app-status');
const freqLabel = document.getElementById('freq-hz');
const detectedNoteLabel = document.getElementById('nota-detectada');
const targetNoteLabel = document.getElementById('nota-buscada-label');

// Paneles de feedback dinámicos
const panelGame = document.getElementById('game-info');
const panelImpro = document.getElementById('impro-info');
const labelProgImpro = document.getElementById('nombre-progresion');
const labelClaveImpro = document.getElementById('clave-progresion');
const labelEscalaImpro = document.getElementById('escala-sugerida');

let audioContext;
let analyser;
let micStream;
let javascriptNode;
let uiUpdateInterval; 

// Estado del Juego
let modoImproCambios = false;
let lickActual = [];
let indiceNotaObjetivo = 0;
let detectedFrequency = 0;
let detectedNoteName = null;
let cooldownTicks = 0; 

// Estado de Improvisación
let progresionActual = null;
let ejemploActual = null;

// --- ALGORITMO DE DETECCIÓN DE TONO ---
function autoCorrelate(buf, sampleRate) {
    let SIZE = buf.length;
    let MAX_SAMPLES = Math.floor(SIZE/2);
    let rms = 0;
    for (let i=0;i<SIZE;i++) { rms += buf[i]*buf[i]; }
    rms = Math.sqrt(rms/SIZE);
    if (rms<0.015) return -1; 
    let best_offset = -1;
    let best_correlation = 0;
    let foundGoodCorrelation = false;
    let correlations = new Array(MAX_SAMPLES);
    let lastCorrelation=1;
    for (let offset = 0; offset < MAX_SAMPLES; offset++) {
        let correlation = 0;
        for (let i=0; i<MAX_SAMPLES; i++) { correlation += Math.abs((buf[i])-(buf[i+offset])); }
        correlation = 1 - (correlation/MAX_SAMPLES);
        correlations[offset] = correlation;
        if ((correlation>0.9) && (correlation > lastCorrelation)) {
            foundGoodCorrelation = true;
            if (correlation > best_correlation) { best_correlation = correlation; best_offset = offset; }
        } else if (foundGoodCorrelation) {
            let shift = (correlations[best_offset+1] - correlations[best_offset-1]) / correlations[best_offset];  
            return sampleRate / (best_offset + (8*shift));
        }
        lastCorrelation = correlation;
    }
    if (best_correlation > 0.01) { return sampleRate/best_offset; }
    return -1;
}

// --- LÓGICA DE AUDIO ---
async function iniciarMicrofono() {
    try {
        statusLabel.innerText = "(Permiso...)";
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048; 
        let input = audioContext.createMediaStreamSource(micStream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
        input.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        javascriptNode.onaudioprocess = function() {
            let buf = new Float32Array(analyser.fftSize);
            analyser.getFloatTimeDomainData(buf);
            detectedFrequency = autoCorrelate(buf, audioContext.sampleRate);
            if (detectedFrequency > 60 && detectedFrequency < 1200) { 
                detectedNoteName = findNearestNote(detectedFrequency);
            } else {
                detectedFrequency = 0;
                detectedNoteName = null;
            }
        };
        uiUpdateInterval = setInterval(() => {
            if (detectedNoteName) {
                freqLabel.innerText = detectedFrequency.toFixed(1);
                detectedNoteLabel.innerText = `[ ${detectedNoteName} ]`;
            } else {
                freqLabel.innerText = "0.0";
                detectedNoteLabel.innerText = `[ --- ]`;
            }
        }, 100);
        statusLabel.innerText = "Microactivo";
        statusLabel.className = "status-active";
        btnStart.disabled = true;
        btnStop.disabled = false; 
    } catch (err) {
        statusLabel.innerText = "Error Micro";
        statusLabel.className = "status-error";
        console.error("Error micrófono:", err);
        btnStop.disabled = true;
    }
}

async function detenerMicrofono() {
    statusLabel.innerText = "(Cerrando...)";
    if (micStream) { micStream.getTracks().forEach(track => track.stop()); micStream = null; }
    if (javascriptNode) { javascriptNode.onaudioprocess = null; javascriptNode.disconnect(); javascriptNode = null; }
    if (analyser) { analyser.disconnect(); analyser = null; }
    if (audioContext && audioContext.state !== 'closed') { await audioContext.close(); audioContext = null; }
    if (uiUpdateInterval) { clearInterval(uiUpdateInterval); uiUpdateInterval = null; }
    detectedFrequency = 0;
    detectedNoteName = null;
    freqLabel.innerText = "0.0";
    detectedNoteLabel.innerText = `[ --- ]`;
    statusLabel.innerText = "Esperando Micrófono...";
    statusLabel.className = "status-waiting";
    btnStart.disabled = false; 
    btnStop.disabled = true;   
}

function findNearestNote(freq) {
    let nearestNote = null;
    let minDiff = Infinity;
    for (const [note, targetFreq] of Object.entries(FRECUENCIAS_NOTAS)) {
        let diff = Math.abs(freq - targetFreq);
        if (diff <= (targetFreq * 0.03) && diff < minDiff) {
            minDiff = diff; nearestNote = note;
        }
    }
    return nearestNote;
}

// --- GRÁFICOS (Canvas API) ---
function dibujarGrandStaff() {
    ctx.strokeStyle = COLOR_STAFF;
    ctx.lineWidth = 2;
    ctx.fillStyle = '#fff'; 
    ctx.font = '50px serif';
    let xInicio = 80;
    let xFin = canvas.width - 50;
    ctx.beginPath(); ctx.lineWidth = 4; ctx.moveTo(xInicio, 200); ctx.lineTo(xInicio, 400); ctx.stroke();
    ctx.moveTo(xInicio - 10, 200); ctx.lineTo(xInicio, 200); ctx.moveTo(xInicio - 10, 400); ctx.lineTo(xInicio, 400); ctx.stroke();
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) { let y = 200 + (i * 20); ctx.beginPath(); ctx.moveTo(xInicio, y); ctx.lineTo(xFin, y); ctx.stroke(); }
    ctx.fillText("G", xInicio + 10, 200 + 40); 
    for (let i = 0; i < 5; i++) { let y = 320 + (i * 20); ctx.beginPath(); ctx.moveTo(xInicio, y); ctx.lineTo(xFin, y); ctx.stroke(); }
    ctx.fillText("F", xInicio + 15, 320 + 40); 
}

function dibujarLick() {
    if (lickActual.length === 0) return;
    let margenIzca = 200;
    let endX = canvas.width - 100;
    let espacioX = (endX - margenIzca) / (lickActual.length - 1);
    for (let i = 0; i < lickActual.length; i++) {
        let nombreNota = lickActual[i];
        let datos = DATOS_GRAFICOS[nombreNota];
        if (!datos) continue; 
        let x = margenIzca + (i * espacioX);
        let y = datos.y;
        let color;
        let glow = false;
        if (i < indiceNotaObjetivo) { color = COLOR_PLAYED; } 
        else if (i === indiceNotaObjetivo) { color = COLOR_TARGET; glow = true; } 
        else { color = COLOR_FUTURE; }
        ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = glow ? 3 : 2;
        if (glow) { ctx.shadowBlur = 15; ctx.shadowColor = COLOR_TARGET; } 
        else { ctx.shadowBlur = 0; }
        ctx.beginPath(); ctx.ellipse(x, y, 15, 10, 0, 0, 2 * Math.PI); ctx.fill();
        ctx.shadowBlur = 0; 
        if (datos.ledger) {
            ctx.strokeStyle = '#666'; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(x - 25, y); ctx.lineTo(x + 25, y); ctx.stroke();
            ctx.strokeStyle = color; ctx.lineWidth = glow ? 3 : 2;
        }
        let stemUp = true;
        if (datos.clef === 'G') { if (y <= 240) stemUp = false; } 
        else { if (y <= 360) stemUp = false; }
        if (stemUp) { ctx.beginPath(); ctx.moveTo(x + 13, y); ctx.lineTo(x + 13, y - 50); ctx.stroke(); } 
        else { ctx.beginPath(); ctx.moveTo(x - 13, y); ctx.lineTo(x - 13, y + 50); ctx.stroke(); }
        if (datos.alt === 'b') { ctx.fillStyle = color; ctx.font = '30px serif'; ctx.fillText("b", x - 35, y + 10); }
    }
}

function dibujarCambiosJazz() {
    if (!ejemploActual) return;
    
    const estructura = ejemploActual.estructura_canvas;
    const numCompases = estructura.length;
    
    let margenIzca = 150; 
    let endX = canvas.width - 50;
    let anchoTotal = endX - margenIzca;
    let anchoCompas = anchoTotal / numCompases;

    ctx.strokeStyle = COLOR_IMPRO; 
    ctx.lineWidth = 3;
    ctx.fillStyle = '#fff'; 
    ctx.font = 'bold 35px Arial';
    ctx.textBaseline = 'bottom';

    for (let i = 0; i < numCompases; i++) {
        let xCompas = margenIzca + (i * anchoCompas);
        let infoCompas = estructura[i];
        
        ctx.beginPath();
        ctx.moveTo(xCompas, 180); 
        ctx.lineTo(xCompas, 420); 
        ctx.stroke();

        let nombreAcorde = infoCompas.acorde;
        ctx.shadowBlur = 10;
        ctx.shadowColor = COLOR_IMPRO;
        ctx.fillText(nombreAcorde, xCompas + 15, 180); 
        ctx.shadowBlur = 0; 
    }

    ctx.beginPath();
    ctx.moveTo(endX, 180); ctx.lineTo(endX, 420);
    ctx.stroke();
}

// --- FUNCIÓN MODIFICADA: Dibujar la nota real del usuario como una nota completa ---
function dibujarMarcadorUsuario() {
    // Solo dibujar si el micrófono está detectando una nota válida
    if (detectedNoteName && DATOS_GRAFICOS[detectedNoteName]) {
        const datos = DATOS_GRAFICOS[detectedNoteName];
        const y = datos.y;
        
        // --- Calcular Posición Horizontal (X) ---
        let margenIzca = 200;
        let endX = canvas.width - 100;
        let xBase = 0;

        if (modoImproCambios) {
            // En modo impro, aparece en el primer compás como referencia
            xBase = 150 + 20; 
        } else {
            // En modo lectura, sigue horizontalmente a la nota naranja objetivo para comparar
            let espacioX = (endX - margenIzca) / (lickActual.length - 1);
            xBase = margenIzca + (indiceNotaObjetivo * espacioX);
        }

        // --- Configuración de Estilo Neón Azul ---
        ctx.fillStyle = COLOR_USER;
        ctx.strokeStyle = COLOR_USER;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 15; // Brillo de neón
        ctx.shadowColor = COLOR_USER;

        // --- 1. Dibujar Cabeza de la Nota (Óvalo Sólido) ---
        ctx.beginPath();
        ctx.ellipse(xBase, y, 15, 10, 0, 0, 2 * Math.PI);
        ctx.fill();

        // --- 2. Dibujar Líneas adicionales (Ledger lines) fantasma si se requieren ---
        if (datos.ledger) {
            ctx.shadowBlur = 0; // No brillar las líneas grises
            ctx.strokeStyle = 'rgba(100, 100, 100, 0.4)'; // Gris tenue
            ctx.lineWidth = 2;
            ctx.beginPath(); 
            ctx.moveTo(xBase - 25, y); 
            ctx.lineTo(xBase + 25, y); 
            ctx.stroke();
            
            // Restaurar estilos de neón para la plica
            ctx.shadowBlur = 15;
            ctx.strokeStyle = COLOR_USER;
            ctx.lineWidth = 3;
        }

        // --- 3. Dibujar Plica (Palo), calculando dirección estándar ---
        let stemUp = true;
        // Regla: si nota <= 3ª línea del staff (Si4 en G, Re3 en F), palo arriba.
        if (datos.clef === 'G') { 
            if (y <= 240) stemUp = false; // Si4 (240) o más alto = palo abajo
        } else { 
            if (y <= 360) stemUp = false; // Re3 (360) o más alto = palo abajo
        }

        ctx.beginPath();
        if (stemUp) {
            // Palo hacia arriba sale del lado derecho de la cabeza
            ctx.moveTo(xBase + 13, y);
            ctx.lineTo(xBase + 13, y - 50);
        } else {
            // Palo hacia abajo sale del lado izquierdo de la cabeza
            ctx.moveTo(xBase - 13, y);
            ctx.lineTo(xBase - 13, y + 50);
        }
        ctx.stroke();

        // --- 4. Dibujar Alteración (Bemol 'b') si la nota detectada la tiene ---
        if (datos.alt === 'b') {
            ctx.font = '30px serif';
            // Ajustar texto baseline para bemoles gráficos
            ctx.textBaseline = 'alphabetic'; 
            ctx.fillText("b", xBase - 35, y + 10);
            // Restaurar baseline por defecto del canvas
            ctx.textBaseline = 'bottom'; 
        }

        // --- Restablecer sombra final ---
        ctx.shadowBlur = 0; 
    }
}

// --- LÓGICA DE JUEGO (Modo Lectura) ---
function generarLickAleatorio(longitud=8) {
    activarPanelesUI(false);
    if (longitud < 2) longitud = 2;
    lickActual = [];
    lickActual.push(POOL_NOTAS_LIGADAS[Math.floor(Math.random() * POOL_NOTAS_LIGADAS.length)]);
    for (let i = 1; i < longitud; i++) {
        let notaAnterior = lickActual[i-1];
        let idxAnterior = POOL_NOTAS_LIGADAS.indexOf(notaAnterior);
        if (idxAnterior === -1) { lickActual.push(POOL_NOTAS_LIGADAS[Math.floor(Math.random() * POOL_NOTAS_LIGADAS.length)]); continue; }
        let maxJump = 3;
        let minIdx = Math.max(0, idxAnterior - maxJump);
        let maxIdx = Math.min(POOL_NOTAS_LIGADAS.length - 1, idxAnterior + maxJump);
        let allowedIdxPool = [];
        for (let j=minIdx; j<=maxIdx; j++) { if (j !== idxAnterior) allowedIdxPool.push(j); }
        if (allowedIdxPool.length === 0) allowedIdxPool = [idxAnterior];
        lickActual.push(POOL_NOTAS_LIGADAS[allowedIdxPool[Math.floor(Math.random() * allowedIdxPool.length)]]);
    }
    indiceNotaObjetivo = 0;
    updateTargetLabel();
}

function updateTargetLabel() {
    if (lickActual.length > 0) { targetNoteLabel.innerText = `[ ${lickActual[indiceNotaObjetivo]} ]`; }
}

// --- NUEVA LÓGICA DE IMPROVISACIÓN (Modo Cambios Jazz) ---
function iniciarModoImpro() {
    activarPanelesUI(true);
    const progresiones = DATOS_IMPRO_JAZZ.progresiones;
    progresionActual = progresiones[Math.floor(Math.random() * progresiones.length)];
    const ejemplos = progresionActual.ejemplos;
    ejemploActual = ejemplos[Math.floor(Math.random() * ejemplos.length)];
    labelProgImpro.innerText = progresionActual.nombre;
    labelClaveImpro.innerText = ejemploActual.tono;
    labelEscalaImpro.innerText = ejemploActual.estructura_canvas[0].escala_sugerida;
    console.log(`Iniciando Impro: ${progresionActual.nombre} en ${ejemploActual.tono}`);
}

function activarPanelesUI(esImpro) {
    modoImproCambios = esImpro;
    if (esImpro) {
        panelGame.style.display = 'none';
        panelImpro.style.display = 'block';
    } else {
        panelGame.style.display = 'block';
        panelImpro.style.display = 'none';
    }
}

// --- BUCLE PRINCIPAL ( gameLoop ) ---
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    dibujarGrandStaff();
    dibujarMarcadorUsuario(); 
    if (modoImproCambios) {
        dibujarCambiosJazz();
    } else {
        dibujarLick();
        if (cooldownTicks > 0) {
            cooldownTicks--;
        } else {
            if (lickActual.length > 0 && detectedNoteName === lickActual[indiceNotaObjetivo]) {
                indiceNotaObjetivo++;
                cooldownTicks = 25; 
                if (indiceNotaObjetivo >= lickActual.length) { generarLickAleatorio(); } 
                else { updateTargetLabel(); }
            }
        }
    }
    requestAnimationFrame(gameLoop); 
}

// --- EVENTOS ---
btnStart.addEventListener('click', iniciarMicrofono);
btnStop.addEventListener('click', detenerMicrofono); 
btnNewLick.addEventListener('click', () => generarLickAleatorio());
btnImpro.addEventListener('click', iniciarModoImpro);
document.addEventListener('keydown', (event) => { 
    if (event.code === 'Space') { 
        event.preventDefault(); generarLickAleatorio(); 
    }
    if (event.code === 'KeyI') { 
        iniciarModoImpro();
    }
});

// --- INICIALIZACIÓN ---
generarLickAleatorio(); 
requestAnimationFrame(gameLoop);