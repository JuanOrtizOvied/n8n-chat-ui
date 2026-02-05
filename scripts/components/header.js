/* ============================================
   HEADER COMPONENT
   ============================================ */

export function renderHeader() {
  const template = `
    <div class="header">
      <h1>Bienvenido a Sabbi Wan kenobi</h1>
      <p>Selecciona una sesión para comenzar tu conversación con nuestro asistente virtual</p>
      <button class="btn-primary" id="openModalBtn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Iniciar Chat
      </button>
    </div>
  `;

  document.getElementById('headerComponent').innerHTML = template;
}

export function hideHeader() {
  const header = document.querySelector('.header');
  if (header) {
    header.classList.add('hidden');
  }
}

export function showHeader() {
  const header = document.querySelector('.header');
  if (header) {
    header.classList.remove('hidden');
  }
}