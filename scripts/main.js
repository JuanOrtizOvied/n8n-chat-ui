/* ============================================
   MAIN APPLICATION
   ============================================ */

import { initializeCategories } from './config.js';
import { renderHeader } from './components/header.js';
import { renderInfoCard } from './components/infoCard.js';
import { renderModal, openModal } from './components/modal.js';
import { initializeChat } from './chat.js';

// Initialize application
function init() {
  // Initialize categories in localStorage
  initializeCategories();
  
  // Render components
  renderHeader();
  renderInfoCard();
  renderModal();

  // Attach event listeners
  attachEventListeners();
}

function attachEventListeners() {
  // Open modal button
  document.addEventListener('click', (e) => {
    if (e.target.id === 'openModalBtn' || e.target.closest('#openModalBtn')) {
      openModal();
    }
  });

  // Category selected event
  window.addEventListener('categorySelected', (e) => {
    const { category } = e.detail;
    initializeChat(category);
  });
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}