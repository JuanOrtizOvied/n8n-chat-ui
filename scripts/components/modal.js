/* ============================================
   MODAL COMPONENT
   ============================================ */

import { CATEGORIES } from '../config.js';
import { state, setState } from '../state.js';

let comboboxOpen = false;

export function renderModal() {
  const template = `
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">Configurar Chat</h2>
          <p class="modal-description">Selecciona la categoría que mejor describe tu consulta</p>
        </div>

        <form id="categoryForm">
          <div class="form-group">
            <label class="form-label" for="category">Categoría de Consulta</label>
            
            <div class="combobox-container">
              <button type="button" class="combobox-trigger" id="comboboxTrigger">
                <span>Seleccionar categoría...</span>
                <svg class="combobox-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class="combobox-dropdown" id="comboboxDropdown">
                <input 
                  type="text" 
                  class="combobox-search" 
                  id="comboboxSearch" 
                  placeholder="Buscar categoría..."
                />
                <ul class="combobox-list" id="comboboxList"></ul>
                <div class="combobox-empty" id="comboboxEmpty" style="display: none;">
                  No se encontró la categoría.
                </div>
              </div>
            </div>
          </div>

          <div class="modal-actions">
            <button type="button" class="btn btn-secondary" id="cancelBtn">Cancelar</button>
            <button type="submit" class="btn btn-submit" id="submitBtn" disabled>Continuar</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.getElementById('modalComponent').innerHTML = template;
  attachModalEventListeners();
  renderCategories();
}

function attachModalEventListeners() {
  const modalOverlay = document.getElementById('modalOverlay');
  const cancelBtn = document.getElementById('cancelBtn');
  const categoryForm = document.getElementById('categoryForm');
  const comboboxTrigger = document.getElementById('comboboxTrigger');
  const comboboxSearch = document.getElementById('comboboxSearch');

  // Cancel button
  cancelBtn.addEventListener('click', () => {
    closeModal();
  });

  // Click outside to close
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Combobox trigger
  comboboxTrigger.addEventListener('click', toggleCombobox);

  // Search input
  comboboxSearch.addEventListener('input', (e) => {
    renderCategories(e.target.value);
  });

  // Close combobox when clicking outside
  document.addEventListener('click', (e) => {
    if (!comboboxTrigger.contains(e.target) && 
        !document.getElementById('comboboxDropdown').contains(e.target)) {
      closeCombobox();
    }
  });

  // Form submit
  categoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
  });
}

function renderCategories(filter = '') {
  const comboboxList = document.getElementById('comboboxList');
  const comboboxEmpty = document.getElementById('comboboxEmpty');

  const filteredCategories = CATEGORIES.filter(cat => 
    cat.label.toLowerCase().includes(filter.toLowerCase())
  );

  comboboxList.innerHTML = '';
  
  if (filteredCategories.length === 0) {
    comboboxList.style.display = 'none';
    comboboxEmpty.style.display = 'block';
    return;
  }

  comboboxList.style.display = 'block';
  comboboxEmpty.style.display = 'none';

  filteredCategories.forEach(category => {
    const li = document.createElement('li');
    li.className = 'combobox-item';
    if (state.selectedCategory === category.value) {
      li.classList.add('selected');
    }
    
    li.innerHTML = `
      <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>${category.label}</span>
    `;
    
    li.addEventListener('click', () => selectCategory(category));
    comboboxList.appendChild(li);
  });
}

function selectCategory(category) {
  setState({ selectedCategory: category.value });
  
  const comboboxTrigger = document.getElementById('comboboxTrigger');
  const triggerSpan = comboboxTrigger.querySelector('span');
  const submitBtn = document.getElementById('submitBtn');
  
  triggerSpan.textContent = category.label;
  comboboxTrigger.classList.add('has-value');
  submitBtn.disabled = false;
  
  closeCombobox();
}

function toggleCombobox() {
  comboboxOpen ? closeCombobox() : openCombobox();
}

function openCombobox() {
  const comboboxDropdown = document.getElementById('comboboxDropdown');
  const comboboxTrigger = document.getElementById('comboboxTrigger');
  const comboboxSearch = document.getElementById('comboboxSearch');
  
  comboboxDropdown.classList.add('active');
  comboboxTrigger.classList.add('active');
  comboboxSearch.value = '';
  comboboxOpen = true;
  renderCategories();
  setTimeout(() => comboboxSearch.focus(), 100);
}

function closeCombobox() {
  const comboboxDropdown = document.getElementById('comboboxDropdown');
  const comboboxTrigger = document.getElementById('comboboxTrigger');
  
  comboboxDropdown.classList.remove('active');
  comboboxTrigger.classList.remove('active');
  comboboxOpen = false;
}

function handleSubmit() {
  if (state.selectedCategory) {
    closeModal();
    // Dispatch custom event for chat initialization
    window.dispatchEvent(new CustomEvent('categorySelected', {
      detail: { category: state.selectedCategory }
    }));
  }
}

export function openModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.classList.add('active');
}

export function closeModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.classList.remove('active');
}