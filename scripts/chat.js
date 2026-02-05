/* ============================================
   CHAT INITIALIZATION
   ============================================ */

import { CHAT_CONFIG } from './config.js';
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
          sessionKey: `support-page-${category}`,
        },
        category: category,
        pageType: "help",
        user_uuid: state.userUuid,
      },
      theme: CHAT_CONFIG.theme,
    });
    
    setState({ chatInitialized: true });
    
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
    
    console.log('Chat initialized successfully');
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
}