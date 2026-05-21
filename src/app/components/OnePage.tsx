import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  Menu,
  X,
  ChevronUp,
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
import { RobotDoctor } from "./RobotDoctor";
import { BrandLogo } from "./BrandLogo";
import { useAuth } from "./AuthContext";

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

export function OnePage() {
  const navigate = useNavigate();
  const { isAuthenticated, login, signup, loginWithGoogle, logout } = useAuth();
  const devs = [
    { name: "Amjad Baala", emoji: "👨‍💻" },
    { name: "Basma Alabouch", emoji: "👩‍💻" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    login(loginData.email, loginData.password);
    setShowAuthModal(false);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    signup(signupData.name, signupData.email, signupData.password);
    setShowAuthModal(false);
  };

  const handleGoogleAuth = () => {
    loginWithGoogle();
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    logout();
    scrollToSection("home");
  };

  return (
    <div className="bg-black text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#74d1dc]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToTop()}
            >
              <BrandLogo />
              <span className="text-xl font-bold">
                <span className="text-white">Health</span>
                <span className="text-[#74d1dc]">Mate</span>
              </span>
            </div>

            {/* Desktop Navigation - REORDERED */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-[#74d1dc] transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("intelligence")}
                className="text-white hover:text-[#74d1dc] transition-colors font-medium"
              >
                Intelligence
              </button>
              <button
                onClick={() => navigate("/chat")}
                className="text-white hover:text-[#74d1dc] transition-colors font-medium"
              >
                AI Chat
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-[#74d1dc] transition-colors font-medium"
              >
                Contact
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
        </div>

        {/* Mobile Navigation - REORDERED */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black border-t border-[#74d1dc]/20 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left text-white hover:text-[#74d1dc] transition-colors font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("intelligence")}
                  className="block w-full text-left text-white hover:text-[#74d1dc] transition-colors font-medium"
                >
                  Intelligence
                </button>
                <button
                  onClick={() => navigate("/chat")}
                  className="block w-full text-left text-white hover:text-[#74d1dc] transition-colors font-medium"
                >
                  AI Chat
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left text-white hover:text-[#74d1dc] transition-colors font-medium"
                >
                  Contact
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
        </AnimatePresence>
      </nav>
      {/* HOME Section - WITH ROBOT DOCTOR */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(116,209,220,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(116,209,220,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Glowing Orb Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#74d1dc]/20 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-2 bg-[#74d1dc]/10 border border-[#74d1dc]/30 rounded-full mb-6"
              >
                <span className="text-[#74d1dc] text-sm font-medium">
                  AI-Powered Health Assistant
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Health</span>
                <span className="text-[#74d1dc]">Mate</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                Your personal AI health assistant
              </p>

              <p className="text-gray-400 mb-8 max-w-lg">
                Get instant health guidance, symptom analysis, and personalized
                wellness recommendations powered by advanced AI technology.
                Available 24/7 to support your health journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setAuthMode("signup");
                    setShowAuthModal(true);
                  }}
                  className="group px-8 py-4 bg-[#74d1dc] text-black rounded-lg font-semibold hover:bg-[#5ab8c4] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#74d1dc]/50"
                >
                  Get Started
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
                <button
                  onClick={() => scrollToSection("intelligence")}
                  className="px-8 py-4 border border-[#74d1dc] text-[#74d1dc] rounded-lg font-semibold hover:bg-[#74d1dc]/10 transition-all flex items-center justify-center"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Right Content - ROBOT DOCTOR ANIMATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Pulsing Rings */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 border-2 border-[#74d1dc] rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute inset-0 border-2 border-[#74d1dc] rounded-full"
                />

                {/* Robot Doctor */}
                <div className="relative bg-gradient-to-br from-[#74d1dc]/20 to-[#5ab8c4]/10 rounded-full p-8 border-2 border-[#74d1dc]/30 backdrop-blur-sm flex items-center justify-center min-h-[400px]">
                  <RobotDoctor isWaving={true} size="large" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intelligence Section */}
      <section
        id="intelligence"
        className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 pb-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              AI <span className="text-[#74d1dc]">Intelligence</span>
            </h2>

            {/* NEW: Explanatory Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-[#74d1dc]/10 to-[#5ab8c4]/5 border-2 border-[#74d1dc]/30 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#74d1dc]/20 rounded-lg flex items-center justify-center shrink-0">
                  <Brain className="text-[#74d1dc]" size={28} />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    What is HealthMate?
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    HealthMate is an advanced <span className="text-[#74d1dc] font-semibold">AI-powered medical assistant</span> designed to help you understand your symptoms, receive general health guidance, and know when you should visit a doctor. Our intelligent system combines medical knowledge with machine learning to provide reliable health information at your fingertips, 24/7. While we offer comprehensive health guidance, we always recommend consulting with healthcare professionals for personalized medical advice and treatment.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Existing Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Brain size={40} />,
                title: "Symptom Analysis",
                description:
                  "Our AI analyzes your symptoms using advanced machine learning algorithms to provide accurate health insights and recommendations.",
              },
              {
                icon: <Shield size={40} />,
                title: "Health Suggestions",
                description:
                  "Get personalized health suggestions based on your symptoms, medical history, and lifestyle. All data is encrypted and secure.",
              },
              {
                icon: <Zap size={40} />,
                title: "24/7 AI Assistant",
                description:
                  "Access instant health guidance anytime, anywhere. Our AI assistant is available round the clock to answer your health questions.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#74d1dc]/10 to-transparent border-2 border-[#74d1dc]/30 rounded-2xl p-8 hover:border-[#74d1dc] transition-all group hover:shadow-xl hover:shadow-[#74d1dc]/20"
              >
                <div className="w-20 h-20 bg-[#74d1dc]/20 rounded-xl flex items-center justify-center mb-6 text-[#74d1dc] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* NEW: Statistics Section - "By the Numbers" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              By the <span className="text-[#74d1dc]">Numbers</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users size={48} />,
                  number: 100,
                  suffix: "+",
                  label: "Expert Doctors Database",
                },
                {
                  icon: <HeartPulse size={48} />,
                  number: 50,
                  suffix: "+",
                  label: "Conditions Covered",
                },
                {
                  icon: <Award size={48} />,
                  number: 23049,
                  suffix: "",
                  label: "Happy Users",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-gradient-to-br from-[#74d1dc]/20 to-[#5ab8c4]/10 border-2 border-[#74d1dc]/40 rounded-2xl p-8 text-center hover:scale-105 transition-transform"
                >
                  <div className="w-20 h-20 bg-[#74d1dc]/30 rounded-full flex items-center justify-center mx-auto mb-6 text-[#74d1dc]">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold text-[#74d1dc] mb-3">
                    <CountingNumber end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-300 text-lg font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Developers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Meet the Student Developers Behind HealthMate
              </h3>
              <p className="text-gray-500 text-base max-w-2xl mx-auto">
                Built with passion by BTS students in Digital Application Development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {devs.map((dev, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 18px 38px rgba(116,209,220,0.1)",
                  }}
                  className="relative overflow-hidden rounded-2xl border border-[#74d1dc]/25 bg-[#74d1dc]/5 px-8 py-10 text-center transition-all hover:bg-[#74d1dc]/10"
                >
                  <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#74d1dc] bg-gradient-to-br from-[#74d1dc]/20 to-[#74d1dc]/5 text-4xl shadow-lg shadow-[#74d1dc]/20">
                    {dev.emoji}
                  </div>

                  <h4 className="mb-2 text-xl font-bold text-[#74d1dc]">
                    {dev.name}
                  </h4>

                  <div className="mb-4 inline-block rounded-full border border-[#74d1dc]/25 bg-[#74d1dc]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#74d1dc]">
                    HealthMate Developer
                  </div>

                  <p className="m-0 text-sm leading-relaxed text-gray-400">
                    Higher Technician Certificate (BTS) Student in Computer Application Development.
                  </p>

                  <div className="absolute bottom-0 left-[28%] right-[28%] h-[2px] rounded bg-gradient-to-r from-transparent via-[#74d1dc] to-transparent" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* KEPT: Important Notice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-2 border-yellow-500/40 rounded-2xl p-10 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              ⚠️ Important Notice
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              HealthMate provides general health guidance and does not replace
              professional medical advice. It is{" "}
              <strong className="text-white">NOT</strong> a substitute for
              professional medical advice, diagnosis, or treatment. Always seek
              the advice of your physician or other qualified health provider
              with any questions you may have regarding a medical condition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - KEPT AS IS */}
      <section id="contact" className="min-h-screen bg-black pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Contact <span className="text-[#74d1dc]">Us</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have questions or feedback? We'd love to hear from you
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#74d1dc]/20 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-[#74d1dc]" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-xl mb-2">
                    Email
                  </h3>
                  <p className="text-gray-400 text-lg">
                    support@healthmate.ai
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#74d1dc]/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-[#74d1dc]" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-xl mb-2">
                    Location
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Meknes, 33.8935, -5.5473
                    <br />
                    Morocco
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-[#74d1dc]/20 to-[#5ab8c4]/10 border-2 border-[#74d1dc]/30 rounded-2xl p-8">
                <h3 className="font-semibold text-white text-xl mb-6">
                  Follow Us on Social Media
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com/healthmate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#74d1dc]/20 border-2 border-[#74d1dc]/30 rounded-lg flex items-center justify-center hover:bg-[#74d1dc]/30 hover:scale-110 transition-all"
                  >
                    <svg
                      className="w-6 h-6 text-[#74d1dc]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/healthmate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#74d1dc]/20 border-2 border-[#74d1dc]/30 rounded-lg flex items-center justify-center hover:bg-[#74d1dc]/30 hover:scale-110 transition-all"
                  >
                    <svg
                      className="w-6 h-6 text-[#74d1dc]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/healthmate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#74d1dc]/20 border-2 border-[#74d1dc]/30 rounded-lg flex items-center justify-center hover:bg-[#74d1dc]/30 hover:scale-110 transition-all"
                  >
                    <svg
                      className="w-6 h-6 text-[#74d1dc]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="17.5" cy="6.5" r="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 border-2 border-[#74d1dc]/30 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 bg-black border-2 border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 bg-black border-2 border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-5 py-4 bg-black border-2 border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#74d1dc] text-black rounded-lg font-semibold hover:bg-[#5ab8c4] transition-all shadow-lg shadow-[#74d1dc]/50"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
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
