// =========================================================
// CONFIGURACIÓN — editá estos valores para tu evento
// =========================================================
const EVENT_DATE = new Date('2026-11-27T19:15:30'); // año-mes-día T hora
const GUEST_NAME = null; // ej: "Familia Pérez" — o null para dejar "Vos"

// =========================================================
// 1) Nombre del invitado (opcional, vía ?para=NombreInvitado en la URL)
// =========================================================
const params = new URLSearchParams(window.location.search);
const nameFromUrl = params.get('para');
const guestNameEl = document.getElementById('guest-name');
if (nameFromUrl) {
  guestNameEl.textContent = decodeURIComponent(nameFromUrl);
} else if (GUEST_NAME) {
  guestNameEl.textContent = GUEST_NAME;
}

// =========================================================
// 2) Abrir el sobre
// =========================================================
const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelope-screen');
const invitation = document.getElementById('invitation');

envelope.addEventListener('click', () => {
  if (envelope.classList.contains('open')) return;
  envelope.classList.add('open');

  // Esperamos a que termine la animación de apertura y hacemos la transición
  setTimeout(() => {
    envelopeScreen.style.transition = 'opacity 0.5s ease';
    envelopeScreen.style.opacity = '0';
    setTimeout(() => {
      envelopeScreen.style.display = 'none';
      invitation.hidden = false;
      // Disparamos el reveal del primer panel inmediatamente
      revealObserver.observe(document.querySelector('.hero-panel'));
      document.querySelector('.hero-panel').classList.add('is-visible');
    }, 500);
  }, 900);
});

// =========================================================
// 3) Reproductor de audio (clic para escuchar)
// =========================================================
const audioBtn = document.getElementById('audio-btn');
const bgAudio = document.getElementById('bg-audio');

audioBtn.addEventListener('click', () => {
  if (bgAudio.paused) {
    bgAudio.play().catch(() => {
      // Si no hay archivo de audio cargado, evitamos un error molesto en consola
      console.warn('No se pudo reproducir el audio. Verificá la ruta en audio/musica.mp3');
    });
    audioBtn.setAttribute('aria-pressed', 'true');
  } else {
    bgAudio.pause();
    audioBtn.setAttribute('aria-pressed', 'false');
  }
});

// =========================================================
// 4) Cuenta regresiva
// =========================================================
const weekdays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

document.getElementById('event-weekday').textContent = weekdays[EVENT_DATE.getDay()];
document.getElementById('event-day').textContent = EVENT_DATE.getDate();
document.getElementById('event-month').textContent = months[EVENT_DATE.getMonth()];

const cdDays = document.getElementById('cd-days');
const cdHours = document.getElementById('cd-hours');
const cdMinutes = document.getElementById('cd-minutes');
const cdSeconds = document.getElementById('cd-seconds');

function pad(n) { return String(n).padStart(2, '0'); }

function updateCountdown() {
  const now = new Date();
  let diff = EVENT_DATE - now;

  if (diff <= 0) {
    cdDays.textContent = '00';
    cdHours.textContent = '00';
    cdMinutes.textContent = '00';
    cdSeconds.textContent = '00';
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);
  const seconds = Math.floor(diff / 1000);

  cdDays.textContent = pad(days);
  cdHours.textContent = pad(hours);
  cdMinutes.textContent = pad(minutes);
  cdSeconds.textContent = pad(seconds);
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// =========================================================
// 5) Animación al hacer scroll (fade + slide up por sección)
// =========================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
