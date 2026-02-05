/* ============================================
   MODAL COMPONENT
   ============================================ */

import { getCategories, addCategory, saveSelectedCategory } from '../config.js';
import { state, setState } from '../state.js';

let comboboxOpen = false;
let currentCategories = [];

export function renderModal() {
  currentCategories = getCategories();
  
  const template = `
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">Configurar Chat</h2>
          <p class="modal-description">Selecciona una sesión o crea una nueva</p>
        </div>

        <form id="categoryForm">
          <div class="form-group">
            <label class="form-label" for="comboboxSearch">Sesión de Consulta</label>
            
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
                  placeholder="Buscar sesión..."
                />
                <ul class="combobox-list" id="comboboxList"></ul>
                <div class="combobox-empty" id="comboboxEmpty" style="display: none;">
                  No se encontró la categoría.
                </div>
              </div>
            </div>
          </div>

          <div class="form-divider">
            <span>O</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="newCategoryInput">Crear Nueva Sesión</label>
            <input 
              type="text" 
              class="form-input" 
              id="newCategoryInput" 
              placeholder="Ej: Consultoría, Producto, etc."
              maxlength="50"
            />
          </div>

          <div class="modal-actions">
            <button type="button" class="btn btn-secondary" id="cancelBtn">Cancelar</button>
            <button type="submit" class="btn btn-submit" id="submitBtn">Continuar</button>
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
  const newCategoryInput = document.getElementById('newCategoryInput');
  const submitBtn = document.getElementById('submitBtn');

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

  // New category input - clear selection when typing
  newCategoryInput.addEventListener('input', (e) => {
    if (e.target.value.trim()) {
      clearCategorySelection();
      updateSubmitButton();
    } else {
      updateSubmitButton();
    }
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

  const filteredCategories = currentCategories.filter(cat => 
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
  const newCategoryInput = document.getElementById('newCategoryInput');
  
  triggerSpan.textContent = category.label;
  comboboxTrigger.classList.add('has-value');
  
  // Clear new category input when selecting from list
  newCategoryInput.value = '';
  
  updateSubmitButton();
  closeCombobox();
}

function clearCategorySelection() {
  setState({ selectedCategory: null });
  
  const comboboxTrigger = document.getElementById('comboboxTrigger');
  const triggerSpan = comboboxTrigger.querySelector('span');
  
  triggerSpan.textContent = 'Seleccionar categoría...';
  comboboxTrigger.classList.remove('has-value');
  
  renderCategories();
}

function updateSubmitButton() {
  const submitBtn = document.getElementById('submitBtn');
  const newCategoryInput = document.getElementById('newCategoryInput');
  const hasSelection = state.selectedCategory !== null;
  const hasNewCategory = newCategoryInput.value.trim().length > 0;
  
  submitBtn.disabled = !(hasSelection || hasNewCategory);
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
  const newCategoryInput = document.getElementById('newCategoryInput');
  const newCategoryValue = newCategoryInput.value.trim();
  
  let categoryToUse = state.selectedCategory;
  
  // If user entered a new category, create it
  if (newCategoryValue) {
    const result = addCategory(newCategoryValue);
    
    if (result.success) {
      categoryToUse = result.category.value;
      setState({ selectedCategory: categoryToUse });
      
      // Update the categories list
      currentCategories = getCategories();
      renderCategories();
      
      console.log('New category created:', result.category);
    } else {
      alert(result.message || 'Error al crear la categoría');
      return;
    }
  }
  
  if (categoryToUse) {
    // Save selected category to localStorage
    saveSelectedCategory(categoryToUse);
    
    closeModal();
    // Dispatch custom event for chat initialization
    window.dispatchEvent(new CustomEvent('categorySelected', {
      detail: { category: categoryToUse }
    }));
  }
}

export function openModal() {
  // Refresh categories from localStorage
  currentCategories = getCategories();
  renderCategories();
  
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.classList.add('active');
}

export function closeModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  const newCategoryInput = document.getElementById('newCategoryInput');
  
  modalOverlay.classList.remove('active');
  
  // Reset form
  clearCategorySelection();
  if (newCategoryInput) {
    newCategoryInput.value = '';
  }
  updateSubmitButton();
}