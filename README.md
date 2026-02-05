# Sabbi Chat - Vanilla JavaScript Application

A scalable, modular chatbot application built with vanilla JavaScript, structured using modern best practices.

## 🚀 New Features

### ✨ LocalStorage Category Management
- **Persistent Categories**: All categories are saved to localStorage
- **Create Custom Categories**: Users can add their own categories on the fly
- **Smart Validation**: Prevents duplicate categories and validates input
- **Seamless Experience**: Categories persist across browser sessions

### 🎯 How It Works

**Option 1: Select Existing Category**
- Click "Iniciar Chat"
- Choose from the dropdown list
- Click "Continuar"

**Option 2: Create New Category**
- Click "Iniciar Chat"  
- Type a new category name in "Crear Nueva Categoría"
- Click "Continuar"
- Your new category is saved to localStorage automatically!

## 📁 Project Structure

```
chatbot-project/
├── index.html                 # Main HTML entry point
├── styles/
│   ├── base.css              # Base styles
│   ├── components.css        # Component styles (includes new input styles)
│   ├── modal.css             # Modal styles
│   └── animations.css        # Animations
├── scripts/
│   ├── config.js             # Configuration + localStorage functions
│   ├── state.js              # State management
│   ├── chat.js               # Chat initialization
│   ├── main.js               # App entry point
│   └── components/
│       ├── header.js         # Header component
│       ├── infoCard.js       # Info card component
│       └── modal.js          # Modal with create category feature
└── README.md                 # This file
```

## 🎯 Key Functions

### Config.js - Category Management

```javascript
// Load categories from localStorage
getCategories() 
// Returns: Array of category objects

// Save categories to localStorage
saveCategories(categories)
// Returns: boolean (success/failure)

// Add a new category
addCategory(label)
// Returns: { success: true, category: {...} } or { success: false, message: '...' }

// Initialize default categories on first load
initializeCategories()
```

### Modal.js - Smart Form Logic

- **Dynamic Validation**: Button enabled when category selected OR new category entered
- **Mutual Exclusivity**: Selecting from list clears input, typing clears selection
- **Auto-refresh**: Categories reload from localStorage when modal opens

## 📦 Zero Dependencies

**No npm, no build tools!** Just:
- Google Fonts (Manrope)
- n8n Chat Widget

## 🧪 Testing

1. Open `index.html` in your browser
2. Create a new category (e.g., "VIP Support")
3. Refresh the page
4. Open modal - your category is still there! ✅

**Check LocalStorage:**
- DevTools → Application → Local Storage
- Key: `sabbi_chat_categories`
- Value: JSON array of categories

## 🎨 What Changed

### Files Modified:

1. **config.js** 
   - Removed hardcoded `CATEGORIES` constant
   - Added localStorage functions
   - Added category validation

2. **components.css**
   - Added `.form-input` styles
   - Added `.form-divider` styles for "O" separator

3. **modal.js**
   - Added "Create New Category" input field
   - Added smart form validation
   - Added localStorage integration
   - Added duplicate prevention

4. **main.js**
   - Added `initializeCategories()` call on app start

## 🔐 Security & Validation

- Category names limited to 50 characters
- Automatic slug generation (lowercase, hyphenated)
- Duplicate detection
- Input sanitization via `trim()`
- Try-catch error handling for localStorage operations

## 📈 Performance

- LocalStorage operations are synchronous but fast
- Categories cached in component state
- Minimal re-renders
- No network calls for category management

## 🚧 Future Enhancements

- [ ] Edit existing categories
- [ ] Delete categories
- [ ] Reorder categories (drag & drop)
- [ ] Export/Import categories as JSON
- [ ] Category icons/colors
- [ ] Search/filter categories
- [ ] Category usage statistics

## 📄 LocalStorage Structure

```json
[
  {
    "value": "support",
    "label": "Support"
  },
  {
    "value": "custom-category",
    "label": "Custom Category"
  }
]
```

**Storage Key:** `sabbi_chat_categories`

## 🎯 User Flow

```
1. User clicks "Iniciar Chat"
2. Modal opens with:
   - Dropdown of existing categories (from localStorage)
   - Input field to create new category
3. User either:
   - Selects existing category, OR
   - Types new category name
4. Clicks "Continuar"
5. If new category:
   - Validates (no duplicates, not empty)
   - Saves to localStorage
   - Adds to dropdown list
6. Chat initializes with selected/created category
```

## 📖 API Reference

### getCategories()
```javascript
import { getCategories } from './config.js';
const categories = getCategories();
// Returns: [{ value: 'support', label: 'Support' }, ...]
```

### addCategory(label)
```javascript
import { addCategory } from './config.js';
const result = addCategory('New Category');
if (result.success) {
  console.log('Created:', result.category);
} else {
  console.error('Error:', result.message);
}
```

---

**Built with ❤️ using Vanilla JavaScript + LocalStorage**