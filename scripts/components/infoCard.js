/* ============================================
   INFO CARD COMPONENT
   ============================================ */

export function renderInfoCard() {
  const template = `
    <div class="info-card">
      <h2>¿Cómo funciona?</h2>
      <ul class="info-list">
        <li class="info-item">
          <div class="info-number">1</div>
          <div class="info-text">Haz clic en "Iniciar Chat" para abrir el formulario de configuración</div>
        </li>
        <li class="info-item">
          <div class="info-number">2</div>
          <div class="info-text">Selecciona la categoría que mejor describe tu consulta</div>
        </li>
        <li class="info-item">
          <div class="info-number">3</div>
          <div class="info-text">Haz clic en "Continuar" para iniciar la conversación con Sabbi</div>
        </li>
      </ul>
    </div>
  `;

  document.getElementById('infoCardComponent').innerHTML = template;
}

export function hideInfoCard() {
  const infoCard = document.querySelector('.info-card');
  if (infoCard) {
    infoCard.classList.add('hidden');
  }
}

export function showInfoCard() {
  const infoCard = document.querySelector('.info-card');
  if (infoCard) {
    infoCard.classList.remove('hidden');
  }
}