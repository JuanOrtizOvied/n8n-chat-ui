# Sabbi Chat - Vanilla JavaScript Application

A scalable, modular chatbot application with **persistent session management** and **sales chat history** built with vanilla JavaScript.

## 🚀 Features

### ✨ Sales Chat History
- **Pre-loaded Conversation**: Sales category comes with previous chat messages
- **Automatic Initialization**: First time sales is loaded, chat history is saved to localStorage
- **Persistent History**: Chat history remains in localStorage across sessions
- **Key**: `sales-session_CHAT`

### 🎯 Session Persistence
- **Auto-Resume Chat**: Refresh the page and continue where you left off
- **Category Memory**: Last selected category is remembered
- **Sales History**: Sales chat loads with previous conversation

## 📊 How Sales Chat History Works

### First Time Sales is Selected:

1. **User selects "Sales" category**
2. **Chat initializes**
3. **Check localStorage** for `sales-session_CHAT`
4. **Not found** → Initialize with pre-defined chat history
5. **localStorage created** with 4 messages:
   ```javascript
   [
     { message: "...", type: "apiMessage" },      // Initial prompt
     { message: "hola 5 de feb 12:55", type: "userMessage", ... },
     { message: "Hola Martín...", type: "apiMessage", ... },
     { message: "hola 5 de feb 12:55 (localstorage)", type: "userMessage", ... }
   ]
   ```

### Subsequent Times:

6. **User selects "Sales"**
7. **Check localStorage** → Found!
8. **History already exists** → No re-initialization
9. **Chat continues** with existing history

### Other Categories:

- **No history initialization**
- **Fresh chat every time**
- **No localStorage updates** (except selected category)

## 📁 Chat History Structure

The `sales-session_CHAT` localStorage key contains an array of message objects:

```javascript
[
  {
    "message": "Viendo que has construido un portafolio...",
    "type": "apiMessage"
  },
  {
    "message": "hola 5 de feb 12:55",
    "type": "userMessage",
    "fileUploads": [],
    "dateTime": "2026-02-05T05:55:23.682Z"
  },
  {
    "followUpPrompts": [],
    "message": "Hola Martín, te leo...",
    "type": "apiMessage",
    "dateTime": "2026-02-05T05:55:31.902Z",
    "attachments": []
  },
  {
    "message": "hola 5 de feb 12:55 (localstorage)",
    "type": "userMessage",
    "fileUploads": [],
    "dateTime": "2026-02-05T05:58:23.682Z"
  }
]
```

## 🔧 Sales Session API

### config.js Functions

```javascript
// Get sales chat history
getSalesSession()
// Returns: Array of message objects or null

// Initialize sales session (first time only)
initializeSalesSession()
// Returns: boolean (true if initialized, false if already exists)

// Save/update sales chat history
saveSalesSession(chatHistory)
// Returns: boolean (success/failure)

// Clear sales chat history
clearSalesSession()
// Returns: boolean
```

## 📖 Usage Examples

### Check if Sales History Exists

```javascript
import { getSalesSession } from './scripts/config.js';

const history = getSalesSession();
if (history) {
  console.log('Sales history exists with', history.length, 'messages');
} else {
  console.log('No sales history yet');
}
```

### View Sales History

```javascript
import { getSalesSession } from './scripts/config.js';

const history = getSalesSession();
if (history) {
  history.forEach((msg, index) => {
    console.log(`Message ${index + 1}:`, msg.message);
    console.log(`Type:`, msg.type);
  });
}
```

### Clear Sales History

```javascript
import { clearSalesSession } from './scripts/config.js';

clearSalesSession();
console.log('Sales history cleared - will be re-initialized next time');
```

## 🧪 Testing Sales Chat History

### Test Initial Load:

1. **Clear localStorage** (DevTools → Application → Clear All)
2. Open the app
3. Select "Sales" category
4. **Check localStorage** → Find `sales-session_CHAT`
5. ✅ See 4 pre-loaded messages in JSON format!

