"use client";
import { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    try {
      // Add user message
      const userMessage = {
        id: Date.now(),
        sender: "user",
        text: input.trim(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setLoading(true);

      // API call
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim() }),
      });

      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();

      // Add bot message
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.message,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Sorry, I'm having trouble responding. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-16 right-4 w-80 h-96 bg-white shadow-2xl rounded-xl flex flex-col z-50">
          <div className="p-3 font-bold bg-blue-600 text-white rounded-t-xl">
            Chat Assistant 🤖
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded max-w-[80%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-100 text-black"
                    : "bg-blue-600 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="p-2 text-gray-500">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-2 border-t flex">
            <input
              type="text"
              className="flex-1 border rounded p-2 text-sm text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            />
            <button
              type="submit"
              className="ml-2 px-3 bg-blue-600 text-white rounded disabled:bg-gray-400"
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
