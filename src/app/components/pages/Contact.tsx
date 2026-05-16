import { motion } from "motion/react";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Contact <span className="text-[#74d1dc]">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Whether you have a question about features, need support, or just want to say hello,
              our team is here to help you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#74d1dc]/20 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-[#74d1dc]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400">support@healthmate.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#74d1dc]/20 rounded-lg flex items-center justify-center shrink-0">
                  <MessageSquare className="text-[#74d1dc]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Live Chat</h3>
                  <p className="text-gray-400">Available 24/7 for urgent inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#74d1dc]/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-[#74d1dc]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400">San Francisco, CA 94102<br />United States</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 bg-gradient-to-br from-[#74d1dc]/20 to-[#5ab8c4]/10 border border-[#74d1dc]/30 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/healthmate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#74d1dc]/20 border border-[#74d1dc]/30 rounded-lg flex items-center justify-center hover:bg-[#74d1dc]/30 transition-all"
                >
                  <svg className="w-5 h-5 text-[#74d1dc]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/healthmate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#74d1dc]/20 border border-[#74d1dc]/30 rounded-lg flex items-center justify-center hover:bg-[#74d1dc]/30 transition-all"
                >
                  <svg className="w-5 h-5 text-[#74d1dc]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/healthmate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#74d1dc]/20 border border-[#74d1dc]/30 rounded-lg flex items-center justify-center hover:bg-[#74d1dc]/30 transition-all"
                >
                  <svg className="w-5 h-5 text-[#74d1dc]" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-6 bg-gray-900 border border-[#74d1dc]/20 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Support Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-[#74d1dc]">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="text-[#74d1dc]">10:00 AM - 4:00 PM PST</span>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  * AI Chat is available 24/7
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gray-900 border border-[#74d1dc]/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#74d1dc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-[#74d1dc]" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#74d1dc] mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black border border-[#74d1dc]/30 rounded-lg text-white focus:outline-none focus:border-[#74d1dc] transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#74d1dc] text-black rounded-lg font-semibold hover:bg-[#5ab8c4] transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
