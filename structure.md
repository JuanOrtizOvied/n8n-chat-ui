# 📁 Chatbot Project Structure

```
chatbot-project/
│
├── 📄 index.html                      # Main entry point
│
├── 📁 styles/                         # All CSS files
│   ├── base.css                       # Reset, body, container styles
│   ├── components.css                 # Header, buttons, info card, combobox
│   ├── modal.css                      # Modal overlay and dialog
│   └── animations.css                 # Keyframe animations
│
├── 📁 scripts/                        # All JavaScript modules
│   ├── config.js                      # Configuration & constants
│   ├── state.js                       # State management
│   ├── chat.js                        # Chat initialization
│   ├── main.js                        # Application entry point
│   │
│   └── 📁 components/                 # UI Components
│       ├── header.js                  # Header component
│       ├── infoCard.js                # Info card component
│       └── modal.js                   # Modal with combobox
│
└── 📄 README.md                       # Documentation

```

## 🎯 File Purposes

### HTML
- **index.html**: Loads CSS, creates DOM structure, imports JS modules

### Styles
- **base.css**: Foundation (reset, typography, layout, backgrounds)
- **components.css**: Component-specific styles (header, buttons, cards, forms)
- **modal.css**: Modal overlay and dialog styles
- **animations.css**: Reusable animation keyframes

### Scripts
- **config.js**: Chat configuration, categories, constants
- **state.js**: Centralized state management (selectedCategory, chatInitialized)
- **chat.js**: n8n chat widget initialization and callbacks
- **main.js**: App initialization, event delegation, component orchestration

### Components
- **header.js**: Renders header with title and "Iniciar Chat" button
- **infoCard.js**: Renders instruction card with steps
- **modal.js**: Renders modal dialog with combobox for category selection

## 🔄 Data Flow

```
User Action → Event Handler → State Update → Component Re-render/Chat Init
     ↓              ↓              ↓                    ↓
  Click      main.js/modal.js   state.js         chat.js/components
```

## 📦 Module Dependencies

```
main.js
  ├── header.js
  ├── infoCard.js
  ├── modal.js
  │   ├── config.js (CATEGORIES)
  │   └── state.js
  └── chat.js
      ├── config.js (CHAT_CONFIG)
      └── state.js
```