import { useState, useEffect } from "react";
import ChatInput from "../components/ChatInput";
import ChatWindow from "../components/ChatWindow";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const handleSend = async (message) => {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `User: ${message}\n\nBot:`;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, userMessage];
      localStorage.setItem("messages", JSON.stringify(updatedMessages));
      return updatedMessages;
    });

    try {
      const result = await model.generateContentStream(prompt);
      const botMessage = {
        sender: "bot",
        text: "",
        direction: "ltr",
      };

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, botMessage];
        localStorage.setItem("messages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        setMessages((prevMessages) => {
          const updatedMessages = prevMessages.map((msg, index) => {
            if (index === prevMessages.length - 1) {
              return {
                ...msg,
                text: msg.text + chunkText,
              };
            }
            return msg;
          });
          localStorage.setItem("messages", JSON.stringify(updatedMessages));
          return updatedMessages;
        });
      }
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  return (
    <div className="chat-page">
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatPage;
