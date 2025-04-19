import React from "react";
import { motion } from "framer-motion";

const BackgroundEffect = ({ variant = "default" }) => {
  const getBackgroundElements = () => {
    switch (variant) {
      case "home":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 to-accent-50/40 z-[-20]"></div>
            <div
              className="absolute inset-0 opacity-10 z-[-19]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.6' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundSize: "4px 4px",
              }}
            ></div>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`home-blob-${i}`}
                className="absolute rounded-full z-[-18] bg-gradient-to-br from-primary-200/50 via-primary-300/40 to-accent-200/50 blur-3xl"
                style={{
                  width: `${Math.random() * 400 + 300}px`,
                  height: `${Math.random() * 400 + 300}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0.6, scale: 0.8 }}
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                  scale: [0.8, 1, 0.8],
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 5,
                }}
              />
            ))}
          </>
        );
      case "about":
        return (
          <>
            <div
              className="absolute inset-0 opacity-10 z-[-20]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-50/30 via-transparent to-primary-50/30 z-[-19]"></div>
          </>
        );
      case "services":
        return (
          <>
            <div
              className="absolute inset-0 opacity-10 z-[-20]"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.1) 25%, transparent 25%), linear-gradient(225deg, rgba(0,0,0,0.1) 25%, transparent 25%)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 via-transparent to-accent-50/20 z-[-19]"></div>
          </>
        );
      case "portfolio":
        return (
          <>
            <div
              className="absolute inset-0 opacity-10 z-[-20]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-secondary-100/40 z-[-19]"></div>
          </>
        );
      case "contact":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-accent-50/30 z-[-20]"></div>
            <div
              className="absolute inset-0 opacity-10 z-[-19]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                backgroundSize: "16px 16px",
              }}
            ></div>
          </>
        );
      default:
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-accent-50/20 z-[-20]"></div>
            <div
              className="absolute inset-0 opacity-10 z-[-19]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.6' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundSize: "4px 4px",
              }}
            ></div>
          </>
        );
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: -50 }}
    >
      {getBackgroundElements()}
    </div>
  );
};

export default BackgroundEffect;
