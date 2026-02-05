/* ============================================
   CHAT INITIALIZATION
   ============================================ */

import { CHAT_CONFIG, initializeSalesSession } from './config.js';
import { state, setState } from './state.js';
import { hideHeader } from './components/header.js';
import { hideInfoCard } from './components/infoCard.js';

// Setup chat callbacks
window.myChatCallbacks = {
  onWidgetOpen: function (data) {
    console.log("Widget opened:", data);
  },

  beforeSubmit: function (data) {
    console.log("Before submit:", data);
    
    // Add custom metadata
    data.metadata.customField = "Modified by beforeSubmit";
    data.metadata.selectedCategory = state.selectedCategory;
    
    return data;
  },

  onResponseReceived: function (data) {
    console.log("Response received:", data);
  },

  onError: function (data) {
    console.error("Error occurred:", data);
  },

  onChatClear: function (data) {
    console.log("Chat cleared:", data);
  },

  onWidgetClose: function (data) {
    console.log("Widget closed:", data);
  },
};

export async function initializeChat(category) {
  if (state.chatInitialized) return;

  try {
    const module = await import('https://cdn.n8nchatui.com/v1/embed.js');
    const Chatbot = module.default;
    
    Chatbot.initFull({
      n8nChatUrl: CHAT_CONFIG.n8nChatUrl,
      callbackRegistry: "myChatCallbacks",
      metadata: {
        n8nchatui: {
          sessionKey: `${category}-session`,
        },
        category: category,
        pageType: "help",
        user_uuid: state.userUuid,
      },
      theme: CHAT_CONFIG.theme,
    });
    
    setState({ chatInitialized: true });
    
    // Check if category has existing session data in localStorage
    const sessionKey = `${category}-session_CHAT`;
    const existingSession = localStorage.getItem(sessionKey);
    
    if (!existingSession) {
      // No data exists - send automatic first message
      console.log(`No existing session found for ${category}, sending automatic message`);
      
      Chatbot.sendMessage("Hola! empecemos a crear mi filosofia de inversión.", {
        metadata: {
          n8nchatui: {
            sessionKey: `${category}-session`,
          },
          category: category,
          pageType: "help",
          user_uuid: state.userUuid,
        },
      });
    } else {
      console.log(`Existing session found for ${category}, skipping automatic message`);
    }
    
    // If sales category, initialize chat history in localStorage
    if (category === 'martin') {
      initializeSalesSession();
      console.log('Sales session checked/initialized');
    }
    
    // Hide header and info card
    setTimeout(() => {
      hideHeader();
      hideInfoCard();
    }, 100);
    
    // Show chat container
    setTimeout(() => {
      const chatContainer = document.getElementById('chatContainer');
      chatContainer.classList.add('active');
    }, 400);
    
    console.log('Chat initialized successfully for category:', category);
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
}