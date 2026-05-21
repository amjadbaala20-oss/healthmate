import { motion } from "motion/react";
import { Activity, Brain } from "lucide-react";

export function RobotDoctor({
  isWaving = true,
  size = "large",
}: {
  isWaving?: boolean;
  size?: "large" | "small";
}) {
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
      <div className="relative w-48 h-64">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-[#74d1dc] to-[#5ab8c4] rounded-2xl relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-6 bg-[#74d1dc]">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#74d1dc] rounded-full"
            />
          </div>

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

          <div className="absolute top-3 left-1/2 -translate-x-1/2">
            <div className="w-3 h-8 bg-white rounded-sm absolute left-1/2 -translate-x-1/2" />
            <div className="w-8 h-3 bg-white rounded-sm absolute top-2.5" />
          </div>

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

        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-36 h-32 bg-white rounded-t-3xl">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-[#74d1dc]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 border-4 border-[#74d1dc] rounded-full bg-black" />
          </div>

          <div className="absolute top-6 left-1/2 -translate-x-1/2 space-y-3">
            <div className="w-2 h-2 bg-[#74d1dc] rounded-full" />
            <div className="w-2 h-2 bg-[#74d1dc] rounded-full" />
            <div className="w-2 h-2 bg-[#74d1dc] rounded-full" />
          </div>
        </div>

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
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#74d1dc] rounded-full" />
          </motion.div>
        ) : (
          <div className="absolute top-32 -left-2 w-6 h-20 bg-[#74d1dc] rounded-full">
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#74d1dc] rounded-full" />
          </div>
        )}

        <div className="absolute top-32 -right-2 w-6 h-20 bg-[#74d1dc] rounded-full">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#74d1dc] rounded-full" />
        </div>

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
