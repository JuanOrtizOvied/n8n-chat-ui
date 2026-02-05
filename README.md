# Sabbi Chat - Vanilla JavaScript Application

A scalable, modular chatbot application built with vanilla JavaScript, structured using modern best practices.

## 📁 Project Structure

```
chatbot-project/
├── index.html                 # Main HTML entry point
├── styles/
│   ├── base.css              # Base styles (reset, body, container)
│   ├── components.css        # Component-specific styles
│   ├── modal.css             # Modal-specific styles
│   └── animations.css        # Animation keyframes
├── scripts/
│   ├── config.js             # Configuration & constants
│   ├── state.js              # State management
│   ├── chat.js               # Chat initialization logic
│   ├── main.js               # Application entry point
│   └── components/
│       ├── header.js         # Header component
│       ├── infoCard.js       # Info card component
│       └── modal.js          # Modal component with combobox
└── README.md                 # Documentation
```

## 🚀 Features

- **Modular Architecture**: Separation of concerns with dedicated files for components, styles, and logic
- **Component-Based**: Reusable components (Header, InfoCard, Modal)
- **State Management**: Centralized state handling
- **ES6 Modules**: Modern JavaScript module system
- **Zero Build Tools**: No webpack, no babel - runs directly in browser
- **Scalable**: Easy to add new components and features

## 📦 Dependencies

**Zero npm dependencies required!**

External resources loaded from CDN:
- Google Fonts (Manrope)
- n8n Chat Widget

## 🎯 Architecture Patterns

### Components
Each component follows this pattern:
- **Render function**: Creates and injects HTML
- **Event handlers**: Component-specific interactions
- **State interaction**: Uses shared state when needed
- **Export/Import**: ES6 modules for clean dependencies

### State Management
- Single source of truth in `state.js`
- Immutable updates using `setState()`
- Accessed via `getState()`

### Configuration
- All config in `config.js`
- Easy to modify chat settings
- Centralized category definitions

## 🔧 How It Works

1. **index.html**: Loads all CSS and JavaScript modules
2. **main.js**: Entry point, initializes all components
3. **Components**: Render their own HTML and handle events
4. **State**: Shared across all components
5. **Chat**: Initialized when category is selected

## 📖 Usage

### Adding a New Component

1. Create component file in `scripts/components/`:
```javascript
// scripts/components/myComponent.js
export function renderMyComponent() {
  const template = `<div>My Component</div>`;
  document.getElementById('targetElement').innerHTML = template;
}
```

2. Import in `main.js`:
```javascript
import { renderMyComponent } from './components/myComponent.js';
```

3. Call in `init()` function

### Adding New Styles

Add to appropriate CSS file:
- `base.css`: Layout, typography, general styles
- `components.css`: Component-specific styles
- `modal.css`: Modal-related styles
- `animations.css`: Animation keyframes

### Modifying Configuration

Edit `scripts/config.js`:
```javascript
export const CHAT_CONFIG = {
  // Your chat configuration
};

export const CATEGORIES = [
  // Your categories
];
```

## 🎨 Styling Philosophy

- **CSS Variables**: Easy theming (future enhancement)
- **BEM-like naming**: Clear component-style relationships
- **Responsive**: Mobile-first approach
- **Animations**: Smooth transitions and micro-interactions

## 🧪 Testing

Open `index.html` in a modern browser (Chrome, Firefox, Safari, Edge).

No build step required - changes are immediately visible on refresh.

## 🔐 Security Notes

- No inline scripts
- External resources from trusted CDNs
- Event listeners properly scoped
- No eval() or dangerous patterns

## 📈 Performance

- Lazy loading of chat widget
- Minimal CSS/JS payload
- No framework overhead
- Efficient DOM manipulation

## 🚧 Future Enhancements

- [ ] CSS custom properties for theming
- [ ] LocalStorage for category persistence
- [ ] Service worker for offline support
- [ ] Accessibility improvements (ARIA labels)
- [ ] Unit tests
- [ ] TypeScript conversion

## 📄 License

Proprietary - Sabbi Chat Application

## 👥 Contributing

To add features:
1. Create new component in `scripts/components/`
2. Add styles in appropriate CSS file
3. Update `main.js` to integrate component
4. Document changes in this README

---

**Built with ❤️ using Vanilla JavaScript**