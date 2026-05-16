import { useState } from "react";
import { Send, Plus, Trash2, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  lastUpdated: Date;
}

export function AIChat() {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: "1",
      title: "General Health Questions",
      messages: [],
      lastUpdated: new Date(),
    },
  ]);
  const [currentChatId, setCurrentChatId] = useState("1");
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentChat = chats.find((c) => c.id === currentChatId);

  const handleSend = () => {
    if (!input.trim() || !currentChat) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: getAIResponse(input),
      timestamp: new Date(),
    };

    setChats(
      chats.map((chat) =>
        chat.id === currentChatId
          ? {
              ...chat,
              messages: [...chat.messages, userMessage, aiResponse],
              lastUpdated: new Date(),
              title: chat.messages.length === 0 ? input.slice(0, 30) + "..." : chat.title,
            }
          : chat
      )
    );

    setInput("");
  };

  const getAIResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase();

    if (lower.includes("headache") || lower.includes("head")) {
      return "For headaches, I recommend: 1) Stay hydrated - drink plenty of water. 2) Get adequate rest in a quiet, dark room. 3) Consider over-the-counter pain relievers like acetaminophen or ibuprofen. 4) Apply a cold compress to your forehead. If headaches persist or worsen, please consult a healthcare professional.";
    }

    if (lower.includes("fever") || lower.includes("temperature")) {
      return "For fever management: 1) Rest and stay hydrated. 2) Take fever-reducing medication like acetaminophen or ibuprofen. 3) Use cool compresses. 4) Wear light clothing. Monitor your temperature regularly. If fever exceeds 103°F (39.4°C) or lasts more than 3 days, seek medical attention.";
    }

    if (lower.includes("cough") || lower.includes("cold")) {
      return "For cough and cold symptoms: 1) Stay hydrated with warm fluids like tea or soup. 2) Use a humidifier to add moisture to the air. 3) Get plenty of rest. 4) Consider honey for cough relief (for adults and children over 1 year). 5) Gargle with salt water for sore throat. If symptoms persist beyond 10 days or worsen, consult a doctor.";
    }

    if (lower.includes("sleep") || lower.includes("insomnia")) {
      return "For better sleep: 1) Maintain a consistent sleep schedule. 2) Create a relaxing bedtime routine. 3) Keep your bedroom cool, dark, and quiet. 4) Limit screen time before bed. 5) Avoid caffeine and heavy meals late in the day. 6) Exercise regularly, but not close to bedtime. If sleep problems persist, consider consulting a sleep specialist.";
    }

    if (lower.includes("diet") || lower.includes("nutrition") || lower.includes("eat")) {
      return "For a healthy diet: 1) Eat a variety of fruits and vegetables daily. 2) Choose whole grains over refined grains. 3) Include lean proteins like fish, poultry, beans, and nuts. 4) Limit processed foods, added sugars, and saturated fats. 5) Stay hydrated with water. 6) Practice portion control. Consider consulting a registered dietitian for personalized nutrition advice.";
    }

    if (lower.includes("exercise") || lower.includes("workout") || lower.includes("fitness")) {
      return "For fitness recommendations: 1) Aim for at least 150 minutes of moderate aerobic activity per week. 2) Include strength training exercises 2-3 times weekly. 3) Start slowly and gradually increase intensity. 4) Stay hydrated and warm up before exercising. 5) Listen to your body and rest when needed. Consult a healthcare provider before starting a new exercise program, especially if you have health conditions.";
    }

    if (lower.includes("stress") || lower.includes("anxiety") || lower.includes("mental")) {
      return "For stress management: 1) Practice deep breathing exercises or meditation. 2) Maintain regular physical activity. 3) Get adequate sleep. 4) Connect with friends and family. 5) Set realistic goals and priorities. 6) Take breaks and practice self-care. If stress or anxiety becomes overwhelming, please seek support from a mental health professional.";
    }

    return "Thank you for your question. As an AI health assistant, I can provide general wellness information, but I recommend consulting with a healthcare professional for personalized medical advice. Could you provide more details about your health concern so I can offer more specific guidance?";
  };

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: "New Conversation",
      messages: [],
      lastUpdated: new Date(),
    };
    setChats([newChat, ...chats]);
    setCurrentChatId(newChat.id);
  };

  const deleteChat = (chatId: string) => {
    if (chats.length === 1) return;
    const newChats = chats.filter((c) => c.id !== chatId);
    setChats(newChats);
    if (currentChatId === chatId) {
      setCurrentChatId(newChats[0].id);
    }
  };

  return (
    <div className="h-screen bg-black flex pt-16">
      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 0 }}
        className="bg-gray-900 border-r border-[#74d1dc]/20 overflow-hidden"
      >
        <div className="w-70 h-full flex flex-col p-4">
          {/* New Chat Button */}
          <button
            onClick={createNewChat}
            className="w-full px-4 py-3 bg-[#74d1dc] text-black rounded-lg font-semibold hover:bg-[#5ab8c4] transition-all flex items-center justify-center gap-2 mb-4"
          >
            <Plus size={20} />
            New Chat
          </button>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto space-y-2">
            <p className="text-xs text-gray-500 uppercase mb-2 px-2">Previous Chats</p>
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`group relative px-3 py-3 rounded-lg cursor-pointer transition-all ${
                  currentChatId === chat.id
                    ? "bg-[#74d1dc]/20 border border-[#74d1dc]/30"
                    : "hover:bg-gray-800 border border-transparent"
                }`}
                onClick={() => setCurrentChatId(chat.id)}
              >
                <div className="flex items-start gap-2">
                  <MessageSquare size={16} className="text-[#74d1dc] mt-1 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{chat.title}</p>
                    <p className="text-xs text-gray-500">
                      {chat.messages.length} messages
                    </p>
                  </div>
                  {chats.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteChat(chat.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-opacity"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Toggle Sidebar Button */}
        <div className="p-4 border-b border-[#74d1dc]/20">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="px-4 py-2 bg-gray-900 text-[#74d1dc] rounded-lg hover:bg-gray-800 transition-all"
          >
            {sidebarOpen ? "Hide" : "Show"} Sidebar
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {currentChat && currentChat.messages.length === 0 ? (
              <div className="text-center py-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block w-24 h-24 bg-[#74d1dc]/20 rounded-full flex items-center justify-center mb-6"
                >
                  <MessageSquare className="text-[#74d1dc]" size={48} />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">Start a Conversation</h2>
                <p className="text-gray-400">
                  Ask me anything about your health and wellness
                </p>
              </div>
            ) : (
              currentChat?.messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-6 py-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-[#74d1dc] text-black"
                        : "bg-gray-900 text-white border border-[#74d1dc]/20"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p
                      className={`text-xs mt-2 ${
                        message.role === "user" ? "text-black/60" : "text-gray-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-[#74d1dc]/20 p-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your health question here..."
                className="flex-1 px-6 py-4 bg-black border border-[#74d1dc]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#74d1dc] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-6 py-4 bg-[#74d1dc] text-black rounded-xl hover:bg-[#5ab8c4] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              HealthMate provides general health guidance and does not replace professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
