import { motion } from "motion/react";
import { Target, Users, Award, Heart } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            About <span className="text-[#74d1dc]">HealthMate</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering people with AI-driven health guidance and support for a healthier tomorrow.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#74d1dc]/20 to-[#5ab8c4]/10 border border-[#74d1dc]/30 rounded-3xl p-8 sm:p-12 mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#74d1dc]/20 rounded-xl flex items-center justify-center">
              <Target className="text-[#74d1dc]" size={32} />
            </div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            HealthMate was created with a simple yet powerful mission: to make health guidance accessible to everyone,
            anytime, anywhere. We believe that everyone deserves quick, reliable answers to their health questions
            without the barriers of cost, time, or location. Our AI-powered assistant provides preliminary health
            information and guidance to help you make informed decisions about your wellbeing.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Heart size={32} />,
              title: "Compassionate Care",
              description: "We approach every interaction with empathy and understanding, recognizing that health concerns are deeply personal.",
            },
            {
              icon: <Award size={32} />,
              title: "Excellence",
              description: "We continuously improve our AI technology to provide the most accurate and helpful health information possible.",
            },
            {
              icon: <Users size={32} />,
              title: "Accessibility",
              description: "Health guidance should be available to everyone. We're committed to breaking down barriers to healthcare information.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 border border-[#74d1dc]/20 rounded-2xl p-8 hover:border-[#74d1dc] transition-all"
            >
              <div className="w-16 h-16 bg-[#74d1dc]/20 rounded-xl flex items-center justify-center mb-6 text-[#74d1dc]">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-[#74d1dc]/20 rounded-3xl p-8 sm:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">💬 AI Health Conversations</h3>
              <p>
                Our advanced AI assistant can discuss a wide range of health topics, from common symptoms to
                wellness advice, providing you with preliminary information to guide your health decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">📚 Health Education</h3>
              <p>
                We provide educational content about various health conditions, treatments, and preventive care
                to help you better understand your health and wellbeing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">🔒 Privacy & Security</h3>
              <p>
                Your health information is sensitive and personal. We use industry-standard encryption and
                security practices to protect your data and maintain your privacy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">⚠️ Important Notice</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            HealthMate is designed to provide general health information and guidance. It is <strong className="text-white">NOT</strong> a
            substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician
            or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
