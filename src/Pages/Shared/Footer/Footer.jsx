import React, { useState, useEffect, useRef } from "react";

const FooterWithAIChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Welcome to AI Chat! How can I help you?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const messagesContainerRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const generateAIResponse = (userMessage) => {
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hi there! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("help")) {
      return "Sure, I'm here to help! What do you need assistance with?";
    } else if (userMessage.toLowerCase().includes("price")) {
      return "Could you please specify which product or service you'd like to know the price of?";
    } else {
      return "That's interesting! Can you tell me more?";
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessage = { sender: "You", text: userInput };
    setMessages((prev) => [newMessage, ...prev]);
    setUserInput("");

    setTimeout(() => {
      const aiResponse = { sender: "AI", text: generateAIResponse(newMessage.text) };
      setMessages((prev) => [aiResponse, ...prev]);
    }, 1000);
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Footer */}
      <footer className="bg-green-100 mt-64 p-4 flex flex-wrap justify-between items-center">
        {/* Company Information */}
        <div className="text-left mb-2 md:mb-0">
          <h2 className="text-lg font-semibold">Company Name</h2>
          <p className="text-sm">123 Main Street, Suite 100</p>
          <p className="text-sm">City, State, ZIP</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          
        </div>

        {/* AI Chat Button */}
        <div>
          <button
            onClick={toggleChat}
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
          >
            AI Chat
          </button>
        </div>
      </footer>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 bg-white w-full max-w-sm rounded-lg shadow-lg p-4">
          {/* Close Button */}
          <button
            onClick={toggleChat}
            className="absolute top-4 right-4 text-white p-1 bg-
            ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''-600 hover:text-red-500"
          >
            &times;
            CLOSE CHAT
          </button>

          {/* Chat Inbox */}
          <div className="flex flex-col h-80">
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-2 border border-gray-200 rounded flex flex-col-reverse"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded ${
                    message.sender === "AI"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-500 text-white self-end"
                  }`}
                >
                  <strong>{message.sender}: </strong>
                  {message.text}
                </div>
              ))}
            </div>

            {/* Input Box */}
            <form onSubmit={handleSendMessage} className="mt-4 flex items-center">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterWithAIChat;