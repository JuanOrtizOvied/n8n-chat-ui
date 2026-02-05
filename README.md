# Sabbi Chat - Vanilla JavaScript Application

A scalable, modular chatbot application with **persistent session management** built with vanilla JavaScript.

## 🚀 New Features

### ✨ Session Persistence
- **Auto-Resume Chat**: When you refresh the page, the chat automatically resumes with your last selected category
- **No Re-selection Needed**: Skip the modal and go straight to chatting
- **Seamless Experience**: Your conversation context is maintained

### 🎯 How It Works

**First Time User:**
1. Click "Iniciar Chat" → Modal opens
2. Select or create a category
3. Click "Continuar" → Category is saved to localStorage
4. Chat initializes

**Returning User:**
5. **Refresh the page** → Chat automatically loads with saved category!
6. **No modal, no selection needed** → Straight to chat

**Change Category:**
- Simply click "Iniciar Chat" again to select a different category
- Your new selection will be saved automatically

## 📁 Project Structure

```
chatbot-project/
├── index.html                 # Main HTML entry point
├── styles/
│   ├── base.css              # Base styles
│   ├── components.css        # Component styles
│   ├── modal.css             # Modal styles
│   └── animations.css        # Animations
├── scripts/
│   ├── config.js             # Configuration + localStorage
│   ├── state.js              # State management
│   ├── chat.js               # Chat initialization
│   ├── main.js               # App entry + session check
│   └── components/
│       ├── header.js         # Header component
│       ├── infoCard.js       # Info card component
│       └── modal.js          # Modal with category management
└── README.md                 # This file
```

## 🎯 Key Features

### 1. **Persistent Category Storage**
```javascript
// Categories stored in localStorage
localStorage: 'sabbi_chat_categories'

// Selected category stored separately
localStorage: 'sabbi_chat_selected_category'
```

### 2. **Auto-Resume on Page Load**
- Checks localStorage for saved category on app init
- If found, automatically initializes chat
- Skips header/info card and goes straight to chat

### 3. **Create Custom Categories**
- Type new category name in input field
- Automatically saved to localStorage
- Available immediately in dropdown

### 4. **Smart Form Validation**
- Submit enabled when category selected OR new category typed
- Mutual exclusivity between selection and input
- Duplicate prevention

## 🔧 LocalStorage Functions

### config.js API

```javascript
// Category Management
getCategories()              // Load all categories
saveCategories(categories)   // Save categories array
addCategory(label)          // Add new category

// Session Persistence
saveSelectedCategory(category)  // Save last selected category
getSelectedCategory()           // Get last selected category
clearSelectedCategory()         // Clear saved category

// Initialization
initializeCategories()       // Set up default categories
```

## 📖 Usage Examples

### Check for Saved Session
```javascript
import { getSelectedCategory } from './config.js';

const savedCategory = getSelectedCategory();
if (savedCategory) {
  // User has a previous session
  initializeChat(savedCategory);
}
```

### Save Category on Submit
```javascript
import { saveSelectedCategory } from './config.js';

function handleSubmit(category) {
  saveSelectedCategory(category);
  // Chat will auto-resume on next visit
}
```

### Clear Session
```javascript
import { clearSelectedCategory } from './config.js';

function logout() {
  clearSelectedCategory();
  // User will see modal on next visit
}
```

## 🎬 User Flow

### First Visit:
```
1. Page loads → Header + Info Card visible
2. Click "Iniciar Chat" → Modal opens
3. Select/Create category → Click "Continuar"
4. Category saved to localStorage
5. Chat initializes (header/info hidden)
```

### Subsequent Visits:
```
1. Page loads → Checks localStorage
2. Saved category found → Auto-initialize chat
3. Header/Info hidden immediately
4. Chat ready to use!
```

### Change Category:
```
1. Click "Iniciar Chat" (button still available)
2. Select different category
3. New category saved, replaces old one
4. Chat reinitializes
```

## 🧪 Testing Session Persistence

1. Open the app (first time)
2. Select a category (e.g., "Support")
3. Chat loads
4. **Refresh the page (F5)**
5. ✅ Chat loads automatically with "Support" category!
6. **Check DevTools:**
   - Application → Local Storage
   - Key: `sabbi_chat_selected_category`
   - Value: `support`

## 🔐 Security & Privacy

- All data stored client-side in localStorage
- No server-side tracking
- Clear browser data to reset
- No cookies, no external tracking

## 📊 LocalStorage Structure

```json
// Categories List
"sabbi_chat_categories": [
  { "value": "support", "label": "Support" },
  { "value": "sales", "label": "Sales" },
  { "value": "custom-category", "label": "Custom Category" }
]

// Selected Category (for session persistence)
"sabbi_chat_selected_category": "support"
```

## 🎯 Modified Files

### config.js
- Added `saveSelectedCategory()`
- Added `getSelectedCategory()`
- Added `clearSelectedCategory()`
- New storage key: `SELECTED_CATEGORY_KEY`

### modal.js
- Calls `saveSelectedCategory()` on form submit
- Saves category before dispatching `categorySelected` event

### main.js
- Added `checkSavedCategory()` function
- Auto-initializes chat if saved category exists
- Runs on app initialization

### chat.js
- No changes (works with saved category seamlessly)

## 🚧 Future Enhancements

- [ ] Clear session button in chat UI
- [ ] Category usage analytics
- [ ] Session timeout (auto-clear after X days)
- [ ] Multiple session support
- [ ] Session export/import
- [ ] Category favorites

## 💡 Pro Tips

**Reset Session:**
- Open DevTools → Application → Local Storage
- Delete `sabbi_chat_selected_category` key
- Refresh page → Modal will appear

**Clear All Data:**
```javascript
localStorage.clear();
```

**Manage Categories Programmatically:**
```javascript
import { getCategories, saveCategories, getSelectedCategory } from './scripts/config.js';

// View all categories
console.log(getCategories());

// View current session
console.log(getSelectedCategory());
```

## 📄 License

Proprietary - Sabbi Chat Application

---

**Built with ❤️ using Vanilla JavaScript + LocalStorage Session Management**