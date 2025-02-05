document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    // Example responses
    const responses = {
        "hi": "Hello! How can I help you today?",
        "who are you": "I'm your Portfolio Assistant, here to answer questions about your projects and skills!",
        "what technologies do you use": "I work with HTML, CSS, JavaScript, and more!",
        "tell me about your projects": "I have worked on various projects, including web apps, shopping lists, and a hotel booking system.",
        "default": "I'm not sure about that. Try asking about my projects, skills, or experience."
    };

    // Function to add messages to chat
    function addMessage(sender, text) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("chat-message", sender);
        msgDiv.textContent = text;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Handle user input
    function handleUserMessage() {
        const userText = userInput.value.trim().toLowerCase();
        if (userText === "") return;

        addMessage("user", userInput.value);
        userInput.value = "";

        setTimeout(() => {
            const botResponse = responses[userText] || responses["default"];
            addMessage("bot", botResponse);
        }, 500);
    }

    // Send button click event
    sendBtn.addEventListener("click", handleUserMessage);

    // Enter key event
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            handleUserMessage();
        }
    });
});

// Function to toggle chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById("chatbot-container");
    chatbotContainer.classList.toggle("hidden");
}