### Test Persistence:

1. Sales history is loaded
2. **Refresh page** (F5)
3. Select "Sales" again
4. **Check localStorage** → Still there!
5. ✅ History persists across sessions!

### Test Re-initialization:

1. **Delete** `sales-session_CHAT` from localStorage
2. Select "Sales" category
3. **Check console** → "Sales session initialized with chat history"
4. **Check localStorage** → History re-created!
5. ✅ Automatic re-initialization works!

### Test Other Categories:

1. Select "Support" category
2. **Check localStorage**
3. ✅ No `sales-session_CHAT` created!
4. ✅ Only `sabbi_chat_selected_category` updated!

## 🔐 LocalStorage Keys

```
sabbi_chat_categories              → List of all categories
sabbi_chat_selected_category       → Current/last selected category
sales-session_CHAT                 → Sales chat history (array of messages)
```

## 🎯 Modified Files

### config.js
- **Added**: `SALES_CHAT_HISTORY` constant with 4 pre-defined messages
- **Added**: `initializeSalesSession()` - creates history first time only
- **Updated**: `getSalesSession()` - returns array of messages
- **Updated**: `saveSalesSession()` - saves array of messages

### chat.js
- **Updated**: Calls `initializeSalesSession()` when sales category loads
- **Removed**: Session metadata saving
- **Added**: Chat history initialization check

## 🎬 User Flow

### First Sales Visit:
```
1. User selects "Sales"
2. Chat initializes
3. initializeSalesSession() called
4. localStorage checked → Not found
5. localStorage['sales-session_CHAT'] = [4 messages]
6. Console: "Sales session initialized with chat history"
7. Chat ready with previous messages
```

### Subsequent Sales Visits:
```
1. User selects "Sales"
2. Chat initializes
3. initializeSalesSession() called
4. localStorage checked → Found!
5. Console: "Sales session already exists"
6. Chat ready with existing history
```

### Other Categories:
```
1. User selects "Support" (or any other)
2. Chat initializes
3. No history initialization
4. Fresh chat
```

## 💡 Pro Tips

### View Sales History in Console:

```javascript
import { getSalesSession } from './scripts/config.js';
const history = getSalesSession();
console.table(history);
```

### Check Message Count:

```javascript
const history = getSalesSession();
console.log('Total messages:', history ? history.length : 0);
```

### Export Sales History:

```javascript
const history = getSalesSession();
console.log(JSON.stringify(history, null, 2));
// Copy and paste to save externally
```

### Reset Sales History:

```javascript
// Method 1: Clear and let it re-initialize
import { clearSalesSession } from './scripts/config.js';
clearSalesSession();
// Next sales load will re-create default history

// Method 2: Clear all localStorage
localStorage.clear();
```

## 🔍 Debugging

### Check if history exists:
```javascript
console.log(localStorage.getItem('sales-session_CHAT'));
```

### Check initialization status:
```javascript
import { getSalesSession } from './scripts/config.js';
console.log('History exists:', getSalesSession() !== null);
```

### Monitor in console:
Watch for these messages:
- "Sales session initialized with chat history" (first time)
- "Sales session already exists" (subsequent times)

## ⚠️ Important Notes

### What IS Saved:
- ✅ Sales chat history (4 pre-defined messages)
- ✅ Selected category
- ✅ Category list

### What is NOT Saved:
- ❌ New messages sent by user (not automatically added)
- ❌ New responses from bot (not automatically added)
- ❌ History for other categories

### Sales History Behavior:
- 🔄 Initialized once (first time sales loads)
- 🔒 Persists across page refreshes
- ❌ NOT automatically updated with new messages
- 🔄 Can be manually cleared and re-initialized

## 📄 License

Proprietary - Sabbi Chat Application

---

**Built with ❤️ using Vanilla JavaScript + Sales Chat History**