/* ============================================
   CONFIGURATION
   ============================================ */

export const CHAT_CONFIG = {
  n8nChatUrl: "https://staging-n8n.sabbi.com/webhook/6bdc87ec-614b-461f-b197-86778d28e2ef/chat",
  theme: {
    button: {
      iconColor: "#373434",
      backgroundColor: "#ffc8b8",
    },
    chatWindow: {
      borderRadiusStyle: "rounded",
      avatarBorderRadius: 25,
      messageBorderRadius: 6,
      showTitle: true,
      title: "Sabbi Wan-kenobi",
      titleAvatarSrc: "https://www.svgrepo.com/show/339963/chat-bot.svg",
      avatarSize: 40,
      welcomeMessage: "Viendo que has construido un portafolio donde el peso está claramente en activos alternativos, reales y poco dependientes del mercado público, ¿qué es lo que estás priorizando de verdad como inversionista: maximizar retornos, reducir la volatilidad visible, ejercer mayor control sobre tus decisiones… o algo más profundo que eso?",
      errorMessage: "Please connect me to n8n first",
      backgroundColor: "#ffffff",
      height: 0,
      width: 0,
      fontSize: 16,
      starterPrompts: [],
      starterPromptFontSize: 15,
      renderHTML: false,
      clearChatOnReload: false,
      showScrollbar: false,
      botMessage: {
        backgroundColor: "#f36539",
        textColor: "#fafafa",
        showAvatar: true,
        avatarSrc: "https://www.svgrepo.com/show/334455/bot.svg",
        showCopyToClipboardIcon: true,
      },
      userMessage: {
        backgroundColor: "#fff6f3",
        textColor: "#050505",
        showAvatar: true,
        avatarSrc: "https://www.svgrepo.com/show/532363/user-alt-1.svg",
      },
      textInput: {
        placeholder: "Type your query",
        backgroundColor: "#ffffff",
        textColor: "#1e1e1f",
        sendButtonColor: "#f36539",
        maxChars: 50000,
        maxCharsWarningMessage: "You exceeded the characters limit. Please input less than 50 characters.",
        autoFocus: true,
        borderRadius: 6,
        sendButtonBorderRadius: 50,
      },
      voiceInputConfig: {
        enabled: true,
        maxRecordingTime: 600,
        recordingNotSupportedMessage: "To record audio, use modern browsers like Chrome or Firefox that support audio recording",
      },
    },
  },
};

export const CATEGORIES = [
  { value: "martin", label: "Martín" },
  { value: "ale_bre", label: "Alessandro" },
];