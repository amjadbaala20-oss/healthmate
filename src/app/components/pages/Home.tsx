import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Activity, Brain, Shield, Zap } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                  ✨ AI-Powered Health Assistant
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
                Get instant health guidance, symptom analysis, and personalized wellness recommendations
                powered by advanced AI technology. Available 24/7 to support your health journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="group px-8 py-4 bg-[#74d1dc] text-black rounded-lg font-semibold hover:bg-[#5ab8c4] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#74d1dc]/50"
                >
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 border border-[#74d1dc] text-[#74d1dc] rounded-lg font-semibold hover:bg-[#74d1dc]/10 transition-all flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Animated AI Doctor */}
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

                {/* AI Doctor Character */}
                <div className="relative bg-gradient-to-br from-[#74d1dc]/20 to-[#5ab8c4]/10 rounded-full p-8 border-2 border-[#74d1dc]/30 backdrop-blur-sm">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full aspect-square flex items-center justify-center"
                  >
                    {/* Simple AI Doctor Illustration */}
                    <div className="relative">
                      {/* Head */}
                      <div className="w-32 h-32 bg-[#74d1dc] rounded-full relative">
                        {/* Eyes */}
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute top-12 left-8 w-6 h-6 bg-black rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute top-12 right-8 w-6 h-6 bg-black rounded-full"
                        />
                        {/* Smile */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-8 border-b-4 border-black rounded-full" />

                        {/* Medical Cross on Forehead */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2">
                          <div className="w-4 h-12 bg-black rounded-sm absolute left-1/2 -translate-x-1/2" />
                          <div className="w-12 h-4 bg-black rounded-sm absolute top-4" />
                        </div>
                      </div>

                      {/* Body */}
                      <div className="w-40 h-24 bg-white rounded-t-3xl mx-auto -mt-4 relative">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-12 bg-[#74d1dc]" />
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
                        className="absolute top-20 -left-8 w-12 h-12 bg-[#74d1dc]/20 rounded-lg border border-[#74d1dc] flex items-center justify-center backdrop-blur-sm"
                      >
                        <Brain className="text-[#74d1dc]" size={24} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-[#74d1dc]">HealthMate</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced AI technology combined with medical knowledge to provide you with reliable health guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain size={32} />,
                title: "AI-Powered Intelligence",
                description: "Advanced machine learning algorithms analyze your symptoms and provide accurate health insights.",
              },
              {
                icon: <Shield size={32} />,
                title: "Secure & Private",
                description: "Your health data is encrypted and protected. We prioritize your privacy and security.",
              },
              {
                icon: <Zap size={32} />,
                title: "Instant Responses",
                description: "Get immediate answers to your health questions 24/7. No waiting rooms, no appointments needed.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#74d1dc]/10 to-transparent border border-[#74d1dc]/30 rounded-2xl p-8 hover:border-[#74d1dc] transition-all group"
              >
                <div className="w-16 h-16 bg-[#74d1dc]/20 rounded-xl flex items-center justify-center mb-6 text-[#74d1dc] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#74d1dc]/20 to-[#5ab8c4]/10 border border-[#74d1dc]/30 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of users who trust HealthMate for their health guidance.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#74d1dc] text-black rounded-lg font-semibold hover:bg-[#5ab8c4] transition-all shadow-lg shadow-[#74d1dc]/50"
            >
              Start Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
