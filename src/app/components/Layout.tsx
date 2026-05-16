import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "./AuthContext";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/chat", label: "AI Chat" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#74d1dc]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#74d1dc] to-[#5ab8c4] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold text-[#74d1dc]">HealthMate</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? "text-[#74d1dc]"
                      : "text-white hover:text-[#74d1dc]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="px-4 py-2 border border-[#74d1dc] text-[#74d1dc] rounded-lg hover:bg-[#74d1dc] hover:text-black transition-all flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 border border-[#74d1dc] text-[#74d1dc] rounded-lg hover:bg-[#74d1dc] hover:text-black transition-all"
                >
                  Login
                </Link>
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-[#74d1dc]/20">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block transition-colors ${
                    isActive(link.path)
                      ? "text-[#74d1dc]"
                      : "text-white hover:text-[#74d1dc]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 border border-[#74d1dc] text-[#74d1dc] rounded-lg hover:bg-[#74d1dc] hover:text-black transition-all text-center flex items-center justify-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 border border-[#74d1dc] text-[#74d1dc] rounded-lg hover:bg-[#74d1dc] hover:text-black transition-all text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer with Disclaimer and Social Media */}
      <footer className="bg-black border-t border-[#74d1dc]/20 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://twitter.com/healthmate"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#74d1dc]/10 border border-[#74d1dc]/30 rounded-full flex items-center justify-center hover:bg-[#74d1dc]/20 transition-all"
            >
              <svg className="w-5 h-5 text-[#74d1dc]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/healthmate"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#74d1dc]/10 border border-[#74d1dc]/30 rounded-full flex items-center justify-center hover:bg-[#74d1dc]/20 transition-all"
            >
              <svg className="w-5 h-5 text-[#74d1dc]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/healthmate"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#74d1dc]/10 border border-[#74d1dc]/30 rounded-full flex items-center justify-center hover:bg-[#74d1dc]/20 transition-all"
            >
              <svg className="w-5 h-5 text-[#74d1dc]" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              ⚠️ <span className="text-[#74d1dc]/80">Disclaimer:</span> HealthMate provides general health guidance and does not replace professional medical advice.
            </p>
            <p className="text-sm text-gray-500">
              © 2026 HealthMate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
