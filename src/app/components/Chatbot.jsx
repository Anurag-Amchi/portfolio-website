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
      const userMessage = {
        id: Date.now(),
        sender: "user",
        text: input.trim(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setLoading(true);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim() }),
      });

      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();

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
        className="fixed bottom-7 right-6 bg-gradient-to-br from-orange-500 to-yellow-300 text-white p-3 rounded-full min-w-12 md:min-w-18 md:min-h-18 shadow-lg hover:bg-gradient-to-tl from-orange-500 to-yellow-300 z-50 md:text-3xl"
      >
        AI
      </button>

      {open && (
        <div className="fixed bottom-21 right-6 md:bottom-27 w-80 h-96 md:h-110 md:w-90 bg-white shadow-lg shadow-amber-200 rounded-xl flex flex-col z-50">
          <div className="p-3 font-bold bg-gradient-to-br from-orange-500 to-yellow-300 text-white rounded-t-xl">
            Chat Assistant
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded max-w-[80%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-yellow-100 text-black"
                    : "bg-yellow-400 text-white"
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
              className="ml-2 px-3 bg-gradient-to-br from-orange-500 to-yellow-300 text-white rounded hover:bg-gradient-to-tl from-orange-500 to-yellow-300 disabled:bg-gray-400"
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
