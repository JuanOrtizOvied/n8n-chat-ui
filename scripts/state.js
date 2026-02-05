/* ============================================
   STATE MANAGEMENT
   ============================================ */

export const state = {
  selectedCategory: null,
  chatInitialized: false,
  userUuid: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
};

export function setState(updates) {
  Object.assign(state, updates);
}

export function getState() {
  return state;
}