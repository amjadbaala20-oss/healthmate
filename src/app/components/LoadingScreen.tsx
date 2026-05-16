import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Auto-complete after 5 seconds
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
    >
      {/* HealthMate Text Only */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-20"
      >
        <span className="text-white">Health</span>
        <span className="text-[#74d1dc]">Mate</span>
      </motion.h1>

      {/* ECG Heartbeat Animation ONLY */}
      <div className="relative w-[500px] h-40">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated ECG Line */}
          <motion.path
            d="M0 80 L80 80 L90 80 L95 25 L100 135 L105 80 L120 80 L400 80"
            stroke="#74d1dc"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Glowing effect */}
          <motion.path
            d="M0 80 L80 80 L90 80 L95 25 L100 135 L105 80 L120 80 L400 80"
            stroke="#74d1dc"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
            filter="blur(6px)"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* ECG Grid lines */}
          {[...Array(20)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 20}
              y1={0}
              x2={i * 20}
              y2={160}
              stroke="#74d1dc"
              strokeWidth="0.5"
              opacity="0.1"
            />
          ))}
          {[...Array(9)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1={0}
              y1={i * 20}
              x2={400}
              y2={i * 20}
              stroke="#74d1dc"
              strokeWidth="0.5"
              opacity="0.1"
            />
          ))}
        </svg>
      </div>

      {/* Minimal Progress Bar */}
      <div className="w-[500px] h-1 bg-gray-800 rounded-full overflow-hidden mt-16">
        <motion.div
          className="h-full bg-[#74d1dc]"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
