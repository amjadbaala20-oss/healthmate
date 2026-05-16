import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  Menu,
  X,
  Send,
  Plus,
  Trash2,
  MessageSquare,
  ChevronUp,
  Activity,
  Brain,
  Shield,
  Zap,
  Mail,
  MapPin,
  Lock,
  User,
  ArrowRight,
  Users,
  HeartPulse,
  Award,
} from "lucide-react";

// Counter Component for Statistics
function CountingNumber({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// Robot Doctor Component
function RobotDoctor({ isWaving = true, size = "large" }: { isWaving?: boolean; size?: "large" | "small" }) {
  const scale = size === "large" ? 1 : 0.6;

  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transform: `scale(${scale})` }}
      className="relative"
    >
      {/* Robot Doctor Body */}
      <div className="relative w-48 h-64">
        {/* Head */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-[#74d1dc] to-[#5ab8c4] rounded-2xl relative">
          {/* Antenna */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-6 bg-[#74d1dc]">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#74d1dc] rounded-full"
            />
          </div>

          {/* Eyes */}
          <motion.div
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="absolute top-10 left-6 w-6 h-6 bg-black rounded-full"
          />
          <motion.div
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="absolute top-10 right-6 w-6 h-6 bg-black rounded-full"
          />

          {/* Medical Cross on Forehead */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2">
            <div className="w-3 h-8 bg-white rounded-sm absolute left-1/2 -translate-x-1/2" />
            <div className="w-8 h-3 bg-white rounded-sm absolute top-2.5" />
          </div>

          {/* Smile */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-4">
            <svg viewBox="0 0 64 16" className="w-full h-full">
              <path
                d="M 8 2 Q 32 12 56 2"
                stroke="black"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Doctor Coat Body */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-36 h-32 bg-white rounded-t-3xl">
          {/* Stethoscope */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-[#74d1dc]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 border-4 border-[#74d1dc] rounded-full bg-black" />
          </div>

          {/* Buttons */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 space-y-3">
            <div className="w-2 h-2 bg-[#74d1dc] rounded-full" />
            <div className="w-2 h-2 bg-[#74d1dc] rounded-full" />
            <div className="w-2 h-2 bg-[#74d1dc] rounded-full" />
          </div>
        </div>

        {/* Left Arm (Waving) */}
        {isWaving ? (
          <motion.div
            animate={{
              rotate: [0, -30, 0, -30, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="absolute top-32 -left-2 w-6 h-20 bg-[#74d1dc] rounded-full origin-top"
            style={{ transformOrigin: "top center" }}
          >
            {/* Hand */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#74d1dc] rounded-full" />
          </motion.div>
        ) : (
          <div className="absolute top-32 -left-2 w-6 h-20 bg-[#74d1dc] rounded-full">
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#74d1dc] rounded-full" />
          </div>
        )}

        {/* Right Arm */}
        <div className="absolute top-32 -right-2 w-6 h-20 bg-[#74d1dc] rounded-full">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#74d1dc] rounded-full" />
        </div>

        {/* Floating Health Icons */}
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-4 -right-8 w-12 h-12 bg-[#74d1dc]/20 rounded-lg border border-[#74d1dc] flex items-center justify-center backdrop-blur-sm"
        >
          <Activity className="text-[#74d1dc]" size={24} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute top-24 -left-10 w-12 h-12 bg-[#74d1dc]/20 rounded-lg border border-[#74d1dc] flex items-center justify-center backdrop-blur-sm"
        >
          <Brain className="text-[#74d1dc]" size={24} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function OnePage() {
  const devs = [
    { name: "Amjad Baala", emoji: "👨‍💻" },
    { name: "Basma Alabouch", emoji: "👩‍💻" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [showGoUp, setShowGoUp] = useState(false);

  // Auth form state
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Chat state
  const [chats, setChats] = useState([
    { id: "1", title: "General Health Questions", messages: [] as any[] },
  ]);
  const [currentChatId, setCurrentChatId] = useState("1");
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentChat = chats.find((c) => c.id === currentChatId);

  // Show/hide "Go Up" button based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowGoUp(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", loginData);
    setIsAuthenticated(true);
    setShowAuthModal(false);
    setTimeout(() => scrollToSection("ai-chat"), 300);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Signup:", signupData);
    setIsAuthenticated(true);
    setShowAuthModal(false);
    setTimeout(() => scrollToSection("ai-chat"), 300);
  };

  const handleGoogleAuth = () => {
    console.log("Google authentication");
    setIsAuthenticated(true);
    setShowAuthModal(false);
    setTimeout(() => scrollToSection("ai-chat"), 300);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    scrollToSection("home");
  };

  const handleSendMessage = () => {
    if (!input.trim() || !currentChat) return;

    const userMessage = {
      id: Date.now().toString(),
      role: "user" as const,
      content: input,
      timestamp: new Date(),
    };

    const aiResponse = {
      id: (Date.now() + 1).toString(),
      role: "assistant" as const,
      content: getAIResponse(input),
      timestamp: new Date(),
    };

    setChats(
      chats.map((chat) =>
        chat.id === currentChatId
          ? {
              ...chat,
              messages: [...chat.messages, userMessage, aiResponse],
              title:
                chat.messages.length === 0
                  ? input.slice(0, 30) + "..."
                  : chat.title,
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

    if (
      lower.includes("stress") ||
      lower.includes("anxiety") ||
      lower.includes("mental")
    ) {
      return "For stress management: 1) Practice deep breathing exercises or meditation. 2) Maintain regular physical activity. 3) Get adequate sleep. 4) Connect with friends and family. 5) Set realistic goals and priorities. 6) Take breaks and practice self-care. If stress or anxiety becomes overwhelming, please seek support from a mental health professional.";
    }

    if (
      lower.includes("diet") ||
      lower.includes("nutrition") ||
      lower.includes("eat")
    ) {
      return "For a healthy diet: 1) Eat a variety of fruits and vegetables daily. 2) Choose whole grains over refined grains. 3) Include lean proteins like fish, poultry, beans, and nuts. 4) Limit processed foods, added sugars, and saturated fats. 5) Stay hydrated with water. 6) Practice portion control. Consider consulting a registered dietitian for personalized nutrition advice.";
    }

    return "Thank you for your question. As an AI health assistant, I can provide general wellness information, but I recommend consulting with a healthcare professional for personalized medical advice. Could you provide more details about your health concern so I can offer more specific guidance?";
  };

  const createNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: "New Conversation",
      messages: [],
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
    <div className="bg-black text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#74d1dc]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#74d1dc]/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">

```
  {/* Logo */}
  <div
    className="flex items-center gap-2 cursor-pointer"
    onClick={() => window.location.href = "/"}
  >
    <div className="w-8 h-8 bg-gradient-to-br from-[#74d1dc] to-[#5ab8c4] rounded-lg flex items-center justify-center">
      <span className="text-black font-bold text-xl">H</span>
    </div>

    <span className="text-xl font-bold text-[#74d1dc]">
      HealthMate
    </span>
  </div>

  {/* Desktop Navigation */}
  <div className="hidden md:flex items-center gap-8">

    <button
      onClick={() => window.location.href = "/"}
      className="text-white hover:text-[#74d1dc] transition-colors font-medium"
    >
      ← Back Home
    </button>

    {isAuthenticated ? (
      <button
        onClick={handleLogout}
        className="px-4 py-2 border border-[#74d1dc] text-[#74d1dc] rounded-lg hover:bg-[#74d1dc] hover:text-black transition-all"
      >
        Logout
      </button>
    ) : (
      <button
        onClick={() => {
          setAuthMode("login");
          setShowAuthModal(true);
        }}
        className="px-4 py-2 border border-[#74d1dc] text-[#74d1dc] rounded-lg hover:bg-[#74d1dc] hover:text-black transition-all"
      >
        Login
      </button>
    )}
  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-[#74d1dc]"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>
```

  </div>

{/* Mobile Navigation */} <AnimatePresence>
{mobileMenuOpen && (
<motion.div
initial={{ height: 0, opacity: 0 }}
animate={{ height: "auto", opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
className="md:hidden bg-black border-t border-[#74d1dc]/20 overflow-hidden"
> <div className="px-4 py-4 space-y-4">

```
      <button
        onClick={() => {
          window.location.href = "/";
          setMobileMenuOpen(false);
        }}
        className="block w-full text-left text-white hover:text-[#74d1dc] transition-colors font-medium"
      >
        ← Back Home
      </button>

      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="block w-full px-4 py-2 border border-[#74d1dc] text-[#74d1dc] rounded-lg hover:bg-[#74d1dc] hover:text-black transition-all text-center"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setAuthMode("login");
            setShowAuthModal(true);
            setMobileMenuOpen(false);
          }}
          className="block w-full px-4 py-2 border border-[#74d1dc] text-[#74d1dc] rounded-lg hover:bg-[#74d1dc] hover:text-black transition-all text-center"
        >
          Login
        </button>
      )}
    </div>
  </motion.div>
)}
```

  </AnimatePresence>
</nav>

        </AnimatePresence>
      </nav>

      {/* AI Chat Section - WITH ROBOT */}
      <section
        id="ai-chat"
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              AI <span className="text-[#74d1dc]">Chat</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ask health questions and get instant AI-powered answers from our
              intelligent assistant
            </p>
          </motion.div>

          {/* NEW: Robot with Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 mb-8 flex-wrap"
          >
            <div className="relative">
              <RobotDoctor isWaving={true} size="small" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative bg-[#74d1dc] text-black px-6 py-4 rounded-2xl rounded-bl-none max-w-md shadow-lg"
            >
              <p className="font-medium text-lg">
                What are you waiting for? Hit the button and start chatting with HealthMate! 🩺
              </p>
              {/* Speech bubble triangle */}
              <div className="absolute -left-3 bottom-0 w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-r-[#74d1dc] border-b-[0px] border-b-transparent" />
            </motion.div>
          </motion.div>

          {!isAuthenticated ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center bg-gradient-to-br from-[#74d1dc]/10 to-[#5ab8c4]/5 border-2 border-[#74d1dc]/30 rounded-3xl p-12"
            >
              <div className="w-24 h-24 bg-[#74d1dc]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="text-[#74d1dc]" size={48} />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Please Login to Access AI Chat
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                You need to create an account or log in to start chatting with
                our AI health assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setAuthMode("login");
                    setShowAuthModal(true);
                  }}
                  className="px-8 py-4 border-2 border-[#74d1dc] text-[#74d1dc] rounded-lg hover:bg-[#74d1dc]/10 transition-all font-semibold"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setAuthMode("signup");
                    setShowAuthModal(true);
                  }}
                  className="px-8 py-4 bg-[#74d1dc] text-black rounded-lg hover:bg-[#5ab8c4] transition-all font-semibold shadow-lg shadow-[#74d1dc]/50"
                >
                  Create Account
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 border-2 border-[#74d1dc]/30 rounded-3xl overflow-hidden shadow-2xl shadow-[#74d1dc]/20"
              style={{ height: "700px" }}
            >
              <div className="flex h-full">
                {/* Sidebar */}
                <motion.div
                  initial={false}
                  animate={{ width: sidebarOpen ? 280 : 0 }}
                  className="bg-black border-r border-[#74d1dc]/20 overflow-hidden"
                >
                  <div className="w-70 h-full flex flex-col p-4">
                    <button
                      onClick={createNewChat}
                      className="w-full px-4 py-3 bg-[#74d1dc] text-black rounded-lg font-semibold hover:bg-[#5ab8c4] transition-all flex items-center justify-center gap-2 mb-4 shadow-lg shadow-[#74d1dc]/30"
                    >
                      <Plus size={20} />
                      New Chat
                    </button>

                    <div className="flex-1 overflow-y-auto space-y-2">
                      <p className="text-xs text-gray-500 uppercase mb-2 px-2">
                        Previous Chats
                      </p>
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
                            <MessageSquare
                              size={16}
                              className="text-[#74d1dc] mt-1 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-white truncate">
                                {chat.title}
                              </p>
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

                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                  <div className="p-4 border-b border-[#74d1dc]/20 bg-black/50">
                    <button
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className="px-4 py-2 bg-[#74d1dc]/10 text-[#74d1dc] border border-[#74d1dc]/30 rounded-lg hover:bg-[#74d1dc]/20 transition-all font-medium"
                    >
                      {sidebarOpen ? "Hide" : "Show"} Sidebar
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-4xl mx-auto space-y-6">
                      {currentChat && currentChat.messages.length === 0 ? (
                        <div className="text-center py-20">
                          <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                            className="inline-block w-24 h-24 bg-[#74d1dc]/20 rounded-full flex items-center justify-center mb-6"
                          >
                            <MessageSquare
                              className="text-[#74d1dc]"
                              size={48}
                            />
                          </motion.div>
                          <h3 className="text-2xl font-bold mb-2">
                            Start a Conversation
                          </h3>
                          <p className="text-gray-400">
                            Ask me anything about your health and wellness
                          </p>
                        </div>
                      ) : (
                        currentChat?.messages.map((message: any) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${
                              message.role === "user"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            <div
                              className={`max-w-[85%] px-6 py-4 rounded-2xl ${
                                message.role === "user"
                                  ? "bg-[#74d1dc] text-black"
                                  : "bg-black text-white border-2 border-[#74d1dc]/30"
                              }`}
                            >
                              <p className="whitespace-pre-wrap leading-relaxed">
                                {message.content}
                              </p>
                              <p
                                className={`text-xs mt-2 ${
                                  message.role === "user"
                                    ? "text-black/60"
                                    : "text-gray-500"
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

                  <div className="border-t border-[#74d1dc]/20 p-4 bg-black/70 backdrop-blur-sm">
                    <div className="max-w-4xl mx-auto flex gap-2">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleSendMessage()
                        }
                        placeholder="Type your health question here..."
                        className="flex-1 px-6 py-4 bg-gray-900 border-2 border-[#74d1dc]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#74d1dc] transition-colors"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!input.trim()}
                        className="px-6 py-4 bg-[#74d1dc] text-black rounded-xl hover:bg-[#5ab8c4] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#74d1dc]/30"
                      >
                        <Send size={20} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-center">
                      HealthMate provides general health guidance and does not
                      replace professional medical advice.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-black border-t-2 border-[#74d1dc]/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400 mb-3">
            ⚠️{" "}
            <span className="text-[#74d1dc]/90 font-semibold">
              Medical Disclaimer:
            </span>{" "}
            HealthMate provides general health guidance and does not replace
            professional medical advice.
          </p>
          <p className="text-sm text-gray-500">
            © 2026 HealthMate. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Go Up Button */}
      <AnimatePresence>
        {showGoUp && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 px-5 py-4 bg-[#74d1dc] text-black rounded-xl font-semibold hover:bg-[#5ab8c4] transition-all shadow-2xl shadow-[#74d1dc]/50 flex items-center gap-2 z-50 border-2 border-[#74d1dc]"
          >
            <ChevronUp size={24} />
            <span className="hidden sm:inline">Go Up</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowAuthModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border-2 border-[#74d1dc]/30 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-[#74d1dc]/30"
            >
              <div className="text-center mb-8">
                <div className="inline-block w-20 h-20 bg-gradient-to-br from-[#74d1dc] to-[#5ab8c4] rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-3xl">H</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {authMode === "login" ? "Welcome Back" : "Create Account"}
                </h2>
                <p className="text-gray-400">
                  {authMode === "login"
                    ? "Log in to continue"
                    : "Join HealthMate today"}
                </p>
              </div>

              {authMode === "login" ? (
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black border-2 border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Lock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          password: e.target.value,
                        })
                      }
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black border-2 border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#74d1dc] text-black rounded-lg font-semibold hover:bg-[#5ab8c4] transition-all shadow-lg shadow-[#74d1dc]/50"
                  >
                    Sign In
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSignup} className="space-y-5">
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={signupData.name}
                      onChange={(e) =>
                        setSignupData({ ...signupData, name: e.target.value })
                      }
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black border-2 border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={signupData.email}
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black border-2 border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Lock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={signupData.password}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        })
                      }
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black border-2 border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Lock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={signupData.confirmPassword}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          confirmPassword: e.target.value,
                        })
                      }
                      required
                      className="w-full pl-12 pr-4 py-4 bg-black border-2 border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#74d1dc] text-black rounded-lg font-semibold hover:bg-[#5ab8c4] transition-all shadow-lg shadow-[#74d1dc]/50"
                  >
                    Create Account
                  </button>
                </form>
              )}

              <div className="mt-6">
                <p className="text-center text-gray-400 text-sm mb-4">
                  {authMode === "login"
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <button
                    onClick={() =>
                      setAuthMode(authMode === "login" ? "signup" : "login")
                    }
                    className="text-[#74d1dc] hover:text-[#5ab8c4] font-semibold"
                  >
                    {authMode === "login" ? "Sign up" : "Sign in"}
                  </button>
                </p>

                <div className="pt-6 border-t border-[#74d1dc]/20">
                  <p className="text-center text-sm text-gray-500 mb-4">
                    Or continue with
                  </p>
                  <button
                    onClick={handleGoogleAuth}
                    className="w-full px-4 py-3 bg-black border-2 border-[#74d1dc]/30 rounded-lg text-white hover:border-[#74d1dc] transition-all flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
