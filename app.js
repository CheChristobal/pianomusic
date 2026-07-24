// --- DATOS MUSICALES (Mapeo G/F Extendida) ---
const FRECUENCIAS_NOTAS = {
    'Do2': 65.41, 'Re2': 73.42, 'Mi2': 82.41, 'Fa2': 87.31,
    'Sol2': 98.00, 'La2': 110.00, 'Si2': 123.47,
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

const POOL_NOTAS_JAZZ = [
    'Do2', 'Fa2', 'Do3', 'Mib3', 'Fa3', 'Solb3', 'Sol3', 'Sib3', 
    'Do4', 'Mib4', 'Fa4', 'Solb4', 'Sol4', 'Sib4', 'Do5', 'Mib5', 'Sol5'
];

// --- COLORES DE NEÓN (JS) ---
const COLOR_STAFF = '#444';     // Líneas grises oscuras
const COLOR_FUTURE = '#888';    // Notas futuras gris
const COLOR_PLAYED = '#0f0';    // Tocada Verde Neón
const COLOR_TARGET = '#ff9f43';  // Objetivo Naranja Neón
const COLOR_USER = '#00bfff';    // Usuario Azul Neón

// --- VARIABLES DE ESTADO Y UI ---
const canvas = document.getElementById('canvas-musica');
const ctx = canvas.getContext('2d');
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnNewLick = document.getElementById('btn-new-lick');
const statusLabel = document.getElementById('app-status');
const freqLabel = document.getElementById('freq-hz');
const detectedNoteLabel = document.getElementById('nota-detectada');
const targetNoteLabel = document.getElementById('nota-buscada-label');

let audioContext;
let analyser;
let micStream;
let javascriptNode;
let uiUpdateInterval; 

let lickActual = [];
let indiceNotaObjetivo = 0;
let detectedFrequency = 0;
let detectedNoteName = null;
let cooldownTicks = 0; 

// NUEVAS VARIABLES DE ESTADO PARA LA FINALIZACIÓN
let lickCompletado = false;
let ticksDelayCompletado = 0; // Tiempo de espera antes de la siguiente frase

// --- ALGORITMO DE DETECCIÓN DE TONO (AUTOCORRELACIÓN) ---
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
            if (lickCompletado) return; // No actualizar texto si ya completó
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
    lickCompletado = false; // Reset estado juego
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

        // LÓGICA DE COLOR ACTUALIZADA PARA FINALIZACIÓN
        if (lickCompletado) {
            // TODAS LAS NOTAS BRILLAN EN VERDE AL FINALIZAR
            color = COLOR_PLAYED;
            glow = true;
        } else if (i < indiceNotaObjetivo) {
            // NOTAS YA TOCADAS CORRECTAMENTE (VERDE FIJO)
            color = COLOR_PLAYED;
            glow = false; 
        } else if (i === indiceNotaObjetivo) {
            // NOTA OBJETIVO ACTUAL (NARANJA BRILLANTE)
            color = COLOR_TARGET;
            glow = true;
        } else {
            // NOTAS FUTURAS (GRIS)
            color = COLOR_FUTURE;
            glow = false;
        }

        ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = glow ? 3 : 2;
        if (glow) { 
            // EL BRILLO NARANJA ES MÁS DIFUSO, EL VERDE FINAL MÁS INTENSO
            ctx.shadowBlur = lickCompletado ? 20 : 15; 
            ctx.shadowColor = color; 
        } 
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

function dibujarMarcadorUsuario() {
    // NO DIBUJAR EL MARCADOR AZUL SI LA FRASE ESTÁ COMPLETADA (ESTAMOS EN PAUSA)
    if (lickCompletado) return;

    if (detectedNoteName && DATOS_GRAFICOS[detectedNoteName]) {
        let datos = DATOS_GRAFICOS[detectedNoteName];
        let y = datos.y;
        let margenIzca = 200;
        let endX = canvas.width - 100;
        let espacioX = (endX - margenIzca) / (lickActual.length - 1);
        let xBase = margenIzca + (indiceNotaObjetivo * espacioX);
        ctx.fillStyle = 'rgba(0, 191, 255, 0.2)'; 
        ctx.strokeStyle = COLOR_USER; ctx.lineWidth = 3; ctx.shadowBlur = 20; ctx.shadowColor = COLOR_USER;
        ctx.beginPath(); ctx.ellipse(xBase, y, 22, 16, 0, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); 
        ctx.shadowBlur = 0; 
        ctx.fillStyle = COLOR_USER;
        ctx.beginPath(); ctx.ellipse(xBase, y, 5, 5, 0, 0, 2 * Math.PI); ctx.fill();
        if (datos.ledger) {
            ctx.strokeStyle = 'rgba(100, 100, 100, 0.4)'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(xBase - 35, y); ctx.lineTo(xBase + 35, y); ctx.stroke();
        }
    }
}

// --- LÓGICA DE JUEGO ---
function generarLickAleatorio(longitud=8) {
    if (longitud < 2) longitud = 2;
    lickActual = [];
    lickActual.push(POOL_NOTAS_JAZZ[Math.floor(Math.random() * POOL_NOTAS_JAZZ.length)]);
    for (let i = 1; i < longitud; i++) {
        let notaAnterior = lickActual[i-1];
        let idxAnterior = POOL_NOTAS_JAZZ.indexOf(notaAnterior);
        if (idxAnterior === -1) { lickActual.push(POOL_NOTAS_JAZZ[Math.floor(Math.random() * POOL_NOTAS_JAZZ.length)]); continue; }
        let maxJump = 3;
        let minIdx = Math.max(0, idxAnterior - maxJump);
        let maxIdx = Math.min(POOL_NOTAS_JAZZ.length - 1, idxAnterior + maxJump);
        let allowedIdxPool = [];
        for (let j=minIdx; j<=maxIdx; j++) { if (j !== idxAnterior) allowedIdxPool.push(j); }
        if (allowedIdxPool.length === 0) allowedIdxPool = [idxAnterior];
        lickActual.push(POOL_NOTAS_JAZZ[allowedIdxPool[Math.floor(Math.random() * allowedIdxPool.length)]]);
    }
    indiceNotaObjetivo = 0;
    lickCompletado = false; // Reset estado al generar nueva
    updateTargetLabel();
    // Reset colores texto UI
    detectedNoteLabel.style.color = COLOR_USER; 
}

function updateTargetLabel() {
    if (lickActual.length > 0) { targetNoteLabel.innerText = `[ ${lickActual[indiceNotaObjetivo]} ]`; }
}

// --- BUCLE PRINCIPAL ( gameLoop ) ---
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    dibujarGrandStaff();
    dibujarMarcadorUsuario(); 
    dibujarLick();

    // LÓGICA DE JUEGO ACTUALIZADA PARA FINALIZACIÓN
    if (lickCompletado) {
        // ESTAMOS EN PAUSA DE FEEDBACK DE ÉXITO
        ticksDelayCompletado--;
        if (ticksDelayCompletado <= 0) {
            generarLickAleatorio(); // PASAR A LA SIGUIENTE FRASE AUTOMÁTICAMENTE
        }
    } else if (cooldownTicks > 0) {
        cooldownTicks--;
    } else {
        // VERIFICAR ACIERTO DE LA NOTA OBJETIVO ACTUAL
        if (lickActual.length > 0 && detectedNoteName === lickActual[indiceNotaObjetivo]) {
            indiceNotaObjetivo++;
            cooldownTicks = 25; 
            
            if (indiceNotaObjetivo >= lickActual.length) {
                // !!! HE ACERTADO TODAS LAS NOTAS !!!
                lickCompletado = true;
                ticksDelayCompletado = 60; // Pausa de 2 segundos a 30 FPS (aprox)
                
                // Visual feedback en etiquetas de texto
                targetNoteLabel.innerText = "¡EXCELENTE!";
                detectedNoteLabel.innerText = "[ FRASE COMPLETADA ]";
                detectedNoteLabel.style.color = COLOR_PLAYED; // Texto Verde Neón
            } else {
                // Aún quedan notas, pasar a la siguiente nota dentro del mismo lick
                updateTargetLabel();
            }
        }
    }
    requestAnimationFrame(gameLoop); 
}

// --- EVENTOS ---
btnStart.addEventListener('click', iniciarMicrofono);
btnStop.addEventListener('click', detenerMicrofono); 
btnNewLick.addEventListener('click', () => generarLickAleatorio());
document.addEventListener('keydown', (event) => { if (event.code === 'Space') { event.preventDefault(); generarLickAleatorio(); } });

// --- INICIALIZACIÓN ---
generarLickAleatorio(); 
requestAnimationFrame(gameLoop);