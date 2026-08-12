# Invitación digital animada — Guía paso a paso

Este proyecto recrea el estilo de invitación del video: sobre que se abre,
scroll con nombre/edad, audio, cuenta regresiva, dirección y confirmación
por WhatsApp. Es HTML + CSS + JS puro: no necesitás instalar nada para
que funcione.

## 1. Abrí el proyecto en VSCode
1. Abrí VSCode.
2. `Archivo > Abrir carpeta` y elegí la carpeta `invitacion`.
3. Deberías ver 3 archivos: `index.html`, `style.css`, `script.js` (y esta guía).

## 2. Instalá la extensión "Live Server"
1. En VSCode, andá al ícono de Extensiones (Ctrl+Shift+X / Cmd+Shift+X).
2. Buscá **Live Server** (de Ritwick Dey) e instalala.
3. Clic derecho sobre `index.html` → **Open with Live Server**.
4. Se abre el navegador y ya podés tocar el sobre para probarlo.

## 3. Personalizá el contenido (todo está en `index.html`)
- **Nombre y edad**: buscá `<span class="ribbon-text">Julián</span>` y
  el `<div class="big-number">2</div>`.
- **Mensaje de bienvenida**: dentro de `<div class="message-box">`.
- **Fecha del evento**: en `script.js`, cambiá la línea:
  ```js
  const EVENT_DATE = new Date('2026-09-01T19:00:00');
  ```
  (formato: año-mes-día T hora:minuto:segundo)
- **Horario del evento**: `<p class="event-time">19 a 22 hs.</p>`
- **Dirección**: `<p class="address-text">` y el link de `id="map-link"`
  (reemplazá la dirección en la URL de Google Maps también).
- **Botones de WhatsApp**: en los `<a id="rsvp-mama">` y `<a id="rsvp-papa">`,
  reemplazá `5490000000000` por el número real con código de país,
  sin espacios ni el signo `+` (ej: Argentina = 549 + código de área + número).
  El texto después de `?text=` es el mensaje precargado.

## 4. Agregá tu propia música (opcional)
1. Creá la carpeta `audio` dentro del proyecto (ya viene creada).
2. Poné ahí tu archivo `musica.mp3`.
3. Si le pusiste otro nombre, actualizá esta línea en `index.html`:
   ```html
   <source src="audio/musica.mp3" type="audio/mpeg">
   ```
   Por derechos de autor, usá música libre de copyright (por ejemplo de
   YouTube Audio Library o Pixabay Music).

## 5. Personalizá colores e imágenes
- Los colores están centralizados arriba de `style.css`, en `:root`:
  ```css
  --sand: #FBF6EC;
  --water: #BFE1F0;
  --blue: #4A90C4;
  --coral: #F2A65A;
  ```
  Cambiá estos valores y se actualiza todo el sitio.
- Los "animalitos" (🐠🐙🐬🐡🐋) son emojis para que sea liviano y fácil de
  editar. Si querés ilustraciones más elaboradas (como las del video),
  podés reemplazar esos `<div class="creature">🐠</div>` por
  `<img src="img/pez.png">` usando tus propias imágenes (PNG con fondo
  transparente funciona mejor).

## 6. Personalizar el nombre del invitado (opcional, avanzado)
El link puede llevar `?para=NombreInvitado` al final, por ejemplo:
`index.html?para=Familia%20Perez`
y el texto "Para: ___" se actualiza automáticamente. Útil si mandás el
mismo link a varias familias.

## 7. Publicalo para poder compartir el link
Con VSCode alcanza para diseñar y probar en tu compu, pero para mandarlo
por WhatsApp necesitás subirlo a internet. Opciones gratuitas y simples:
- **Netlify Drop** (netlify.com/drop): arrastrás la carpeta entera y te da
  un link al instante. La más fácil.
- **GitHub Pages**: subís la carpeta a un repositorio de GitHub y activás
  Pages en la configuración del repo.
- **Vercel**: parecido a Netlify, conectando tu cuenta de GitHub.

## Estructura del proyecto
```
invitacion/
├── index.html   → contenido y estructura de cada sección
├── style.css    → colores, tipografías y animaciones
├── script.js    → abrir el sobre, cuenta regresiva, audio, scroll
├── audio/       → poné acá tu mp3
└── LEEME.md     → esta guía
```
